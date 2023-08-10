import { useState, useEffect } from 'react'
import { v4 as uuid } from "uuid";

export default function useFormBlocks(formId) {
    const [formBlocks, setFormBlocks] = useState([])

    useEffect(() => {
        const loaded = localStorage['formalooTask-' + formId]
        if (loaded) {
            setFormBlocks(JSON.parse(loaded))
        }
    }, []);


    function addBlock(newBlock) {
        setFormBlocks(oldBlocks => {
            const newFormBlocks = [{ ...newBlock, id: uuid() }, ...oldBlocks]
            localStorage['formalooTask-' + formId] = JSON.stringify(newFormBlocks)
            return newFormBlocks
        })

    }
    const removeBlock = i => {
        setFormBlocks(list => {
            const result = [...list];
            result.splice(i, 1);
            localStorage['formalooTask-' + formId] = JSON.stringify(result)
            return result
        })
    }

    const reOrder = (sourceIndex, destIndex) => {
        setFormBlocks(list => {
            const result = [...list];
            const [removed] = result.splice(sourceIndex, 1);
            result.splice(destIndex, 0, removed);
            localStorage['formalooTask-' + formId] = JSON.stringify(result)
            return result
        })
    };

    const updateBlock = (index, newBlockOptions) => {
        setFormBlocks(list => {
            const result = [...list];
            const [oldBlock] = result.splice(index, 1);
            const newBlock = {
                ...oldBlock, options: {
                    ...oldBlock.options, ...newBlockOptions
                }
            }
            result.splice(index, 0, newBlock);
            localStorage['formalooTask-' + formId] = JSON.stringify(result)
            return result
        })
    };
    return [formBlocks, addBlock, removeBlock, reOrder, updateBlock];
}

