import { useRef } from "react";

export default function UseRef() {
  const myBtn = useRef(null);

  const handleClick = () => myBtn.current.click();

  return (
    <>
      <button ref={myBtn}>Button</button>
    </>
  );
}
