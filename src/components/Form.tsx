import { useState } from "react"
import { Sub } from "../types"

interface FormState {
    inputValues: Sub
}

interface FormProps {
    onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>
}


export const Form = ({onNewSub}:FormProps) => {
    const [inputValues, setInputValues] = useState<FormState['inputValues']>({
        nick:'',
        subMonths: 0,
        avatar: '',
        description: ''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,[e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub(subs => ([...subs, inputValues]))
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValues.nick} onChange={handleChange} name="nick" placeholder="nick" />
        <input type="number" value={inputValues.subMonths} name="subMonths" onChange={handleChange} placeholder="subMonths" />
        <input type="text" value={inputValues.avatar} name="avatar" onChange={handleChange} placeholder="avatar" />
        <textarea  value={inputValues.description} onChange={handleChange} name="description" placeholder="description" />
        <button>Save</button>
    </form>
  )
}
