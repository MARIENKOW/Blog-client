import { Box } from "@mui/material";
import { ContainerComponent } from "./wrappers/ContainerComponent";
import { grey } from "@mui/material/colors";

export const Map = () => {
    return (
        <Box sx={{ bgcolor: grey[100] }}>
            <ContainerComponent sx={{ p: 0 }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108170.00328187265!2d34.64135029004659!3d32.087836046094154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2z0KLQtdC70Ywt0JDQstC40LIsINCY0LfRgNCw0LjQu9GM!5e0!3m2!1sru!2sua!4v1757366737752!5m2!1sru!2sua"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </ContainerComponent>
        </Box>
    );
};
