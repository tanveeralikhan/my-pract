import { useEffect, useRef } from "react"

const RefExample=()=>{
    const inputRef=useRef<HTMLInputElement >(null);
    useEffect(()=>{
        inputRef?.current?.focus();
    },[])
    return (
        <input ref={inputRef}></input>
    )
}
export default RefExample