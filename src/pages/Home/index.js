import { Col, Divider, Row } from 'antd';
import { Carousel } from 'antd';

import LayoutDefault from "../../layout/Default"

const Home = () => {

    const contentStyle = {

    }

    return(
        <LayoutDefault>
        <main>
            <Row justify='center'>
                <Col md={16}>
                    <Carousel>

                    </Carousel>
                </Col>
            </Row>
        </main>
        </LayoutDefault>
    )
}
export default Home;