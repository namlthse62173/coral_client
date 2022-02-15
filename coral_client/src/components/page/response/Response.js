import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button, Input } from 'antd'
import { AppContext } from '../../provider/AppProvider'
import { btnCss } from '../../css-objects'
import { responseCorals } from '../../../share/data'
import { HomeWrapper, HomeTop, HomeNav, HomeSearchText, HomeBottom } from '../../css-objects'
import ResponseCoralView from '../../common/ResponseCoralView'

/* Body style*/
const Body = styled.div`
    height: 65vh;
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
        <HomeWrapper>
            <HomeTop>
                <HomeSearchText>
                    <Input style={{ width: 200 }} placeholder='Search' />
                    <Button style={{ backgroundColor: '#9ACD32', fontWeight: 'bold' }}>GO</Button>
                </HomeSearchText>
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
            <HomeBottom />
        </HomeWrapper>
    )
}
