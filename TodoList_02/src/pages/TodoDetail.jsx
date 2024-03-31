import useAxiosInstance from "@hooks/useAxiosInstance";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

function TodoDetail() {
  const params = useParams();
  console.log(params._id);

  const axios = useAxiosInstance();
  const [item, setItem] = useState("안녕");

  const fetchDetail = async () => {
    const response = await axios.get(`/todolist/${params._id}`);
    setItem(response.data.item);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <div id="main">
      <h2>할일 상세보기</h2>
      {item && (
        <div className="todo">
          <div>제목: {item.title}</div>
          <div>내용: {item.content}</div>
          <div>상태: {item.done ? "완료" : "미완료"}</div>
          <div>작성일: {item.createdAt}</div>
          <div>수정일: {item.updatedAt}</div>
          <Link to="edit">수정</Link>
          <Link to="/list">목록</Link>
        </div>
      )}
      <Outlet context={{ reFetch: fetchDetail }} />
    </div>
  );
}

export default TodoDetail;
