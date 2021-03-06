import React, { useContext } from "react"
import styled from "styled-components"
import { Button, Form, Input } from "antd"
import { AppContext } from "../../provider/AppProvider"
import { btnCss, globalBlue } from "../../css-objects"
import { CloudUploadOutlined } from "@ant-design/icons/lib/icons"
import { HomeWrapper, HomeTop, HomeNav } from "../../css-objects"
import { FeedbackButton, HomeButton, InfoButton, StatisticButton } from '../../common/NavButton'

const { TextArea } = Input;

/* Body style*/
const Body = styled.div`
	height: 75vh;
	width: 100vw;
	overflow-y: scroll;

	position: relative;
`
const View = styled.div`
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0%);
	width: 80%;
	height: 80%;

	.fbTable {
		border-radius: 5px;
		background-color: #d3d3d3;
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
	.ant-row .ant-form-item-label {
		text-align: left;
	}
	.ant-row .ant-form-item-label label {
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
	const { navigation } = useContext(AppContext);

	return (
		<HomeWrapper>
			<HomeTop>
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
				<View>
					<h1>Feedback</h1>
					<div className="fbTable">
						<FormStyled
							layout="horizontal"
							labelCol={{ span: 4 }}
							wrapperCol={{ span: 20 }}
						>
							<Form.Item
								colon={false} label="Topic" name="topic"
							>
								<Input />
							</Form.Item>
							<Form.Item
								colon={false} label="Detail" name="detail"
							>
								<TextArea rows={4} />
							</Form.Item>
							<Form.Item wrapperCol={{ offset: 4, span: 20 }}>
								<UploadBtn>
									<CloudUploadOutlined style={{ fontSize: 50 }} />
								</UploadBtn>
							</Form.Item>
						</FormStyled>
					</div>
					<div className="fbBtn">
						<Button
							style={{ ...btnCss, height: 30, borderRadius: 10, width: 100 }}
						>
							Send
						</Button>
					</div>
				</View>
			</Body>
		</HomeWrapper>
	)
}
