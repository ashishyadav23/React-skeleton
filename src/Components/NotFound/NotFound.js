import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/lottieFiles/404.json'
import { Row, Col } from 'antd';

const NotFound = (props) => {
    console.log("rposp", props);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Row>
            <Col span={22} style={{ textAlign: "center" }}>
                <Lottie options={defaultOptions}
                    width="100%"
                    style={{ maxWidth: '320px' }} />
            </Col>
        </Row>

    )
}
export default NotFound