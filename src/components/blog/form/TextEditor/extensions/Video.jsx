import { CircularProgress, IconButton, useTheme } from "@mui/material";
import { Node, mergeAttributes } from "@tiptap/core";
import {
    NodeViewWrapper,
    NodeViewContent,
    ReactNodeViewRenderer,
} from "@tiptap/react";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import { useState } from "react";
import VideoService from "../../../../../services/VideoService";
import { enqueueSnackbar } from "notistack";

const video = new VideoService();

const VideoComponent = (props) => {
    const { node, editor, getPos } = props;
    const [loading, setLoading] = useState();

    const handleDelete = async () => {
        try {
            if (!confirm("Удалить видео?")) return;
            setLoading(true);
            await video.delete(node.attrs["data-id"]);
            editor
                .chain()
                .focus()
                .deleteRange({ from: getPos(), to: getPos() + node.nodeSize })
                .run();
        } catch (e) {
            if (e?.response?.status === 404)
                return editor
                    .chain()
                    .focus()
                    .deleteRange({
                        from: getPos(),
                        to: getPos() + node.nodeSize,
                    })
                    .run();
            enqueueSnackbar("Упс! что-то пошло не так", { variant: "error" });
        } finally {
            setLoading(false);
        }
    };

    console.log(node);

    return (
        <NodeViewWrapper className=" inline-block">
            <div style={{ position: "relative" }}>
                <video
                    src={node.attrs.src}
                    data-id={node.attrs["data-id"]}
                    controls
                    width={"100%"}
                    // className="rounded-md max-w-full"
                />
                <IconButton
                    onClick={handleDelete}
                    sx={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        transform: "translate(50%,-50%)",
                    }}
                >
                    {loading ? (
                        <CircularProgress size="30px" />
                    ) : (
                        <HighlightOffTwoToneIcon
                            sx={{
                                bgcolor: "#fff",
                                borderRadius: "99px",
                                width: 30,
                                height: 30,
                            }}
                            color="error"
                            fontSize="large"
                        />
                    )}
                </IconButton>
            </div>
        </NodeViewWrapper>
    );
};

export const Video = Node.create({
    name: "video",
    group: "block",
    // selectable: true,
    atom: true,
    draggable: true,

    addAttributes() {
        return {
            src: { default: null },
            controls: { default: true },
            "data-id": { default: "" },
            width: { default: "100%" },
        };
    },

    parseHTML() {
        return [{ tag: "video" }];
    },
    // addKeyboardShortcuts() {
    //     return {
    //         Backspace: () => {
    //             return true; // блокируем удаление
    //         },
    //         Delete: () => {
    //             return true; // блокируем удаление
    //         },
    //     };
    // },

    renderHTML({ HTMLAttributes }) {
        return ["video", mergeAttributes(HTMLAttributes)];
    },

    addNodeView() {
        return ReactNodeViewRenderer(VideoComponent);
    },

    addCommands() {
        return {
            setVideo:
                (options) =>
                ({ commands }) => {
                    return commands.insertContent({
                        type: this.name,
                        attrs: options,
                    });
                },
        };
    },
});
