import React from "react";

const GuessTable = ({ guesses, correctAnswer }) =>
{
    console.log(correctAnswer);
    return <>
    <div className="row justify-content-center mb-3">
            <div className="col">Name</div>
            <div className="col">Types(s)</div>
            <div className="col">Base HP</div>
            </div>
        { guesses.map(guess => <div className="d-flex flex-row justify-content-center mb-3">
            <div className="col fw-bold">
                <p className={correctAnswer.name === guess.name ? "text-success" : "text-dark"}> 
                    {guess.name.english}
                </p>
            </div>
            <div className="col">{guess.type.join(', ')}</div>
            <div className="col">{guess.base.HP}</div>
        </div>)}
    </>;
};


export default GuessTable;