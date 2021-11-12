import "./App.css";
import Plan from "./Plan";
import Button from "./components/Button";
import Services from "./services/Services";
// import ButtonSecondary from "./components/ButtonSecondary";
// import styled from "styled-components";

import { Switch, Route } from "react-router-dom";

// const MyButton = styled.button`
//   font-size: 3rem;
//   padding: 10px;
//   background-color: ${(props) => (props.extra ? "tomato" : "white")};
// `;

// function Button(props) {
//   // logic
//   return <MyButton extra={props.extra}>{props.children}</MyButton>;
// }

function App() {
  return (
    <div>
      {/* <Button>Click me</Button> */}
      {/* <button className="my-button">Simple btn</button> */}
      {/* <ButtonSecondary /> */}
      {/* <Services /> */}
      {/* <Plan /> */}
      {/* <Button>Normal Button</Button>
      <Button extra> Extra button</Button> */}
      <Switch>
        <Route path="/serv">
          <Services />
        </Route>
        <Route path="/plan">
          <Plan />
        </Route>
        <Route path="/">
          <Button> Normal button</Button>
          <Button extra> Extra button</Button>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
