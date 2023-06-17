import React, { useState } from 'react';
import PropTypes from 'prop-types';


let propTypes = {
    options: PropTypes.instanceOf(Array).isRequired
};


const AutoSelect = ({ options, onGuessSubmitted }) =>
{
    const [activeOption, setActiveOption] = useState(0);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [userInput, setUserInput] = useState('');

    let filterAnswerBeforeSubmit = (answer) =>
    {
        if (answer.length > 0)
        {
            onGuessSubmitted(answer);
        }
    }

    function onClick(e)
    {
        setActiveOption(0);
        setFilteredOptions([]);
        setShowOptions(false);
        filterAnswerBeforeSubmit(e.currentTarget.innerText);
        setUserInput('');
    };

    function onKeyDown(e)
    {
        if (e.keyCode === 38)
        {
            if (activeOption === 0)
            {
                return;
            }
            setActiveOption(activeOption - 1);
        }
        else if (e.keyCode === 40)
        {
            if (activeOption === filteredOptions.length - 1)
            {
                console.log(activeOption);
                return;
            }
            setActiveOption(activeOption + 1);
        }
    };

    function onChange(e)
    {
        const userInput = e.currentTarget.value;

        const filteredOptions = options.filter(
            (optionName) =>
                optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setActiveOption(0);
        setFilteredOptions(filteredOptions);
        setShowOptions(true);
        setUserInput(e.currentTarget.value);
    };

    let optionList;
    if (showOptions && userInput)
    {
        if (filteredOptions.length)
        {
            optionList = (
                <ul className="options">
                    {filteredOptions.map((optionName, index) =>
                    {
                        let className = (index === activeOption) ? 'option-active' : '';
                        return (
                            <li className={className} key={optionName} onClick={onClick}>
                                {optionName}
                            </li>
                        );
                    })}
                </ul>
            );
        }
        else
        {
            optionList = (
                <div className="no-options">
                    <em>No Option!</em>
                </div>
            );
        }
    }
    return (
        <React.Fragment>
            <div className="search">
                <input
                    type="text"
                    className="search-box"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                />
            </div>
            {optionList}
        </React.Fragment>
    );
};

export default AutoSelect;
