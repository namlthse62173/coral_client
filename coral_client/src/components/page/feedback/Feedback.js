import React, { useContext } from 'react'
import styled from 'styled-components'
import topBg from '../../../share/background/top-background.jpg'
import bottomBg from '../../../share/background/bottom-background.jpg'
import { Button, Form, Input } from 'antd'
import { AppContext } from '../../provider/AppProvider'
import { btnCss, globalBlue } from '../../css-objects'
import { CloudUploadOutlined } from '@ant-design/icons/lib/icons'

const { TextArea } = Input

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
const Body = styled.div`
    height: 60vh;
    width: 100vw;
    overflow-y: scroll;

    position: relative;
`
const Bottom = styled.div`
    background-image: url(${bottomBg});
    background-size: cover;
    height: 20vh;
    width: 100vw;
`

/* Body style*/
const View = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 80%;
    height: 80%;
    
    .fbTable {
        background-color: #D3D3D3;
    }
    h1 {
        text-align: center;
        color: ${globalBlue};
    }
    .fbBtn {
        margin-top: 10px;
        text-align: end;
    }
`
const FormStyled = styled(Form)`
    padding: 20px 50px;
    .ant-row .ant-form-item-label{
        text-align: left;
    }
    .ant-row .ant-form-item-label label{
        text-align: left;
        font-weight: bold;
        font-size: 20px;
    }
`
const UploadBtn = styled(Button)`
    height: 100px; 
    width: 100px;
`
export default function Feedback() {
    const { navigation } = useContext(AppContext)

    return (
        <Wrapper>
            <Top>
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
                        <Button
                            style={{ ...btnCss, marginLeft: '5px' }}
                            onClick={() => navigation('/feedback')}
                        >
                            Feedback
                        </Button>
                    </div>

                    <div className='flexEnd'>
                        <Button
                            style={{ ...btnCss, marginRight: '5px' }}
                            onClick={() => navigation('/')}
                        >
                            Hoàng Nam
                        </Button>
                    </div>
                </Nav>
            </Top>
            <Body>
                <View>
                    <h1>Feedback</h1>
                    <div className='fbTable'>
                        <FormStyled
                            layout='horizontal'
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 20 }}
                        >
                            <Form.Item
                                label='Topic' name='topic'
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label='Detail' name='detail'
                            >
                                <TextArea rows={6} />
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
                                <UploadBtn>
                                    <CloudUploadOutlined style={{ fontSize: 50 }} />
                                </UploadBtn>
                            </Form.Item>
                        </FormStyled>
                    </div>
                    <div className='fbBtn'>
                        <Button style={{ ...btnCss, height: 30, borderRadius: 30, width: 100 }}>
                            Send
                        </Button>
                    </div>
                </View>
            </Body>
            <Bottom />
        </Wrapper>
    )
}
