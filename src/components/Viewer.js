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
          <nav className="bg-gray-300 border-gray-200 px-4 lg:px-6 py-4 ">
            {formBlocks?.map((item, index) => <a key={index} href={`#id${item.id}`} className="text-blue-700 hover:text-white mr-4">{item.name}</a>)}
          </nav>
          {formBlocks?.map((item, index) => {
            return (<div key={index}>
              <div className="flex justify-between" id={`id${item.id}`}>
                {item.fieldType === "input" && <InputBlock label={item.options.label} placeholder={item.options.placeholder} />}
                {item.fieldType === "text" && <TextBlock text={item.options.text} />}
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
