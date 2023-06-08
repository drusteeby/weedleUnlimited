import React from "react";

const GuessTable = ({ guesses, correctAnswer }) =>
{
    console.log(correctAnswer);
    return <>
    <div className="d-flex flex-row justify-content-center mb-3">
            <div className="col-md-2">Name</div>
            <div className="col-md-2">Types(s)</div>
            <div className="col-md-2">Base HP</div>
            </div>
        { guesses.map(guess => <div className="d-flex flex-row justify-content-center mb-3">
            <div className="col-md-2 fw-bold">
                <p className={correctAnswer.name === guess.name ? "text-success" : "text-dark"}> 
                    {guess.name.english}
                </p>
            </div>
            <div className="col-md-2">{guess.type.join(', ')}</div>
            <div className="col-md-2">{guess.base.HP}</div>
        </div>)}
    </>;
};


export default GuessTable;