import "../css/List.css";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <div className="List">
      <h4>Todo List 🚂</h4>
      <input type="text" placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        <TodoItem />
      </div>
    </div>
  );
}

export default TodoList;
