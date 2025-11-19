import { Box, Grid2, Typography } from "@mui/material";
import { Subtitile } from "../../components/Subtitle";
import { ContainerComponent } from "../../components/wrappers/ContainerComponent";

export const Person = ({ person }) => {
    return (
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            // alignItems={''}
            bgcolor={"#fff"}
            padding={3}
            borderRadius={4}
            gap={5}
        >
            <Box>
                <Typography
                    lineHeight={"19px"}
                    fontWeight={"600"}
                    color="grey[300]"
                    variant="body1"
                    fontSize={"15px"}
                    // textAlign={"right"}
                >
                    {person.status}
                </Typography>
            </Box>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"end"}
                maxWidth={"130px"}
                gap={1}
            >
                <Box
                    component={"img"}
                    // width={"100%"}
                    width={"90px"}
                    sx={{ objectFit: "cover", aspectRatio: "1/1" }}
                    alt={person.name}
                    src={person.logo || '/defaultPersonLogo.jpg'}
                />
                <Typography
                    lineHeight={"15px"}
                    fontWeight={"500"}
                    variant="body2"
                    textAlign={"right"}
                >
                    {person.name}
                </Typography>
            </Box>
        </Box>
    );
};

const personArr = [
    {
        name: "Рав-Пакад Евгений Браверман",
        status: "Отдел Яхбал",
        logo: "/1.jpg",
    },
    { name: "Пакад Игорь Пибенев", status: "Отдел Яхбал", logo: "/2.jpg" },
    {
        name: "Даниель Леви",
        status: "Генеральный инспектор полиции Израиля",
        logo: "/3.jpg",
    },
    {
        name: "Пакад Йехиэль Бохадана",
        status: "Отдел Яхбал",
        logo: "/4.jpg",
    },
    {
        name: "Тат - ницаф Ави Коэн",
        status: "Отдел Яхбал",
        logo: "/5.jpg",
    },
];

export const Persons = () => {
    if (!personArr || personArr?.length === 0) return null;
    return (
        <ContainerComponent>
            <Subtitile text={"Структура подразделения"} />
            <Grid2 columns={2} spacing={2} container>
                {personArr?.map((e, i) => (
                    <Grid2 size={{ xs: 2, md: 2 }} key={i}>
                        <Person person={e} />
                    </Grid2>
                ))}
            </Grid2>
        </ContainerComponent>
    );
};
