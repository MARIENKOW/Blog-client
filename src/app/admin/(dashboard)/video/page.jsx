"use client";

import { ContainerComponent } from "../../../../components/wrappers/ContainerComponent";
import { enqueueSnackbar } from "notistack";
import BlogService from "../../../../services/BlogService";
import { useState } from "react";
import {
    Box,
    IconButton,
    FormHelperText,
    CircularProgress,
    useTheme,
} from "@mui/material";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import { StyledLoadingButton } from "../../../../components/form/StyledLoadingButton";
import VideoService from "../../../../services/VideoService";

const video = new VideoService();

export default function () {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const [imgPreview, setImagePreview] = useState();
    const [imgId, setId] = useState();
    const [error, setError] = useState();

    const handleDelete = async () => {
        try {
            console.log('object');
            setLoading(true);
            await video.delete(imgId);
            setImagePreview(null);
        } catch (e) {
            setError("Упс! Что-то пошло не так");
        } finally {
            setLoading(false);
        }
    };
    const loadVideo = async (body) => {
        try {
            setLoading(true);
            console.log(body);
            const { data } = await video.create({ video: body });
            setId(data.id);
            setImagePreview(data.path);
        } catch (e) {
            setError("Упс! Что-то пошло не так");
        } finally {
            setLoading(false);
        }
    };

    return (
        <ContainerComponent>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                {imgPreview ? (
                    <Box sx={{ position: "relative", flex: 1 }}>
                        <video
                            src={imgPreview}
                            controls
                            height="auto"
                            width="100%"
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
                                        bgcolor:
                                            theme.palette.error.contrastText,
                                        borderRadius: "99px",
                                        width: 30,
                                        height: 30,
                                    }}
                                    color="error"
                                    fontSize="large"
                                />
                            )}
                        </IconButton>
                    </Box>
                ) : (
                    <>
                        <input
                            accept="video/*"
                            style={{ display: "none" }}
                            id="raised-button-file"
                            multiple
                            type="file"
                            onChange={(event) => {
                                const files = event.target.files;
                                if (files && files[0]) {
                                    // handleFileChange(files[0]);
                                    console.log(files[0]);
                                    // onChange(files[0]);
                                    loadVideo(files[0]);
                                }
                            }}
                        />
                        <label
                            style={{ height: "100%" }}
                            htmlFor="raised-button-file"
                        >
                            {/* <StyledLoadingButton
                                loading={loading}
                                variant="contained"
                            >
                                click
                            </StyledLoadingButton> */}
                            jnkolp
                        </label>
                    </>
                )}
                {error && (
                    <FormHelperText
                        sx={{ ml: "14px", mr: "14px" }}
                        error={!!error}
                    >
                        {error && (error?.message || "incorrect data")}
                    </FormHelperText>
                )}
            </Box>
        </ContainerComponent>
    );
}
