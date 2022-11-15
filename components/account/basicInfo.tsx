import {Card, Col, Form, Input, Row} from "antd";

export default function BasicInfo(){
    return<>
        <div className={"basic-main-window"}>
            <span className={"basic-menu-view-title"}>Basic Info</span>
            <div  className={"basic-second-window"}>
                <Form>
                    <Row gutter={20}>
                       <Col span={12}>
                           <Form.Item>
                           <Input type={"text"} placeholder={"Ashan"} id={"fname"} />
                           </Form.Item>
                       </Col>
                        <Col span={12}>
                            <Form.Item>
                            <Input type={"text"} placeholder={"Jayalath"} id={"lname"}/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={8}>
                            <Form.Item>
                                <Input type={"text"} placeholder={"Ashan"} id={"fname"} />
                            </Form.Item>
                        </Col>
                        <Col span={16}>
                            <Form.Item>
                                <Input type={"text"} placeholder={"Ashan"} id={"fname"} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    </>
}