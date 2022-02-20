import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../../provider/AppProvider'
import { responseCorals } from '../../../share/data'
import { HomeWrapper, HomeTop, HomeNav } from '../../css-objects'
import ResponseCoralView from '../../common/ResponseCoralView'
import { thumbnail } from '../../../share/data'
import { FeedbackButton, HomeButton, InfoButton, StatisticButton } from '../../common/NavButton'

/* Body style*/
const Body = styled.div`
    height: 75vh;
    width: 100vw;
    overflow-y: scroll;
`
const ThumbnailImg = styled.div`
    height: 150px; 
    width: 300px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -45%);
    text-align: center;

    img {
        height: 100%;
    }
`
const DataView = styled.div`
    width: 99vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

export default function Response() {
    const { navigation } = useContext(AppContext)

    return (
        <HomeWrapper>
            <HomeTop>
                <ThumbnailImg><img src={thumbnail.src} /></ThumbnailImg>
                <HomeNav>
                    <div className='flexStart'>
                        <HomeButton nav={navigation} />
                        <StatisticButton nav={navigation} />
                        <FeedbackButton nav={navigation} />
                    </div>

                    <div className='flexEnd'>
                        <InfoButton nav={navigation} />
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
        </HomeWrapper>
    )
}
