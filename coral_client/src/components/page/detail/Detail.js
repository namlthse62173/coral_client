import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { AppContext } from '../../provider/AppProvider'
import { btnCss } from '../../css-objects'
import { detailCoral } from '../../../share/data'
import { HomeWrapper, HomeTop, HomeNav } from '../../css-objects'

/* Body style */
const Body = styled.div`
    height: 75vh;
    width: 100vw;
`
const View = styled.div`
    position: relative;
    left: 50%;
    transform: translate(-50%, 15%);
    width: 80%;
    height: 70%;

    .detail__table {
        position: relative;
        border-radius: 10px;
        background-color: #d3d3d3;
    }
    .detail__table p {
        font-size: 20px;
        text-align: justify;
        left: -10px;
        padding: 20px;
        margin: 0;
    }
    .detail__table img {
        height: 250px;
        width: 270px;
        float: left;
        border-radius: 20px;
        left: -20px;
        top: -20px;
        position: relative;
    }
    .detail__btn {
        float: right;
        bottom: -50px;
        right: 0;
        margin-top: 10px;
    }
`
export default function Detail() {
    const { navigation } = useContext(AppContext)
    const imageSrc = detailCoral.src
    const desc = detailCoral.description
    return (
        <HomeWrapper>
            <HomeTop>
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
                </HomeNav>
            </HomeTop>
            <Body>
                <View>
                    <div className='detail__table'>
                        <img src={imageSrc} />
                        <p>{desc}</p>
                    </div>
                    <div className='detail__btn'>
                        <Button
                            style={{ ...btnCss, height: 30, borderRadius: 10, width: 100 }}
                            onClick={() => navigation('/')}
                        >
                            Back
                        </Button>
                        <Button
                            style={{ ...btnCss, height: 30, borderRadius: 10, width: 100, marginLeft: 20 }}
                            onClick={() => navigation('/feedback')}
                        >
                            Feedback
                        </Button>
                    </div>
                </View>
            </Body>
        </HomeWrapper>
    )
}
