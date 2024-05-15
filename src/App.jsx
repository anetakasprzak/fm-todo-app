import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
  ClearLeftBox,
  ItemsLeft,
  ClearBtn,
  ButtonsBox,
  AllBtn,
  ActiveBtn,
  CompletedBtn,
  DragDropText,
} from "./App";

function App() {
  const [todos, setTodos] = useState([
    {
      id: "5b5f69bb-88be-4562-9687-7cc6b4f44db1",
      text: "wash car",
      completed: false,
    },
  ]);

  const [todoText, setTodoText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (todoText === "") return;

    const newTodo = {
      id: uuidv4(),
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
          <ClearLeftBox>
            <ItemsLeft>5 items left</ItemsLeft>
            <ClearBtn>Clear completed</ClearBtn>
          </ClearLeftBox>
        </List>

        <ButtonsBox>
          <AllBtn>All</AllBtn>
          <ActiveBtn>Active</ActiveBtn>
          <CompletedBtn>Completed</CompletedBtn>
        </ButtonsBox>

        <DragDropText>Drag and drop to reorder list</DragDropText>
      </MainContent>
    </Wrapper>
  );
}

export default App;
