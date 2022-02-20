import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../../provider/AppProvider'
import { HomeWrapper, HomeTop, HomeNav } from '../../css-objects'
import { HomeButton, LoginButton, RegisterButton, StatisticButton } from '../../common/NavButton'

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
export default function Statistic() {
    const { navigation } = useContext(AppContext)
    return (
        <HomeWrapper>
            <HomeTop>
                <HomeNav>
                    <div className='flexStart'>
                        <HomeButton nav={navigation} />
                        <StatisticButton nav={navigation} />
                    </div>
                    <div className='flexEnd'>
                        <RegisterButton nav={navigation} />
                        <LoginButton nav={navigation} />
                    </div>
                </HomeNav>
            </HomeTop>
            <Body>
                {/* <DataView>
                    <Row>
                        {
                            homeCorals.map(c => (
                                <Col span={4}><HomeCoralView name={c.name} imageSrc={c.src} /></Col>
                            ))
                        }
                    </Row>
                </DataView> */}
            </Body>
        </HomeWrapper>
    )
}
