import {Card, Col, DatePicker, Radio, Form, Input, RadioChangeEvent, Row, Space, Checkbox, Button} from "antd";
import moment from "moment";
import {useRef, useState} from "react";
import {AmazonOutlined, ManOutlined, PlayCircleFilled, WomanOutlined} from "@ant-design/icons";

export default function Signup() {

    const [value, setValue] = useState("Male");

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };


    const dateFormat = 'YYYY/MM/DD';
    return<>
        <div className={"background-mod"}>
            <Row>
               <Col span={12} offset={6}>
                   <div className={"signupBox"}>
                       <Card hoverable={false} className={"signupCard"} style={{borderRadius:10}}>

                            <Form>
                                    <Row gutter={[40,20]}>
                                        <Col span={12} offset={0}>
                                            <Form.Item>
                                                <Input placeholder={"First name"} className={"fname"} allowClear/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={12} offset={0}>
                                            <Form.Item>
                                                <Input placeholder={"Last name"} className={"lname"} allowClear/>
                                            </Form.Item>
                                        </Col>

                                        <Col span={12} offset={0}>
                                            <Form.Item>
                                                <Input placeholder={"Email"} className={"email"} allowClear/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={12} offset={0}>
                                            <Form.Item>
                                                <Input placeholder={"Phone"} className={"phone"} allowClear/>
                                            </Form.Item>

                                        </Col>
                                        <Col span={12} offset={0}>
                                            <Form.Item>
                                                <Input placeholder={"Country"} className={"country"} allowClear/>
                                            </Form.Item>
                                        </Col>
                                        <Col span={12} offset={0}>
                                            <Row gutter={7}>
                                                <Col>
                                                    <Form.Item>
                                                        <DatePicker defaultValue={moment('2022/02/01', dateFormat)} format={dateFormat} className={"date-pick"} placeholder={"Birth Day"}/>
                                                    </Form.Item>
                                                </Col>
                                                <Col>
                                                    <Form.Item>
                                                        <Radio.Group onChange={onChange} value={value} >
                                                            <Space direction={"horizontal"} size={5}>
                                                                <Radio.Button value={"Male"} style={{color:"black",borderRadius:5}} className={"roption"}>
                                                                    <ManOutlined /><span style={{paddingLeft:6}}>M</span>
                                                                </Radio.Button>
                                                                <Radio.Button value={"Female"} style={{color:"black",borderRadius:5}} className={"roption"}>
                                                                    <WomanOutlined /><span style={{paddingLeft:6}}>F</span>
                                                                </Radio.Button>
                                                            </Space>
                                                        </Radio.Group>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col span={12} offset={0}>
                                            <Form.Item>
                                                <Input.Password placeholder = {"Password"} className={"new-pass"} allowClear/>
                                            </Form.Item>
                                        </Col>
                                            <Col span={12} offset={0}>
                                                <Form.Item>
                                                    <Input.Password placeholder = {"Confirm password"} className={"con-pass"} allowClear/>
                                                </Form.Item>
                                            </Col>
                                        <Col span={12} offset={0}>
                                            <Form.Item>
                                        <Checkbox>
                                            I have read the <a href="">agreement</a>
                                        </Checkbox>
                                            </Form.Item>
                                        </Col>

                                    </Row>
                                <Row gutter={[40,20]}>
                                    <Col span={12} >
                                        <Form.Item>
                                            <Button type={"primary"} style={{borderRadius:5,width:"100%",backgroundColor:"#8f7cec",border:"none"}}>Register</Button>
                                        </Form.Item>

                                    </Col>
                                </Row>
                                <Row gutter={[40,20]}>
                                    <Col span={12} >
                                        <span>Already have an account? <a href="/sign">Sign In</a></span>

                                    </Col>
                                </Row>
                            </Form>
                       </Card>
                   </div>
               </Col>
            </Row>
        </div>
    </>
}