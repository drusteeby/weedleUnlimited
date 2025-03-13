import React from "react";
import StatBox from "./StatBox";

// "HP": 45,
//       "Attack": 49,
//       "Defense": 49,
//       "Sp. Attack": 65,
//       "Sp. Defense": 65,
//       "Speed": 45


const GuessTable = ({ guesses, correctAnswer }) =>
{
    return <>
        <div className="d-flex align-items-center justify-content-center col fw-bold" style={{ backgroundColor: 'transparent' }}>
            <div className="col">Name</div>
            <div className="col">Type(s)</div>
            <div className="col">HP</div>
            <div className="col">Attack</div>
            <div className="col">Defense</div>
            <div className="col">Sp. Attack</div>
            <div className="col">Sp. Defense</div>
            <div className="col">Speed</div>
        </div>
        {guesses.map(guess =>
            <div key={guess.id} className="d-flex flex-row 
            bg-body border-bottom border-dark border-3">
                <div className="d-flex align-items-center justify-content-center col fw-bold">
                    <div>
                        {guess.name.english}
                    </div>
                </div>
                <div className="col">
                    {guess.type.map(type =>
                        <>
                            <div style={correctAnswer.type.some(t => t == type) ? { backgroundColor: 'green' } : {}}>
                                {type}
                            </div>
                        </>
                    )}
                </div>
                <StatBox guess={guess.base.HP} correctStat={correctAnswer.base.HP} />
                <StatBox guess={guess.base.Attack} correctStat={correctAnswer.base.Attack} />
                <StatBox guess={guess.base.Defense} correctStat={correctAnswer.base.Defense} />
                <StatBox guess={guess.base.SpecialAttack} correctStat={correctAnswer.base.SpecialAttack} />
                <StatBox guess={guess.base.SpecialDefense} correctStat={correctAnswer.base.SpecialDefense} />
                <StatBox guess={guess.base.Speed} correctStat={correctAnswer.base.Speed} />

            </div>)}
    </>;
};

export default GuessTable;