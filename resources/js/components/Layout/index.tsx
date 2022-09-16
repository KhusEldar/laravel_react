import React, { FC, ReactNode, useEffect } from "react";
import { Breadcrumb, Layout as AntLayout, Menu } from "antd";
import { Link } from "react-router-dom";
import { axiosApi } from "../../Service";

const { Header, Footer, Content } = AntLayout;

const Layout: FC<{ children: ReactNode }> = ({ children }) => {

  useEffect(() => {
    const res = async () => {
      const asd = await axiosApi.get(`/post`)

    }
    res()
  }, []);

    return (
        <AntLayout className="h-screen flex flex-col gap-y-5">
            <Header className="flex p-0">
                <div className="logo flex-none w-30 text-white px-5">Логтип</div>
                <Menu
                className="grow"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={[
                        {
                            key:'1',
                            label:<Link to={"/admin"}>Админка</Link>
                        }
                    ]}
                />
            </Header>
            <Content
                className="h-full px-10 self-center w-full"
            >
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    className="bg-white rounded p-10"
                >
                    { children }
                </div>
            </Content>
        </AntLayout>
    );
};

export { Layout };
