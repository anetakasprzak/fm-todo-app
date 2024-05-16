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
  const [todoText, setTodoText] = useState("");
  const [filter, setFilter] = useState("all");

  const todosLeft = todos.filter((todo) => !todo.completed).length;

  function getTodos() {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
    }
  }

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

  function handleClearCompleted() {
    setTodos((todos) => todos.filter((todo) => !todo.completed));
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
          {getTodos()?.map((todo) => (
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
            <ClearBtn onClick={handleClearCompleted}>Clear completed</ClearBtn>
          </ClearLeftBox>
        </List>

        <ButtonsBox>
          <AllBtn onClick={() => setFilter("all")}>All</AllBtn>
          <ActiveBtn onClick={() => setFilter("active")}>Active</ActiveBtn>
          <CompletedBtn onClick={() => setFilter("completed")}>
            Completed
          </CompletedBtn>
        </ButtonsBox>

        <DragDropText>Drag and drop to reorder list</DragDropText>
      </MainContent>
    </Wrapper>
  );
}

export default App;
