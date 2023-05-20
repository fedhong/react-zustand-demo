import { useStore } from '../../store'
import { Row, Col, Radio, Select } from 'antd'
import './index.less'

function component() {
    const options = useStore(state => state.options)
    const setStyleOptionSelected = useStore(state => state.setStyleOptionSelected)
    const styleOptionSelected = useStore(state => state.styleOptionSelected)

    const onChange = (key, value) => {
        setStyleOptionSelected(key, value)
    }

    return (
        <div className='StyleOptions'>
            <Row justify="center" align="middle">
                <Col span={2} align="right">风格1：</Col>
                <Col span={6}>
                    <Radio.Group value={styleOptionSelected.style1} onChange={(e) => { onChange('style1', e.target.value) }} options={options.adType} optionType="button" buttonStyle="solid" />
                </Col>
            </Row>
            <Row justify="center" align="middle">
                <Col span={2} align="right">风格2：</Col>
                <Col span={6}>
                    <Select placeholder="请选择推广节日" value={styleOptionSelected.style2} onChange={(value) => { onChange('style2', value) }} options={options.festival}></Select>
                </Col>
            </Row>
        </div >
    )
}

export default component