import styled from "styled-components";

const MyButton = styled.button`
  font-size: 3rem;
  padding: 10px;
`;

function Button(props) {
  return (
    // <button className="my-button">{props.children}</button>;
    <MyButton>{props.children}</MyButton>
  );
}
export default Button;
