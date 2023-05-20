import { useStore } from '../../store'
import { Row, Col, Radio, Select } from 'antd'
import './index.less'

function component() {
    const options = useStore(state => state.options)

    const onChange = (key, value) => {
        console.log(`${key}:${value}`)
    }

    return (
        <div className='Preview'>
            <Row justify="center" align="middle">
                <Col span={4}><div className='img-wrapper'>1</div></Col>
                <Col span={4}><div className='img-wrapper'>2</div></Col>
                <Col span={4}><div className='img-wrapper'>3</div></Col>
            </Row>
            <Row justify="center" align="middle">
                <Col span={4}><div className='img-wrapper'>4</div></Col>
                <Col span={4}><div className='img-wrapper'>5</div></Col>
                <Col span={4}><div className='img-wrapper'>6</div></Col>
            </Row>
            <Row justify="center" align="middle">
                <Col span={4}><div className='img-wrapper'>7</div></Col>
                <Col span={4}><div className='img-wrapper'>8</div></Col>
                <Col span={4}><div className='img-wrapper'>9</div></Col>
            </Row>
        </div >
    )
}

export default component