import React from "react";
import useFormBlocks from "../hooks/useFormBlock"
import InputBlock from "./BlockTypes/InputBlock";
import TextBlock from "./BlockTypes/TextBlock";
import CalendarBlock from "./BlockTypes/calendarBlock";
import ImageBlock from "./BlockTypes/ImageBlock";
const Viewer = () => {
  const formId = 1
  const [formBlocks] = useFormBlocks(formId)
  return (
    <div className="flex">
      <div className="flex-grow">
        <div className="container mt-5 m-auto p-5 border border-gray-500 rounded-md">
          {formBlocks?.map((item, index) => {
            return (<div key={index}>
              <div className="flex justify-between">
                {item.fieldType === "input" && <InputBlock label={item.options.label} placeholder={item.options.placeholder} />}
                {item.fieldType === "text" && <TextBlock text={item.options.text}/>}
                {item.fieldType === "image" && <ImageBlock url={item.options.url} />}
                {item.fieldType === "calendar" && <CalendarBlock label={item.options.label} />}
              </div>
            </div>)
          }
          )}

        </div>
      </div>

    </div>
  )
};

export default Viewer;
