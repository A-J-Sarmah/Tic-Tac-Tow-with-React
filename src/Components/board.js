import React from 'react'

function Board({ handleAction, win, gameStatus, data, reset }) {
    let arr = Object.values(data)
    if (gameStatus === false && win === false) {
        return (
            <>
                <main>
                    {arr.map((element, index) => {
                        return (
                            <div className={`square sq${index}`} id={index} key={index} onClick={(e) => {
                                handleAction(e.target.id, "X")
                            }}> {element}</div>
                        )
                    })}
                    <button className="btn" onClick={()=>reset()}>Reset</button>
                </main>
            </>
        )
    }
    if (gameStatus === true && win === false) {
        return (
            <>
                <h1>Match Draw</h1>
                <main>
                    {arr.map((element, index) => {
                        return (
                            <div className={`square sq${index}`} id={index} key={index} onClick={(e) => {
                                handleAction(e.target.id, "X")
                            }}> {element}</div>
                        )
                    })}
                    <button className="btn" onClick={()=>reset()}>Play Again</button>
                </main>
            </>
        )
    }
    if (gameStatus === true && win === true) {
        return (
            <>
                <h1>Match Over</h1>
                <main>
                    {arr.map((element, index) => {
                        return (
                            <div className={`square sq${index}`} id={index} key={index} onClick={(e) => {
                                handleAction(e.target.id, "X")
                            }}> {element}</div>
                        )
                    })}
                    <button className="btn" onClick={()=>reset()}>Play Again</button>
                </main>
            </>
        )
    }
    if (gameStatus === false && win === true) {
        return (
            <>
                <h1>Match Over</h1>
                <main>
                    {arr.map((element, index) => {
                        return (
                            <div className={`square sq${index}`} id={index} key={index} onClick={(e) => {
                                handleAction(e.target.id, "X")
                            }}> {element}</div>
                        )
                    })}
                    <button className="btn" onClick={()=>reset()}>Play Again</button>
                </main>
            </>
        )
    }
}

export default Board;