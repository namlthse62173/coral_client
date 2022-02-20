import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button, Col, Row, Upload } from 'antd'
import { AppContext } from '../../provider/AppProvider'
import { homeCorals } from '../../../share/data'
import HomeCoralView from '../../common/HomeCoralView'
import { CloudUploadOutlined } from '@ant-design/icons/lib/icons'
import { HomeWrapper, HomeTop, HomeNav } from '../../css-objects'
import { HomeButton, LoginButton, RegisterButton, StatisticButton } from '../../common/NavButton'

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
const props = {
    name: 'file',
    // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    // headers: {
    //   authorization: 'authorization-text',
    // },
    // onChange(info) {
    //   if (info.file.status !== 'uploading') {
    //     console.log(info.file, info.fileList);
    //   }
    //   if (info.file.status === 'done') {
    //     message.success(`${info.file.name} file uploaded successfully`);
    //   } else if (info.file.status === 'error') {
    //     message.error(`${info.file.name} file upload failed.`);
    //   }
    // },
  };
export default function Home() {
    const { navigation } = useContext(AppContext)
    return (
        <HomeWrapper>
            <HomeTop>
                <Upload {...props}>
                    <UploadBtn><CloudUploadOutlined style={{ fontSize: 60 }} /></UploadBtn>
                </Upload>
                
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
                <DataView>
                    <Row>
                        {
                            homeCorals.map((c, key) => (
                                <Col key={key} span={4}><HomeCoralView name={c.name} imageSrc={c.src} /></Col>
                            ))
                        }
                    </Row>
                </DataView>
            </Body>
        </HomeWrapper>
    )
}
