import React,{ useEffect, useState } from 'react'
import  Board  from "./board";
import '../index.css';

function boardValues(){
    const board = {
        0:" ",
        1:" ",
        2:" ",
        3:" ",
        4:" ",
        5:" ",
        6:" ",
        7:" ",
        8:" "
    }
    if(localStorage.length > 0){
        for(let i=0; i<localStorage.length; i++){
            board[i] = localStorage.getItem(i)
        }
    }
    return board
}

function checkWin(){
    const arr = []
    let win = false
    for(let i=0 ; i<localStorage.length; i++){
        arr.push(localStorage.getItem(i))
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i] === " "){
            arr[i] = i
        }
    }
    if((arr[0] === arr[1] && arr[2] === arr[1]) || (arr[0] === arr[3] && arr[6] === arr[3]) || (arr[0] === arr[4] && arr[8] === arr[4])){
        win = true
    }
    else if((arr[1] === arr[4] && arr[7] === arr[4])){
        win = true
    }
    else if((arr[2] === arr[5] && arr[8] === arr[5]) || (arr[2] === arr[4] && arr[6] === arr[4])){
        win = true
    }
    else if((arr[3] === arr[4] && arr[5] === arr[4])){
        win = true
    }
    else if((arr[6] === arr[7] && arr[8] === arr[7])){
        win = true
    }
    else{
        win = false
    }
    return win
}

function App() {
    const [data, setData] = useState(boardValues())
    const [isDone, setIsDone] = useState(false)
    const[win, setWin] = useState(false)
    function handleAction(id, value){
        const obj = {...data}
        obj[id] = value
        const arr = Object.values(obj)
        let comparableObject = {}
        for(let i=0; i<arr.length; i++){
            if(arr[i] === " "){
                comparableObject = {...comparableObject}
                comparableObject[i] = arr[i]
            }
        }
        const number = Object.keys(comparableObject)[Math.floor(Math.random()*Object.keys(comparableObject).length)]
        comparableObject[number] = "O"
        if(number === undefined){
            delete comparableObject.undefined
        }
        console.log(comparableObject);
        const object = {...obj,...comparableObject}
        setData(()=>object)
    }
    function resetGame(){
        const obj = {
            0:" ",
            1:" ",
            2:" ",
            3:" ",
            4:" ",
            5:" ",
            6:" ",
            7:" ",
            8:" "
        }
        setData(() => obj)
    }
    useEffect(() => {
        for(let i=0; i<=8; i++){
            localStorage.setItem(i,data[i])
        }
        setWin(checkWin())
        for(let i=0; i<localStorage.length; i++){
            if(localStorage.getItem(i) === " "){
                setIsDone(false)
                break
            }
            else{
                setIsDone(true)
            }
        }
    },[data])
    return(
        <Board handleAction={handleAction} win={win} gameStatus={isDone} data={data} reset={resetGame}/>
    )
}

export default App;
