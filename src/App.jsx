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
  ItemBox,
  DeleteBtn,
} from "./App";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "wash car", completed: false },
  ]);

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

  function handleDeleteItem(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
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
            placeholder="Create a new todo..."
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <Button>ADD</Button>
        </Form>
        <List>
          {todos?.map((item) => (
            <Item key={item.id}>
              <ItemBox>
                <Label htmlFor="test">
                  <Checkbox id="test" type="checkbox" />
                  <img src="./images/icon-check.svg" />
                </Label>
                {item.text}
              </ItemBox>
              <DeleteBtn
                src="./images/icon-cross.svg"
                onClick={() => handleDeleteItem(item.id)}
              />
            </Item>
          ))}
        </List>
      </MainContent>
    </Wrapper>
  );
}

export default App;
