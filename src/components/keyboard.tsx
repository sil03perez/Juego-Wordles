import Style from "./keyboard.module.scss"

interface KeyboardProps{
    keys: string[]
    onKeyPressed:(key:string)=>void;
}

export default function Keyboard({
    keys,
     onKeyPressed
    }:KeyboardProps)
    {

        function handledInput(e:any){
            onKeyPressed(e.target.textContent)
        }

        function handledEnter(e:any){
            onKeyPressed('ENTER')
        }


        function handledDelete(e:any){
            onKeyPressed('BACKSPACE')
        }

    return <div className={Style.keyboardContainer}>
        {Array.from(Array(10)).map((_,i)=>(
            <button key={i} className={Style.key} onClick={handledInput}>
                {keys[i]}
            </button>
        ))}
        <div className= {Style.emptykey}></div>
        {Array.from(Array(9)).map((_,i)=>(
            <button key={i+10} className={Style.key} onClick={handledInput}>
                {keys[i+10]}
            </button>
        ))}

        <button className={Style.enterkey} onClick={handledEnter}>ENTER</button>
            {Array.from(Array(7)).map((_,i)=>(
            <button key={i+19} className={Style.key} onClick={handledInput}>
                {keys[i+19]}
            </button>
        ))}
                <button className={Style.deletekey} onClick={handledDelete}>DELETE</button>

        </div>
}