import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

type RegisterT = {
  password:string,
  confirm_password:string
  name:string
  email:string
}

const Register = () => {
  const [login, setLogin] = useState<
    Partial<{ email: string; password: string }>
  >({
    email: undefined,
    password: undefined,
  });

  const onFinish = async (e:RegisterT) => {
    const { confirm_password,email,name,password } = e
    if(confirm_password !== password){
      return  message.error('Пароли не совпадают')
    }

    const registerResponse = await axios.post('/api/register',e,{ withCredentials:true })
    console.log(registerResponse);

    // const res = await axios.post(`api/login`,e).then(ress=> ress).catch(ress => ress)
    // console.log(res.response.status,'asd')
    // if(res.response.status === 404){
    //   return message.error('Пароль или логин неверный')
    // }
    // if(res.response.status === 200){
    //   return window.location.href = "/";
    // }

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
        className="max-w-[440px] flex flex-col gap-y-2 p-5"
        name="basic"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <div className="flex flex-col items-center gap-4 text-center">
          {/* <LogotypeVertical width="150" height="60"/> */}
          <div className="text-2xl font-semibold text-slate-900">
            Регистрация
          </div>
          <div className="text-base font-medium text-slate-500">
            Подготовка к digitalsSkills
          </div>
        </div>

        <div className="flex flex-col gap-4">
        <Form.Item
            required={true}
            label="Имя:"
            name="name"
            rules={[
              { required: true, message: "Пожалуйста, введите ваше имя!" },
            ]}
          >
            <Input className="rounded-md text-sm font-medium h-10 px-4" required/>
          </Form.Item>

          <Form.Item
            required={true}
            label="Почта:"
            name="email"
            rules={[
              { required: true, message: "Пожалуйста, введите вашу почту!" },
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
          
          <Form.Item
            required={true}
            label="Повторите пароль:"
            name="confirm_password"
            rules={[
              { required: true, message: "Пожалуйста, повторите ваш ваш пароль!" },
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
            Регистрация
          </Button>
        </Form.Item>

        <Form.Item >
          <div className="flex justify-between">
            <span className="text-gray-400">Есть аккаунт?</span>
            <Link to={"/login"}>Авторизация</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export { Register };
