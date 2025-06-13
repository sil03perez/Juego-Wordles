import {wordss} from "./word"

function getWords(){
return wordss
}

export function getWordOfTheDay(){
    const words = getWords();
    const index = getDayOfTheYear() % words.length; // <- asegura un índice válido
    const WordOfTheDay = words[index];

    return WordOfTheDay.toUpperCase();
}

export function isValidWord(word:string){
const words = getWords()
return words.includes(word.toLowerCase())
}

function getDayOfTheYear(){
    const now = new Date()
    const start = new Date(now.getFullYear(),0,0)
    const diff = (now as any)- (start as any)+(start.getTimezoneOffset()-now.getTimezoneOffset())*60*1000
    const oneDay = 1000*60*60*24
    return Math.floor(diff/oneDay);
}