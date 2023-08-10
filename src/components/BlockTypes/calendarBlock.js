import React, { useState, useEffect } from "react";

const CalendarBlock = ({ edit, label, onChange }) => {
  const [labelName, setLabelname] = useState(label);

  useEffect(() => {
    if (onChange && typeof onChange === 'function') {
      onChange(labelName)
    }
  }, [labelName])
  const handleInputLabelChange = (e) => {
    setLabelname(e.target.value);
  };
  return (
    <div className="w-full border p-5 mb-6">
      {edit &&
        <>
          <input value={labelName} onChange={handleInputLabelChange} placeholder='Insert label' className='w-full p-2 border' />
        </>
      }
      {!edit &&
        <>
          <label className="mb-3 block">{label}</label>
          <input type="date" />
        </>
      }
    </div>
  );
};

export default CalendarBlock;






