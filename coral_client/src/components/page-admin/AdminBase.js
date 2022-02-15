import React, { useState } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { DownOutlined, UpOutlined } from '@ant-design/icons/lib/icons';
import topBg from '../../share/background/top-background.jpg';

const LeftBar = styled.div`
  height: 100vh;
  background-color: #E0FFFF;
`
const UserLogin = styled.div`
  height: 20vh;
  position: relative;

  .username {
    font-size: 20px;
    text-decoration: underline;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
const MainMenu = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 15px;
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
  background-color: #1E90FF;
`
const SubMenu = styled.div`
  width: calc(100% - 30px);
  font-weight: bold;
  font-size: 15px;
  padding: 10px;
  margin-bottom: 10px;
  margin-left: 30px;
  text-align: center;
  background-color: #87CEFA;
  display: ${props => props.active ? 'block' : 'none'};
`
const RightBar = styled.div`
  height: 100vh;
`
const Header = styled.div`
  height: 20vh;
  background-image: url(${topBg});
  background-size: 100%;
`
const Body = styled.div``
export default function AdminBase() {
  const [wikiClicked, setWikiClicked] = useState(false)
  const [fbClicked, setFbClicked] = useState(false)
  return (
    <Row>
      <Col span={6}>
        <LeftBar>
          <UserLogin>
            <b className='username'>Admin manager</b>
          </UserLogin>
          <MainMenu onClick={() => setWikiClicked(wikiClicked => !wikiClicked)}>
            Factsheet {wikiClicked ? <UpOutlined style={{ fontSize: 10 }} /> : <DownOutlined style={{ fontSize: 10 }} />}
          </MainMenu>
          <SubMenu active={wikiClicked}>Add</SubMenu>
          <SubMenu active={wikiClicked}>Management</SubMenu>
          <MainMenu>Statictis</MainMenu>
          <MainMenu onClick={() => setFbClicked(fbClicked => !fbClicked)}>
            Feedback {fbClicked ? <UpOutlined style={{ fontSize: 10 }} /> : <DownOutlined style={{ fontSize: 10 }} />}  
          </MainMenu>
          <SubMenu active={fbClicked}>UnRead</SubMenu>
          <SubMenu active={fbClicked}>Read</SubMenu>
          <MainMenu>User</MainMenu>
          <MainMenu>Model</MainMenu>
          <MainMenu>Logout</MainMenu>
        </LeftBar>
      </Col>
      <Col span={18}>
        <RightBar>
          <Header/>
        </RightBar>
      </Col>
    </Row>
  )
}
