import Style  from "./moda;.module.scss";
interface ModalProps{
    type:"Won" | "lost";
    completeWords: string[];
    solution: string;
}

interface SquareProps{
    Word : string
    solution:string
}

export default function Modal({type,completeWords,solution}:ModalProps){
    function Square({Word,solution}:SquareProps){
        function checkLetter(letter: string, pos: number): string {
      if (solution.includes(letter)) {
        if (solution[pos] === letter) {
          return "🟩";
        } else {
          return "🟨";
        }
      } else {
        return "⬛";
      }
    }
        return(
            <div className={Style.puzzleWord}>
                {Word.split("").map((letter,i)=>(
                    <div>{checkLetter(letter,i)}</div>
                ))}
            </div>
        )
    }
return(
    <div className={Style.modalViewContainer}>
        <div className={Style.modalContainer}>
            <h2>You {type === "Won" ? "Won!" : "lost"}</h2>

            <div className={Style.puzzle}>
                {completeWords.map((word,i)=>(
                    <Square key = {i} Word={word} solution={solution}/>
                ))}
            </div>
        </div>
    </div>
)

}