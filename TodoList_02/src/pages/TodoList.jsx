import useAxiosInstance from "@hooks/useAxiosInstance";
import TodoListItem from "@pages/TodoListItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TodoList() {
  const axios = useAxiosInstance();

  const [data, setData] = useState();

  const fetchList = async () => {
    const response = await axios.get("/todolist");
    setData(response.data);
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`/todolist/${_id}`);
      alert("할일이 삭제 되었습니다.");
      fetchList();
    } catch (err) {
      console.log(err);
      alert("할일 삭제에 실패했습니다.");
    }
  };

  const itemList = data?.items.map((item) => (
    <TodoListItem key={item._id} item={item} handleDelete={handleDelete} />
  ));

  return (
    <>
      <div id="main">
        <h2>할 일 목록</h2>
        <div className="todo">
          <Link to="/add">추가</Link>
        </div>
        <br />
        <div className="search">
          <input type="text" autoFocus />
          <button type="button">검색</button>
        </div>

        <ul className="todolist">{itemList}</ul>
      </div>
    </>
  );
}

export default TodoList;
