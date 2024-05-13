import { useState } from "react";
import {
  ImageContainer,
  Wrapper,
  MainContent,
  Logo,
  Input,
  List,
  Item,
  Button,
  Form,
  Label,
  Checkbox,
} from "./App";

function App() {
  const [todos, setTodos] = useState([]);

  const [todoText, setTodoText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (todoText === "") return;

    const newTodo = {
      id: todos.length + 1,
      text: todoText,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodoText("");
  }

  return (
    <Wrapper>
      <ImageContainer />
      <MainContent>
        <Logo>TODO</Logo>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="todo"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <Button>ADD</Button>
        </Form>
        <List>
          {todos?.map((item) => (
            <Item key={item.id}>
              <Label htmlFor="test">
                <Checkbox id="test" type="checkbox" />
                <img src="./images/icon-check.svg" />
              </Label>
              {item.text}
              <img src="./images/icon-cross.svg" />
            </Item>
          ))}
        </List>
      </MainContent>
    </Wrapper>
  );
}

export default App;
