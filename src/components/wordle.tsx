import { useState } from "react";
import RowCompleted from "./rowCompleted";
import RowCurrent from "./rowCurrent";
import RowEmpty from "./rowEmpty";


export default function Wordle(){
    const [wordOftheday, setWordOfTheDay]= useState<string>();
    const [Turn, setTurn] = useState<number>(1);
    const [currentWord, setCurrentWord] = useState<string>("");
    
    return <div>
        <RowCompleted word = "sabia" solution = "sabio"/>
        <RowCompleted word = "sabia" solution = "sabio"/>
        <RowCurrent word = "saba" />
        <RowEmpty/>
        <RowEmpty/>
        <RowEmpty/>
    </div>;
}