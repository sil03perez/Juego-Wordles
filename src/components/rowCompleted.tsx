import Box from "./box";
import { BoxStatus } from "./types";
import style from "./row.module.scss";

 interface rowCompletedProps{
    word : string;
    solution: string;
}

export default function rowCompleted({word, solution}:rowCompletedProps){
   
    function checkLetter(letter: string, pos:number): BoxStatus{
     if(solution.includes(letter)){
        if(solution[pos]===letter){
        return "correct";
     }else{
        return "present"
     }
     }else{
        return "absent"
     }
 }
    return(
            <div className={style.row}>
        {
            Array.from(Array(5)).map((_, i)=> (
                <Box key={i} value={word[i]} status={checkLetter(word[i], i)}/>
            ))
        }
    </div>
    );
}