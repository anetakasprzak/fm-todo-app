import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
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
  NoTodos,
} from "./App";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [filter, setFilter] = useState("all");

  const todosLeft = todos.filter((todo) => !todo.completed).length;

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  }

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

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="id">
            {(provided) => (
              <List {...provided.droppableProps} ref={provided.innerRef}>
                {getTodos()?.map(({ id, text, completed }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <Item
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <ItemBox>
                            <Label htmlFor={id} completed={completed}>
                              <CheckboxWrapper>
                                <Checkbox
                                  id={id}
                                  type="checkbox"
                                  checked={completed}
                                  onChange={() => handleToggleTodo(id)}
                                />
                                <img src="./images/icon-check.svg" />
                              </CheckboxWrapper>
                              <span>{text}</span>
                            </Label>
                          </ItemBox>
                          <DeleteBtn
                            src="./images/icon-cross.svg"
                            completed={completed}
                            onClick={() => handleDeleteTodo(id)}
                          />
                        </Item>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
                <ClearLeftBox>
                  {todos.length === 0 ? (
                    <NoTodos>Add your todos : )</NoTodos>
                  ) : (
                    <>
                      <ItemsLeft>{todosLeft} items left</ItemsLeft>
                      <ClearBtn onClick={handleClearCompleted}>
                        Clear completed
                      </ClearBtn>{" "}
                    </>
                  )}
                </ClearLeftBox>
              </List>
            )}
          </Droppable>
        </DragDropContext>

        <ButtonsBox>
          <AllBtn filter={filter} onClick={() => setFilter("all")}>
            All
          </AllBtn>
          <ActiveBtn filter={filter} onClick={() => setFilter("active")}>
            Active
          </ActiveBtn>
          <CompletedBtn filter={filter} onClick={() => setFilter("completed")}>
            Completed
          </CompletedBtn>
        </ButtonsBox>

        <DragDropText>Drag and drop to reorder list</DragDropText>
      </MainContent>
    </Wrapper>
  );
}

export default App;
