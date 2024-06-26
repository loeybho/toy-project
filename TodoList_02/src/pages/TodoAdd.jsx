import useAxiosInstance from "@hooks/useAxiosInstance";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function TodoAdd() {
  const navigate = useNavigate();
  const axios = useAxiosInstance();
  const { register, handleSubmit, reset, setFocus } = useForm();

  const onSubmit = async (formData) => {
    try {
      await axios.post("/todolist", formData);
      alert("할일이 추가 되었습니다.");
      setFocus("title");
      reset();
      navigate("/list");
    } catch (err) {
      console.error(err);
      alert("할일 추가에 실패했습니다.");
    }
  };

  return (
    <>
      <div id="main">
        <h2>할 일 추가</h2>
        <div className="todo">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">제목 :</label>
            <input
              type="text"
              id="title"
              autoFocus
              {...register("title", { required: "제목을 입력하세요" })}
            />
            <br />
            <label htmlFor="content">내용</label>
            <textarea
              id="content"
              cols="25"
              rows="8"
              {...register("content", { required: "내용을 입력하세요" })}
            />
            <br />
            <button type="submit">추가</button>
            <button type="reset" onClick={() => navigate(-1)}>
              취소
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default TodoAdd;
