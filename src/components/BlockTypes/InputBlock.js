import React, { useState, useEffect } from 'react'

const InputBlock = ({ edit, label, placeholder, onChangeLabel, onChangePlaceholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [labelName, setLabelname] = useState(label);
  const [placeholderVal, setPlacehoplaceholderVal] = useState(placeholder);

  useEffect(() => {
    if (onChangeLabel && typeof onChangeLabel === 'function') {
      onChangeLabel(labelName)
    }
  }, [labelName])

  useEffect(() => {
    if (onChangePlaceholder && typeof onChangePlaceholder === 'function') {
      onChangePlaceholder(placeholderVal)
    }
  }, [placeholderVal])

 
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputLabelChange = (e) => {
    setLabelname(e.target.value);
  };
  const handleInputPlaceholderChange = (e) => {
    setPlacehoplaceholderVal(e.target.value);
  };
  return (
    <>
      {edit && <div className='flex justify-between'>
        <input value={labelName} onChange={handleInputLabelChange} placeholder='Insert label' className='w-full p-2 border' />
        <input value={placeholderVal} onChange={handleInputPlaceholderChange} placeholder='Insert placeholder' className='w-full p-2 border' />
      </div>}
      {
        !edit && <>
          <div className='w-full border p-5 mb-6'>

            <label className="mb-3 block">{label}</label>
            <input value={inputValue} onChange={handleInputChange} placeholder={placeholder} className='w-full p-2 border' />
          </div>

        </>
      }
    </>
  )
}

export default InputBlock







