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
  const [todos, setTodos] = useState([]);

  const [todoText, setTodoText] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    if (todoText === "") return;

    const newTodo = {
      id: todos.length + 1,
      text: todoText,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
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
            onChange={(e) => setTodoText(e.target.value)}
          />
          <Button>ADD</Button>
        </Form>
        <List>
          {todos?.map((item) => (
            <Item key={item.id}>{item.text}</Item>
          ))}
        </List>
      </MainContent>
    </Wrapper>
  );
}

export default App;
