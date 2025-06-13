
import { BoxStatus } from "./types";
import styles from './box.module.scss';
import classNames from 'classnames/bind';

const classes = classNames.bind(styles)

interface BoxProps{
    value : string;
    status: BoxStatus;
}

export default function Box({value, status}: BoxProps){
    const boxStatus = classes({
        correct: status === "Correct",
        present: status === "Present",
        absent: status === "Absent",
        empty: status === "empty",
        edit: status === "edit",
    });
    return <div >hola</div>;
}