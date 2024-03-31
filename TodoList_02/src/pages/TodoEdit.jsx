import useAxiosInstance from "@hooks/useAxiosInstance";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

function TodoEdit() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const axios = useAxiosInstance();
  const { register, handleSubmit, reset } = useForm();
  const [item, setItem] = useState();

  const { reFetch } = useOutletContext;

  const fetchDetail = async () => {
    const response = await axios.get(`/todolist/${_id}`);
    setItem(response.data.item);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  useEffect(() => {
    if (item)
      reset({
        title: item.title,
        content: item.content,
        done: item.done,
      });
  }, [item]);

  const onSubmit = async (formData) => {
    try {
      await axios.patch(`/todolist/${_id}`, formData);
      alert("할 일이 수정 되었습니다.");
      navigate("..", { relative: "path" });
      reFetch();
    } catch (err) {
      console.error(err);
      alert("할 일 수정에 실패했습니다.");
    }
  };

  return <></>;
}

export default TodoEdit;
