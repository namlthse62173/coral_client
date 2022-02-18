import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button, Col, Row } from 'antd'
import { AppContext } from '../../provider/AppProvider'
import { btnCss } from '../../css-objects'
import { homeCorals } from '../../../share/data'
import HomeCoralView from '../../common/HomeCoralView'
import { CloudUploadOutlined } from '@ant-design/icons/lib/icons'
import { HomeWrapper, HomeTop, HomeNav } from '../../css-objects'

const UploadBtn = styled(Button)`
    height: 120px; 
    width: 120px;
    border-radius: 50%;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -45%);
`

/* Body style*/
const Body = styled.div`
    height: 75vh;
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
        <HomeWrapper>
            <HomeTop>
                <UploadBtn><CloudUploadOutlined style={{ fontSize: 60 }} /></UploadBtn>
                <HomeNav>
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
                </HomeNav>
            </HomeTop>
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
        </HomeWrapper>
    )
}
