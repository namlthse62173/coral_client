import React, { useContext } from 'react'
import styled from 'styled-components'
import bg from '../../../share/background/auth-background.jpg'
import { Form, Input, Button } from 'antd'
import { btnCss, globalBlue } from '../../css-objects'
import { AppContext } from '../../provider/AppProvider'

const Wrapper = styled.div`
    background-image: url(${bg});
    background-size: cover;
    height: 100vh;
    width: 100vw;
`
const FormStyle = styled(Form)`
    position: relative; /* Relative vị trí tuyệt đối */
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    border-radius: 5px;
    background-color: white;
    padding: 15px;
    width: 50%;

    h1 {
        text-align: center;
        color: ${globalBlue};
    }
    .ant-row .ant-form-item-label{
        text-align: left;
    }
    .ant-row .ant-form-item-control{
        text-align: right;
        .ant-form-item-control-input {
            text-align: left;
        }
    }
    .ant-row:last-child {
        margin-bottom: 0;
    }
`
export default function Login() {
    const { navigation } = useContext(AppContext)
    const handleFinish = () => {

    }
    return (
        <Wrapper>
            <FormStyle
                layout='horizontal'
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                onFinish={handleFinish}
            >
                <h1>LOGIN</h1>
                <Form.Item
                    label='Email' name='email'
                    rules={[{
                        required: true,
                        message: 'Please input your email!',
                    }]}
                >
                    <Input placeholder='Enter your email' />
                </Form.Item>
                <Form.Item
                    label='Password' name='password'
                    rules={[{
                        required: true,
                        message: 'Please input your password!',
                    }]}
                >
                    <Input type='password' placeholder='Enter your password' />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
                    <Button
                        style={{ ...btnCss }}
                        type="primary"
                        htmlType="submit"
                    >
                        Login
                    </Button>
                    <div
                        className='signUp'
                        style={{ display: 'inline-block', marginLeft: '5px', color: globalBlue }}
                        onClick={() => navigation('/register')}
                    >
                        <a>Sign up</a>
                    </div>
                    <div
                        className='forgot'
                        style={{ marginTop: '10px', color: globalBlue }}
                    >
                        Forgot password
                    </div>
                </Form.Item>
            </FormStyle>
        </Wrapper>
    )
}