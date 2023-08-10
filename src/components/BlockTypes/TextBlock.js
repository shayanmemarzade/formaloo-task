import React, { useState, useEffect } from 'react'

const TextBlock = ({ edit, text, onChange }) => {
    const [inputValue, setInputValue] = useState(text);
    useEffect(() => {
        if (onChange && typeof onChange === 'function') {
            onChange(inputValue)
        }
    }, [inputValue])

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <div className='w-full mb-6'>
            {edit && <textarea value={inputValue} onChange={handleInputChange} className='w-full p-2 border'></textarea>}
            {!edit && <p className='p-2'>{inputValue}</p>}
        </div>
    )
}

export default TextBlock
