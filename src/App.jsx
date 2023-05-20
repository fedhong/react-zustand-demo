import React, { useEffect, useState } from 'react'
import { Button, Steps, message, Spin } from 'antd'
import { useStore } from './store'
import BizOptions from './components/BizOptions'
import StyleOptions from './components/StyleOptions'
import Preview from './components/Preview'
import 'antd/dist/antd.css'
import './App.less'

const { Step } = Steps

const steps = [
	{
		title: '第一步',
		subTitle: '业务配置',
		description: '业务配置',
		content: <BizOptions></BizOptions>,
	},
	{
		title: '第二步',
		subTitle: '风格配置',
		description: '风格配置',
		content: <StyleOptions></StyleOptions>,
	},
	{
		title: '第三步',
		subTitle: '效果预览',
		description: '效果预览',
		content: <Preview></Preview>,
	},
]

function App() {

	const [current, setCurrent] = useState(0)
	const [loading, setLoading] = useState(false)
	const setOptions = useStore(state => state.setOptions)

	useEffect(() => {
		init()
	}, [])

	const init = async () => {
		setLoading(true)
		await setOptions().catch(error => {
			message.error(`获取选项数据失败：${error.message}`)
		})
		setLoading(false)
	}

	const next = () => {
		if (current == steps.length - 2) {
			setLoading(true)
			setTimeout(() => {
				setLoading(false)
			}, 1000)
		}
		setCurrent(current + 1)
	}

	const prev = () => {
		setCurrent(current - 1)
	}

	return (
		<div className="App">
			<div className="Content">
				<Spin spinning={loading}>
					<div className="steps-bar">
						<Steps current={current} >
							{steps.map(item => (
								<Step key={item.title} title={item.title} subTitle={item.subTitle} />
							))}
						</Steps>
					</div>
					<div className="steps-content">
						{steps[current].content}
					</div>
					<div className="steps-btn">
						{current > 0 && (
							<Button style={{ margin: '0 8px' }} onClick={() => prev()}>
								上一步
							</Button>
						)}
						{current < steps.length - 1 && (
							<Button type="primary" onClick={() => next()}>
								下一步
							</Button>
						)}
					</div>
				</Spin>
			</div>
		</div >
	)
}

export default App