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
        <div className="row justify-content-center mb-3" style={{backgroundColor: 'transparent'}}>
            <div className="col">Name</div>
            <div className="col">Types(s)</div>
            <div className="col">HP</div>
            <div className="col">Attack</div>
            <div className="col">Defense</div>
            <div className="col">Sp. Attack</div>
            <div className="col">Sp. Defense</div>
            <div className="col">Speed</div>
        </div>
        {guesses.map(guess => <div key={guess.id} className="d-flex flex-row justify-content-center mb-3">
            <div className="col fw-bold">
                <p>
                    {guess.name.english}
                </p>
            </div>
            {guess.type.map(type =>
                <>
                    <div style={correctAnswer.type.some(t => t == type) ? { backgroundColor: 'green' } : {}}>
                        {type}
                    </div>
                </>
            )}
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