import { useEffect } from 'react'
import { useStore } from '../../store'
import { Row, Col, Radio, Select, Input } from 'antd'
import './index.less'

function component() {
    const options = useStore(state => state.options)
    const setBizOptionSelected = useStore(state => state.setBizOptionSelected)
    const bizOptionSelected = useStore(state => state.bizOptionSelected)

    const onChange = (key, value) => {
        setBizOptionSelected(key, value)
    }

    return (
        <div className='BizOptions'>
            <Row justify="center" align="middle">
                <Col span={2} align="right">推广场景：</Col>
                <Col span={6}>
                    <Radio.Group value={bizOptionSelected.adType} onChange={(e) => { onChange('adType', e.target.value) }} options={options.adType} optionType="button" buttonStyle="solid" />
                </Col>
            </Row>
            <Row justify="center" align="middle">
                <Col span={2} align="right">推广节日：</Col>
                <Col span={6}>
                    <Select placeholder="请选择推广节日" value={bizOptionSelected.festival} onChange={(value) => { onChange('festival', value) }} options={options.festival}></Select>
                </Col>
            </Row>
            <Row justify="center" align="middle">
                <Col span={2} align="right">推广时段：</Col>
                <Col span={6}>
                    <Select placeholder="请选择推广时段" value={bizOptionSelected.period} onChange={(value) => { onChange('period', value) }} options={options.period}></Select>
                </Col>
            </Row>
            <Row justify="center" align="middle">
                <Col span={2} align="right">定向城市：</Col>
                <Col span={6}>
                    <Select placeholder="请选择推广城市" value={bizOptionSelected.city} onChange={(value) => { onChange('city', value) }} options={options.city}></Select>
                </Col>
            </Row>
            <Row justify="center" align="middle">
                <Col span={2} align="right">定向人群：</Col>
                <Col span={6}>
                    <Radio.Group value={bizOptionSelected.persona} onChange={(e) => { onChange('persona', e.target.value) }} options={options.persona} optionType="button" buttonStyle="solid" />
                </Col>
            </Row>
            <Row justify="center" align="middle">
                <Col span={2} align="right">定向App：</Col>
                <Col span={6}>
                    <Radio.Group value={bizOptionSelected.App} onChange={(e) => { onChange('App', e.target.value) }} options={options.App} optionType="button" buttonStyle="solid" />
                </Col>
            </Row>
            <Row justify="center" align="middle">
                <Col span={2} align="right">定向系统：</Col>
                <Col span={6}>
                    <Radio.Group value={bizOptionSelected.OS} onChange={(e) => { onChange('OS', e.target.value) }} options={options.OS} optionType="button" buttonStyle="solid" />
                </Col>
            </Row>
            <Row justify="center" align="middle">
                <Col span={2} align="right">广告语：</Col>
                <Col span={6}>
                    <Input placeholder="请输入广告语" value={bizOptionSelected.txt} onChange={(e) => { onChange('txt', e.target.value) }}></Input>
                </Col>
            </Row>
        </div >
    )
}

export default component