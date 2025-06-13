import Box from "./box";
import style from "./row.module.scss";

interface RowCurrentPops{
    word : string;
}

export default function RowCurrent({word}:RowCurrentPops){
    return <div className={style.row}>
        {
            word.split('').map((letter, i)=>(
                <Box key = {i} value={letter} status = "edit"/>

            ))}

               {Array.from(Array(5 - word.length)).map((letter, i)=>(
                <Box key = {i} value={letter} status = "edit"/>

            ))}
        </div>
}