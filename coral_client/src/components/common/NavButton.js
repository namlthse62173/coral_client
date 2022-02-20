import { Button } from 'antd'
import { btnCss } from '../css-objects'

export const HomeButton = ({ nav }) => {
    return (
        <Button
            style={{ ...btnCss, marginLeft: '5px' }}
            onClick={() => nav('/home')}
        >
            Home
        </Button>
    )
}

export const StatisticButton = ({ nav }) => {
    return (
        <Button
            style={{ ...btnCss, marginLeft: '5px' }}
            onClick={() => nav('/')}
        >
            Statistic
        </Button>
    )
}

export const FeedbackButton = ({ nav }) => {
    return (
        <Button
            style={{ ...btnCss, marginLeft: '5px' }}
            onClick={() => nav('/feedback')}
        >
            Feedback
        </Button>
    )
}

export const InfoButton = ({ nav, name='Hoàng Nam' }) => {
    return (
        <Button
            style={{ ...btnCss, marginRight: '5px' }}
            onClick={() => nav('/info')}
        >
            {name}
        </Button>
    )
}

export const LoginButton = ({ nav }) => {
    return (
        <Button
            style={{ ...btnCss, marginRight: '5px' }}
            onClick={() => nav('/login')}
        >
            Login
        </Button>
    )
}

export const RegisterButton = ({ nav }) => {
    return (
        <Button
            style={{ ...btnCss, marginRight: '5px' }}
            onClick={() => nav('/register')}
        >
            Register
        </Button>
    )
}