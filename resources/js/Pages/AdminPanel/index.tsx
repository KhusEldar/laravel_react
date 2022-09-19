import { PostTable } from "./PostTable"
import {Button, Form, Input, Upload, UploadProps} from "antd";
import { postApi } from "../../Service"
import {useState} from "react";

const AdminPanel = () => {

  const [file, setFile] = useState<any>(undefined);

  const onFinish = async (e:any) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    console.log(formData);
    const res = await postApi.createPost(formData);
  };

  // const props: UploadProps = {
  //   onRemove: file => {
  //     setFile(undefined)
  //   },
  //   beforeUpload: file => {
  //     setFile(file);
  //     return false;
  //   }
  // };


  const normFile = (e: any) => {
    console.log('Upload event:', e);
    return e?.fileList;
  };

  return (
    <div>
      <PostTable/>
      <form onSubmit={(e) => onFinish(e)}>
        <input type="text" name={"title"} required={true}/>
        <input type="text" name={"desc"} required={true}/>
        <input type="file" name={"photo[]"} multiple={true} required={true}/>
        <button>Submit</button>
      </form>
      <hr/>
      <Form id={"post_form"}
        className="max-w-[440px] flex flex-col gay-3 p-5"
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <div className="flex flex-col items-center gap-4 text-center">
          {/* <LogotypeVertical width="150" height="60"/> */}
          <div className="text-2xl font-semibold text-slate-900">
            POST создание
          </div>
          <div className="text-base font-medium text-slate-500">
            Подготовка к Digital Skills
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Form.Item
            required={true}
            label="Наименование:"
            name="title"
            rules={[
              { required: true, message: "Пожалуйста, введите наименование!" },
            ]}
          >
            <Input className="rounded-md text-sm font-medium h-10 px-4" required/>
          </Form.Item>

          <Form.Item
            required={true}
            label="Описание:"
            name="desc"
            rules={[
              { required: true, message: "Пожалуйста, введите описание!" },
            ]}
          >
            <Input className="rounded-md text-sm font-medium h-10 px-4 gap-2" required/>
          </Form.Item>
        </div>
        <Form.Item
          name="photo"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload name="logo" listType="picture" multiple={false}
              beforeUpload={
                () => false
              }>
            <Button>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full h-10 rounded-md bg-lime-500 text-lime-50 text-sm font-medium border-0"
          >
            Создать
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export { AdminPanel }