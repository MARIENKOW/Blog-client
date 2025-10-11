import {
    Card,
    CardActions,
    CardHeader,
    CircularProgress,
    Grid2,
    IconButton,
} from "@mui/material";
import VideoService from "../../../../../services/VideoService";
import { useContext, useRef, useState } from "react";
import { enqueueSnackbar } from "notistack";
import { VideosIdContext } from "../../BlogForm";
import {
    Box,
    FormHelperText,
    InputLabel,
    Button,
    FormControl,
} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { StyledLoadingButton } from "../../../../form/StyledLoadingButton";
import { useQuery } from "@tanstack/react-query";
import { CanceledError } from "axios";
import Pagination from "../../../../Pagination";
import { VideoControll } from "./VideoControll";
import { grey } from "@mui/material/colors";

const video = new VideoService();

export default function VideoButton({ editor }) {
    const popupRef = useRef();
    const fileInputRef = useRef();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);

    const { error, data, isPending, refetch } = useQuery({
        queryKey: ["videos", page],
        queryFn: async () => {
            try {
                const { data } = await video.getAll(page);
                console.log(data);
                return data;
            } catch (error) {
                if (error instanceof CanceledError) return;
                throw new Error(error);
            }
        },
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const loadVideo = async (body, event) => {
        try {
            setLoading(true);
            await video.create({ video: body });
            await refetch();
            if (popupRef.current) {
                popupRef.current.scrollTop = 0; // прокрутка в самый верх
            }
            enqueueSnackbar("Видео загружено", { variant: "success" });
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
            <IconButton onClick={handleClickOpen}>
                video
                {loading && <CircularProgress size="20px" />}
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent
                    ref={popupRef}
                    sx={{ display: "flex", flexDirection: "column" }}
                >
                    {isPending ? (
                        <CircularProgress size="20px" />
                    ) : (
                        <>
                            <Box flex={1}>
                                <Grid2
                                    spacing={1}
                                    height={"100%"}
                                    container
                                    columns={{ xs: 1, sm: 2, md: 2, lg: 2 }}
                                >
                                    {data?.data?.map((e) => (
                                        <Grid2 size={1} key={e.id}>
                                            <VideoControll
                                                handleClose={handleClose}
                                                editor={editor}
                                                refetch={refetch}
                                                e={e}
                                            />
                                        </Grid2>
                                    ))}
                                </Grid2>
                            </Box>
                            <Pagination
                                color={"primary"}
                                pageCount={data.info.countPages}
                                currentPage={data.info.currentPage}
                                getData={setPage}
                            />
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отмена</Button>
                    <StyledLoadingButton
                        onClick={() => fileInputRef.current.click()}
                        sx={{ height: "100%" }}
                        loading={loading}
                        variant="contained"
                    >
                        load video
                    </StyledLoadingButton>
                </DialogActions>
            </Dialog>
        </>
    );
}
