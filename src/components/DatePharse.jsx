import dayjs from "dayjs";
import "dayjs/locale/ru";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";

dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.locale("ru");

export default function DatePharse({ date }) {
    const d = dayjs(date, "DD.MM.YYYY");
    const now = dayjs();

    let output;
    if (d.isToday()) {
        output = "Сегодня";
    } else if (d.isYesterday()) {
        output = "Вчера";
    } else if (d.year() === now.year()) {
        output = d.format("D MMMM"); // "1 сентября"
    } else {
        output = d.format("DD.MM.YYYY"); // "22.03.2024"
    }

    return output;
}
