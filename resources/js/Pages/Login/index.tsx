import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

type LoginT = {
  password:string,
  username:string
}

const Login = () => {
  const [login, setLogin] = useState<
    Partial<{ email: string; password: string }>
  >({
    email: undefined,
    password: undefined,
  });

  const onFinish = async (e:LoginT) => {
    
    const res = await axios.post(`api/login`,e,{ withCredentials:true }).then(ress=> ress).catch(ress => ress)
    console.log(res.response.status,'asd')
    if(res.response.status === 404){
      return message.error('Пароль или логин неверный')
    }
    if(res.response.status === 200){
      return window.location.href = "/";
    }

    // e.preventDefault();
    // const res = await axios
    //   .post("http://localhost:8000/api/login", login)
    //   .then((res) => res);
    // if (res.status === 200) {
    //   window.location.href = "/";
    // }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <Form
        className="max-w-[440px] flex flex-col gay-3 p-5"
        name="basic"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <div className="flex flex-col items-center gap-4 text-center">
          {/* <LogotypeVertical width="150" height="60"/> */}
          <div className="text-2xl font-semibold text-slate-900">
            Авторизация
          </div>
          <div className="text-base font-medium text-slate-500">
            Подготовка к digitalsSkills
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Form.Item
            required={true}
            label="Логин:"
            name="username"
            rules={[
              { required: true, message: "Пожалуйста, введите ваш логин!" },
            ]}
          >
            <Input className="rounded-md text-sm font-medium h-10 px-4" required/>
          </Form.Item>

          <Form.Item
            required={true}
            label="Пароль:"
            name="password"
            rules={[
              { required: true, message: "Пожалуйста, введите ваш пароль!" },
            ]}
          >
            <Input.Password className="rounded-md text-sm font-medium h-10 px-4 gap-2" required/>
          </Form.Item>
        </div>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full h-10 rounded-md bg-lime-500 text-lime-50 text-sm font-medium border-0"
          >
            Войти
          </Button>
        </Form.Item>

        <Form.Item >
          <div className="flex justify-between">
            <span className="text-gray-400">Нет аккаунта?</span>
            <Link to={"/register"}>Регистрация</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export { Login };
