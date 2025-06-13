import Box from "./box";
import style from "./row.module.scss";

export default function RowEmpty(){
    return <div className={style.row}> { 
     Array.from(Array(5)).map((_, i)=> (
       <Box key={i} value="" status= "empty"/>
                      
    )) }
       
        </div>
}