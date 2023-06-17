import React from "react";

const StatBox = ({ guess, correctStat }) =>
{
    return <>
        <div className="col" style={getStatStyle(guess, correctStat)}>
            <div>{guess}</div>
            <div>{getStatArrow(guess, correctStat)}</div>
        </div>
    </>
}

export default StatBox;

let getStatArrow = (guessStat, correctAnswerStat) => 
{
    let upArrow = String.fromCharCode(8593);
    let downArrow = String.fromCharCode(8595);

    if (guessStat > correctAnswerStat)
    {
        return downArrow;
    }
    if (guessStat < correctAnswerStat)
    {
        return upArrow
    }

    return "";
}

let getStatStyle = (guessStat, correctAnswerStat) =>
{
    if ((guessStat < correctAnswerStat) || (guessStat > correctAnswerStat))
    {
        return { backgroundColor: 'rgb(208, 210, 107)' };
    }

    if (guessStat == correctAnswerStat)
    {
        return { backgroundColor: 'rgb(108, 166, 99)' };
    }

    return "";
}