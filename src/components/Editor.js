import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import useFormBlocks from "../hooks/useFormBlock"
import InputBlock from "./BlockTypes/InputBlock";
import TextBlock from "./BlockTypes/TextBlock";
import CalendarBlock from "./BlockTypes/calendarBlock";
import ImageBlock from "./BlockTypes/ImageBlock";

const blockTypes = [
  {
    name: "Text",
    fieldType: "text",
    options: {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    }
  },
  {
    name: "Image",
    fieldType: "image",
    options: {
      url: "https://www.formaloo.com/en/wp-content/themes/formaloo3/assets/images/ac-cover.webp"
    }
  },

  {
    name: "Text Input",
    fieldType: "input",
    options: {
      label: "Text label:",
      placeholder: "Insert text here"
    }
  },

  {
    name: "Calendar Input",
    fieldType: "calendar",
    options: {
      label: "Calendar label:",
    }
  }
]

const getSelectedStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  // change background colour if dragging
  background: isDragging ? '#cddc39' : '',
  ...draggableStyle
});
const Editor = () => {
  const formId = 1
  const [formBlocks, addBlock, removeBlock, reOrder, updateBlock] = useFormBlocks(formId)
  const onDragEnd = (result) => {
    const { source, destination } = result;
    reOrder(source.index, destination.index);
  };

  return (
    <div className="flex">
      <aside className="top-0 left-0 z-40 w-64 h-screen">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="mb-5 font-bold">Click to add</div>
          {blockTypes.map((item, index) => {
            return (
              <div key={index}
                onClick={() => { addBlock(item) }}
                className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="ml-3">{item.name}</span>
              </div>
            )
          })}
        </div>
      </aside>
      <div className="flex-grow">
        <div className="container mt-5 m-auto p-5 border border-gray-500 rounded-md">

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable2">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {formBlocks?.map((item, index) => {
                    return (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            className="p-4 hover:bg-gray-300 hover:cursor-move"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getSelectedStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            <label className="mb-3 block">{item.name}</label>
                            <div className="flex">
                              <div className="w-10/12">
                                {item.fieldType === "input" && <InputBlock edit label={item.options.label} placeholder={item.options.placeholder} onChangeLabel={label => updateBlock(index, { label })} onChangePlaceholder={placeholder => updateBlock(index, { placeholder })} />}
                                {item.fieldType === "text" && <TextBlock edit text={item.options.text} onChange={text => updateBlock(index, { text })} />}
                                {item.fieldType === "image" && <ImageBlock edit url={item.options.url} onChange={url => updateBlock(index, { url })} />}
                                {item.fieldType === "calendar" && <CalendarBlock edit label={item.options.label} onChange={label => updateBlock(index, { label })}/>}
                              </div>
                              <div className="w-2/12 text-center">
                                <button type="button"
                                  className=" text-white bg-red-700 hovebg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 h-10"
                                  onClick={() => removeBlock(index)}>
                                  REmove
                                </button>
                              </div>
                            </div>
                          </div>
                        )
                        }
                      </Draggable>
                    )
                  }
                  )}
                  {provided.placeholder}
                </div>
              )
              }
            </Droppable>
          </DragDropContext>
        </div>
      </div>

    </div >
  )
};

export default Editor;
