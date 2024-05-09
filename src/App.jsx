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
} from "./App";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "clean house",
      completed: false,
    },
  ]);

  const [todo, setTodo] = useState({});

  return (
    <Wrapper>
      <ImageContainer />
      <MainContent>
        <Logo>TODO</Logo>
        <Form>
          <Input type="text" name="todo" />
          <Button>ADD</Button>
        </Form>
        <List>
          {todos.map((item) => (
            <Item key={item.id}>{item.text}</Item>
          ))}
        </List>
      </MainContent>
    </Wrapper>
  );
}

export default App;
