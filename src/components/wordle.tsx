import { useEffect, useState } from "react";
import RowCompleted from "./rowCompleted";
import RowCurrent from "./rowCurrent";
import RowEmpty from "./rowEmpty";
import { GameStatus } from "./types";
import { useWindow } from "../hooks/useWindows";
import { getWordOfTheDay, isValidWord } from "../service/request";
import style  from "./wordle.module.scss";
import Keyboard from "./keyboard";
 import Modal from "./modal";

const keys =  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
                 "A", "S", "D", "F", "G", "H", "J", "K", "L",
                    "Z", "X", "C", "V", "B", "N", "M"]


export default function Wordle(){
    const [wordOftheday, setWordOfTheDay]= useState<string>("");
    const [Turn, setTurn] = useState<number>(1);
    const [currentWord, setCurrentWord] = useState<string>("");
    const [completeWords, setcompleteWords] = useState<string[]>([]);
    const [gameStatus, setgameStatus]= useState<GameStatus>(GameStatus.Playing);

    useWindow('keydown',handleKeyDown)

    useEffect(()=>{
        setWordOfTheDay(getWordOfTheDay)
    })

    function handleKeyDown(event: KeyboardEvent ){
        const key = event.key.toLocaleUpperCase();

        onKeyPressed(key);

    }

    function onKeyPressed(key:string){

        if(gameStatus != GameStatus.Playing){
            return
        }

        if(key ==="BACKSPACE" && currentWord.length >0){
            onDelete()
            return
        }  if(key === "ENTER" && currentWord.length===5 && Turn <= 6){
            onEnter()
            return
            }  if(currentWord.length >= 5 ) return;   
            
            //ingresar letra al estado
                if(keys.includes(key)){
                    onInput(key);
                    return
                }
    }

    function onInput(letter:string){
        const newWord = currentWord + letter;
        setCurrentWord(newWord);
    }
    function onDelete(){
        const newWord = currentWord.slice(0,-1);
        setCurrentWord(newWord);
    }

        function onEnter(){
            if(currentWord ===wordOftheday){
                setcompleteWords([...completeWords,currentWord])
                setgameStatus(GameStatus.Won)
                return
            }
            //perdio
            if(Turn===6){
                setcompleteWords([...completeWords,currentWord])
                setgameStatus(GameStatus.Lost)
                return
            }

            if(currentWord.length ===5 && !isValidWord(currentWord)){
                alert ("not A Valid WORD");
                return
            }

            setcompleteWords([...completeWords,currentWord]);
            setTurn(Turn+1);
            setCurrentWord("");
        
    }
    return ( 
    <>
        {
            gameStatus === GameStatus.Won ? < Modal type = "Won" completeWords={completeWords} solution={wordOftheday} />
            : gameStatus===GameStatus.Lost ? <Modal type = "lost" completeWords={completeWords} solution={wordOftheday}/>: null
        }

        <div className={style.mainContainer}>
                {completeWords.map((word,i)=>(
                 <RowCompleted key={i} word={word} solution={wordOftheday}/>
                    ))}

                {
                    gameStatus===GameStatus.Playing ?(<RowCurrent word = {currentWord}/>):null 
                }

                {Array.from(Array(6-Turn)).map((_,i)=> (
                        <RowEmpty key = {i}/>
                    ))}
                </div>
                <Keyboard keys={keys} onKeyPressed={onKeyPressed}/>
                        </>
                    )
}