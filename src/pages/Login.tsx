import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/AuthSlice";
import { veryfyToken } from "../utils/veryfyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });
  const [login, { data, error }] = useLoginMutation();

  const onSubmit = async (data) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();
    const user = veryfyToken(res.data.accessToken);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
  };
  return (
    <div>
      <h1>Hello, Login!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <label htmlFor="id">Id: </label>
          <input type="text" {...register("id")} name="id" id="" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <Button className="btn " htmlType="submit">
          submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
