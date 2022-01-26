import React, { useContext } from 'react'
import styled from 'styled-components'
import topBg from '../../../share/background/top-background.jpg'
import bottomBg from '../../../share/background/bottom-background.jpg'
import { Button } from 'antd'
import { AppContext } from '../../provider/AppProvider'
import { btnCss } from '../../css-objects'
import { detailCoral } from '../../../share/data'

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

/* Body style */
const View = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 15%);
    width: 80%;
    height: 70%;

    .detailTable {
        background-color: #D3D3D3;
        height: 100%;
        width: 100%;
        text-align: end;
    }

    .detailTable img {
        position: absolute;
        border-radius: 30px;
        top: -10px;
        left: -30px;
    }

    .detailTable .detailTable__desc {
        display: inline-block;
        width: 80%;
        text-align: start;
        margin: 20px 10px 20px 10px;
    }

    .detailTable .detailTable__desc p {
        display: inline-block;
        width: 100%;
        font-size: 20px;
    }

    .detailBtn {
        margin-top: 10px;
        text-align: end;
    }
`
export default function Detail() {
    const { navigation } = useContext(AppContext)
    const imageSrc = detailCoral.src
    const desc = detailCoral.description
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
                    <div className='detailTable'>
                        <img src={imageSrc} style={{ height: '250px', width: '250px' }}/>
                        <div className='detailTable__desc'>
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className='detailBtn'>
                        <Button 
                            style={{ ...btnCss, height: 30, borderRadius: 30, width: 100 }}
                            onClick={() => navigation('/')}    
                        >
                            Back
                        </Button>
                        <Button 
                            style={{ ...btnCss, height: 30, borderRadius: 30, width: 100, marginLeft: 20 }}
                            onClick={() => navigation('/feedback')}
                        >
                            Feedback
                        </Button>
                    </div>
                </View>
            </Body>
            <Bottom />
        </Wrapper>
    )
}
