import { useState } from "react"
import {optionsValue} from "./options"
import { useDebounce } from "../../hook/debounce";
const DebounceSearch=()=>{
    const [text,setText] = useState("");
    const [data,setData]= useState<{id:number,value:string}[]>(optionsValue);

    const handleChange=useDebounce((e:React.ChangeEvent<HTMLInputElement>)=>{
        const matchWord = optionsValue.filter(({value})=>value.toLowerCase().match(e.target.value.toLowerCase()));
        setData(matchWord.length ? matchWord : optionsValue);
    },500);

    const onOptionSelect=(value:string)=>{
        setText(value)
    }

    return (
        <div className="debounce-search-wrapper">
            <input value={text} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                setText(e.target.value)
                handleChange(e);
            }}/>
            <div>
            {data.length>0 && data.map(({id,value})=>{
                return (
                    <div key={id} onClick={()=>{onOptionSelect(value)}}>{value}</div>
                )
            }) }
            </div>
        </div>
    )

}
export default DebounceSearch