import { useRef, useEffect } from "react";

export default function FocusInput() {
  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current.focus(); // auto-focus input when component mounts
  },[]);

  const handleClick = () => myBtn.current.click();

  return (
    <>
    {/* When you pass ref={inputRef} to an element, 
    React automatically updates inputRef.current with a reference to that DOM element after the component mounts. */}
      <input ref={inputRef} type="text" placeholder="Type here..." />
    </>
  );
}
