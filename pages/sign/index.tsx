import {Row, Col, Input, Switch, Button, Space, Form, message, Card} from "antd";
import Link from "next/link";


export default function Sign() {

    return<>
        <Row>
            <Col span={14} offset={5}>
                <Card className={"sign-main-card"} style={{marginTop:50,borderRadius:10}} hoverable={false}>
                   <Row>
                       <Col span={14}>
                           <div className={"sign"}>
                               <img src={"/assets/login.svg"} width={"auto"} height={"auto"}/>
                           </div>
                       </Col>
                       <Col span={10}>
                           <div className={"formWindow"}>
                               <Col>
                                   <div className={"sign-space"}>
                                       <h4 className={"sign-text"}>Sign In</h4>
                                       <p className={"sign-p"}>Enter your email and password to sign in</p>
                                   </div>
                                   <div>
                                       {/*<Space direction={"vertical"} size={10} wrap={false}>*/}
                                       <Form  autoComplete="off">
                                           <Form.Item rules={[{ required: true,min:4, message: 'Please enter your email!' }]}>
                                               <Input className={"emailBox"} placeholder={"Email"} allowClear/>
                                           </Form.Item>
                                           <Form.Item rules={[{ required: true,min:4, message: 'Please enter your password!' }]}>
                                               <Input.Password placeholder = {"Password"} className={"passBox"} allowClear/>

                                           </Form.Item>
                                           {/*<Space direction={"horizontal"} size={10}>*/}


                                           <Form.Item name="remember" className="aligin-center" valuePropName="checked">
                                               <Switch defaultChecked size={"small"}/>
                                               <span style={{paddingLeft:10}}>Remember me</span>
                                               <Link href="../forget_Password" className="text-dark font-bold">
                                                   <span style={{paddingLeft:54}}>Forget password ?</span>
                                               </Link>
                                             </Form.Item>

                                           {/*</Space>*/}

                                           <Form.Item>
                                               <Button
                                                   type="primary"
                                                   htmlType="submit"
                                                   style={{ width: "100%" ,backgroundColor:"#4826f6",border:"none",borderRadius:5}}>
                                                   SIGN IN

                                               </Button>
                                           </Form.Item>
                                       </Form>

                                           <div className={"sign-options"}>
                                               <Row gutter={4}>
                                                   <Col span={12}>
                                                       <Button className={"sign-op-btn"} style={{borderRadius:5,boxShadow:"0 0 #fff",width:"100%"}}  >
                                                           <img src="https://img.icons8.com/fluency/48/null/google-logo.png" style={{width:20,height:"auto"}}/>
                                                           <span style={{paddingLeft:10}}>Google</span>
                                                       </Button>
                                                   </Col>
                                                   <Col span={12}>
                                                       <Button className={"sign-op-btn"} style={{borderRadius:5,boxShadow:"0 0 #fff",width:"100%"}}>
                                                           <img src="https://img.icons8.com/fluency/48/null/facebook-new.png" style={{width:20,height:"auto"}}/>
                                                           <span style={{paddingLeft:10}}>Facebook</span>
                                                       </Button>
                                                   </Col>
                                               </Row>
                                           </div>

                                           <p className="sign-up-text" style={{fontSize:12}} >
                                               Don't have an account?{" "}

                                               <Link href="../signup" className="text-dark font-bold">
                                                   Sign Up
                                               </Link>
                                           </p>
                                   </div>
                               </Col>
                           </div>
                       </Col>
                   </Row>
                </Card>
            </Col>
        </Row>

    </>
}