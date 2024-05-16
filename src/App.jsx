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
  CheckboxWrapper,
} from "./App";

function App() {
  const [todos, setTodos] = useState([
    {
      id: "5b5f69bb-88be-4562-9687-7cc6b4f44db1",
      text: "wash car",
      completed: false,
    },
  ]);

  const todosLeft = todos.filter((todo) => !todo.completed).length;

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

  function handleToggleTodo(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDeleteTodo(id) {
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
          {todos?.map((todo) => (
            <Item key={todo.id}>
              <ItemBox>
                <Label htmlFor={todo.id} completed={todo.completed}>
                  <CheckboxWrapper>
                    <Checkbox
                      id={todo.id}
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggleTodo(todo.id)}
                    />
                    <img src="./images/icon-check.svg" />
                  </CheckboxWrapper>
                  <span>{todo.text}</span>
                </Label>
              </ItemBox>
              <DeleteBtn
                src="./images/icon-cross.svg"
                onClick={() => handleDeleteTodo(todo.id)}
              />
            </Item>
          ))}
          <ClearLeftBox>
            <ItemsLeft>{todosLeft} items left</ItemsLeft>
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
