import React, { useContext } from 'react'
import styled from 'styled-components'
import topBg from '../../../share/background/top-background.jpg'
import bottomBg from '../../../share/background/bottom-background.jpg'
import { Button } from 'antd'
import { AppContext } from '../../provider/AppProvider'
import { btnCss } from '../../css-objects'
import { responseCorals } from '../../../share/data'
import ResponseCoralView from '../../../common/ResponseCoralView'

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

/* Body style*/
const Body = styled.div`
    height: 60vh;
    width: 100vw;
    overflow-y: scroll;
`
const DataView = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`
export default function Response() {
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
                <DataView>
                    {
                        responseCorals.map(coral => (
                            <ResponseCoralView
                                key={coral.id}
                                id={coral.id}
                                name={coral.name}
                                imageSrc={coral.src}
                                desc={coral.description} 
                            />
                        ))
                    }
                </DataView>
            </Body>
            <Bottom>
            </Bottom>
        </Wrapper>
    )
}
