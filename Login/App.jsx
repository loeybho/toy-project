import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function App() {
  const { register, handleSubmit } = useForm();

  // 2. submit 이벤트 등록
  const onSubmit = async (data) => {
    try {
      // 3. API 서버 호출
      const response = await axios.post(
        "https://market-lion.koyeb.app/api/users/login",
        data
      );
      // 4. 로그인 성공 메세지 출력
      const name = response.data.item.name;
      alert(`${name}님 로그인 되었습니다.`, response.data);
    } catch (err) {
      // 5. 로그인 실패 메세지 출력
      alert("아이디와 패스워드를 확인하시기 바랍니다.", err.response.data);
    }
  };

  return (
    // 1. JSX 작성
    <>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" name="email" {...register("email")} />
        <br />
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          name="password"
          {...register("password")}
        />
        <br />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}

export default App;
