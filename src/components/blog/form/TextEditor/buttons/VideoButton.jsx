import { CircularProgress, IconButton } from "@mui/material";
import VideoService from "../../../../../services/VideoService";
import { useContext, useRef, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { VideosIdContext } from "../../BlogForm";

const video = new VideoService();

export default function VideoButton({ editor }) {
    const fileInputRef = useRef();
    const [loading, setLoading] = useState(false);
    const {setVideos_id} = useContext(VideosIdContext)

    const loadVideo = async (body, event) => {
        try {
            setLoading(true);
            const { data } = await video.create({ video: body });
            setVideos_id((prevArr) => [...prevArr, data.id]);
            editor
                .chain()
                .focus()
                .setVideo({
                    src: data.path,
                    "data-id": data.id,
                    poster: data.poster,
                })
                .run();
        } catch (e) {
            console.log(e);
            enqueueSnackbar("Упс! что-то пошло не так", { variant: "error" });
        } finally {
            event.target.value = "";
            setLoading(false);
        }
    };

    return (
        <>
            <input
                accept="video/*"
                style={{ display: "none" }}
                id="raised-button-file"
                ref={fileInputRef}
                // multiple
                type="file"
                onChange={(event) => {
                    const files = event.target.files;
                    if (files && files[0]) {
                        // handleFileChange(files[0]);
                        console.log(files[0]);
                        // onChange(files[0]);
                        loadVideo(files[0], event);
                    }
                }}
            />
            <IconButton onClick={() => fileInputRef.current.click()}>
                video
                {loading && <CircularProgress size="20px" />}
            </IconButton>
        </>
    );
}
