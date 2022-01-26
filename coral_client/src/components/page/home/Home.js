import React, { useContext } from 'react'
import styled from 'styled-components'
import topBg from '../../../share/background/top-background.jpg'
import bottomBg from '../../../share/background/bottom-background.jpg'
import { Button, Col, Row } from 'antd'
import { AppContext } from '../../provider/AppProvider'
import { btnCss } from '../../css-objects'
import { homeCorals } from '../../../share/data'
import HomeCoralView from '../../../common/HomeCoralView'
import { CloudUploadOutlined } from '@ant-design/icons/lib/icons'

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    width: 100vw;
`
const Top = styled.div`
    background-image: url(${topBg});
    background-size: cover;
    height: 20vh;
    width: 100vw;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const Nav = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 30px;
    background-color: #483D8B;

    .flexStart {
        display: flex;
        align-items: center;
    }
    .flexEnd {
        display: flex;
        align-items: center;
    }
`
const Bottom = styled.div`
    background-image: url(${bottomBg});
    background-size: cover;
    height: 20vh;
    width: 100vw;
`
const UploadBtn = styled(Button)`
    height: 120px; 
    width: 120px;
    border-radius: 50%;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
`

/* Body style*/
const Body = styled.div`
    height: 60vh;
    width: 100vw;
    overflow-y: scroll;
`
const DataView = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`
export default function Home() {
    const { navigation } = useContext(AppContext)
    return (
        <Wrapper>
            <Top>
                <UploadBtn><CloudUploadOutlined style={{ fontSize: 70 }} /></UploadBtn>
                <Nav>
                    <div className='flexStart'>
                        <Button
                            style={{ ...btnCss, marginLeft: '5px' }}
                            onClick={() => navigation('/')}
                        >
                            Home
                        </Button>
                        <Button
                            style={{ ...btnCss, marginLeft: '5px' }}
                            onClick={() => navigation('/')}
                        >
                            Statistic
                        </Button>
                    </div>

                    <div className='flexEnd'>
                        <Button
                            style={{ ...btnCss, marginRight: '5px' }}
                            onClick={() => navigation('/register')}
                        >
                            Register
                        </Button>
                        <Button
                            style={{ ...btnCss, marginRight: '5px' }}
                            onClick={() => navigation('/login')}
                        >
                            Login
                        </Button>
                    </div>
                </Nav>
            </Top>
            <Body>
                <DataView>
                    <Row>
                        {
                            homeCorals.map(c => (
                                <Col span={4}><HomeCoralView name={c.name} imageSrc={c.src} /></Col>
                            ))
                        }
                    </Row>
                </DataView>
            </Body>
            <Bottom></Bottom>
        </Wrapper>
    )
}
