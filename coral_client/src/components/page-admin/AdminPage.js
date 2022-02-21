import React, { useState } from 'react'
import { DesktopOutlined, UserOutlined, CoffeeOutlined, BookOutlined, LogoutOutlined, FundOutlined } from '@ant-design/icons/lib/icons'
import { Layout, Menu, Breadcrumb } from 'antd';
import styled from 'styled-components';

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
const SiderStyled = styled(Sider)`
    .logo {
        background-color: white;
        font-size: 20px;
        text-align: center;
        font-weight: bold;
        margin: 20px;
        text-decoration: underline;
    }
`
const HeaderStyled = styled(Header)`
    background-color: whitesmoke;
    text-align: center;
    font-size: 20px;
`

export default function AdminBase() {
    const [headerText, setHeaderText] = useState('Welcome to admin console')

    const handleMenu = key => {
        console.log(key)
    }

    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                <SiderStyled theme='light' collapsed={false} >
                    <div className="logo">Admin Manager</div>
                    <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu key='1' icon={<BookOutlined />} title="Factsheet">
                            <Menu.Item key='2' onClick={() => handleMenu("1")}>Add</Menu.Item>
                            <Menu.Item key='3' onClick={() => handleMenu("2")}>Management</Menu.Item>
                        </SubMenu>
                        <Menu.Item key='4' onClick={() => handleMenu("3")} icon={<FundOutlined />}>
                            Statictis
                        </Menu.Item>
                        <SubMenu key='5' icon={<CoffeeOutlined />} title="Feedback">
                            <Menu.Item key='6' onClick={() => handleMenu("4")}>Read</Menu.Item>
                            <Menu.Item key='7' onClick={() => handleMenu("5")}>UnRead</Menu.Item>
                        </SubMenu>
                        <Menu.Item key='8' onClick={() => handleMenu("6")} icon={<UserOutlined />}>
                            User
                        </Menu.Item>
                        <Menu.Item key='9' onClick={() => handleMenu("7")} icon={<DesktopOutlined />}>
                            Entity Diving Season
                        </Menu.Item>
                        <Menu.Item key='10' onClick={() => handleMenu("8")} icon={<LogoutOutlined />}>
                            Logout
                        </Menu.Item>
                    </Menu>
                </SiderStyled>
                <Layout className="site-layout">
                    <HeaderStyled >{headerText}</HeaderStyled>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Factsheet</Breadcrumb.Item>
                            <Breadcrumb.Item>Add</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            This is admin content
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018</Footer>
                </Layout>
            </Layout>
        </div>
    )
}