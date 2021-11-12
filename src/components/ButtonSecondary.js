import { useState } from "react";
import ButtonSecondaryStyle from "./ButtonSecond.styled";

function ButtonSecondary() {
  const [title, setTitle] = useState("I have been made with export");

  const changeTitle = () => {
    setTitle("New changed title");
  };

  return (
    <ButtonSecondaryStyle onClick={changeTitle}>{title}</ButtonSecondaryStyle>
  );
}
export default ButtonSecondary;
