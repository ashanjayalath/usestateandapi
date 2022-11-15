import HeaderDesign from "../../components/headerFooter/header";
import {BackTop, Button, Card, Col, Row, Statistic} from "antd";
import PathDisplay from "../../components/bodyComponent/pathDisplay";
import LoadingBar from "react-top-loading-bar";
import CreditCard from "../../components/card/creditCard";
import {LikeOutlined} from "@ant-design/icons";
import FooterDesign from "../../components/headerFooter/footer";
import React, {useState} from "react";

export default function Home() {
    const [progress, setProgress] = useState(0)
    return<>
        <div>
            <HeaderDesign/>
            <div>
                <img src={"/assets/lioan.jpg"} width={"100%"} height={"100%"}/>
            </div>
            <Row>
                <Col span={22} offset={1}>
                    <div style={{paddingTop:50,paddingBottom:200}}>
                        <Card hoverable={false} className={"main-body-card"}>
                            <div className={"pathmenu"}>
                                <PathDisplay/>
                            </div>

                            <div style={{marginTop:50}}>
                                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam at
                                    corporis dolor dolore excepturi expedita ipsa nihil nulla obcaecati officiis,
                                    quam quo quod repudiandae similique sint veniam! Delectus, est.</p>

                            </div>
                            <div style={{marginTop:20}}>
                                <LoadingBar
                                    color='#EC0707FF'
                                    progress={progress}
                                    onLoaderFinished={() => setProgress(0)}
                                />
                                <Button type={"primary"} className={"pass-data"} style={{border:"none",marginTop:10,borderRadius:5,backgroundColor:"black"}} onClick={()=>{
                                    // message.success('Table Data Add Success');
                                    setProgress(progress + 20)
                                }}>
                                    Progress Bar Load {progress}
                                </Button>
                            </div>
                        </Card>

                        <div>
                            <img src={"main.jpg"} width={"100%"} height={"100%"} style={{ borderRadius:"0% 0% 2% 2%",marginTop:50}} className={"main-image"}/>
                        </div>
                        <div>
                            <img src={"https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/4751c758720747.5eda22fcdf729.png"} width={"100%"} height={"100%"} style={{ borderRadius:"2% 2% 2% 2%",marginTop:50}} className={"home-image"}/>
                        </div>
                        <div style={{width:"auto"}}>
                            <Row gutter={60}>
                                <Col span={8} style={{verticalAlign:"middle"}}>
                                    <CreditCard />
                                </Col>
                                <Col span={8}>
                                    <CreditCard/>
                                </Col>
                                <Col span={8}>
                                    <CreditCard/>

                                </Col>
                            </Row>
                        </div>
                        <Row gutter={50}>
                            <Col span={12}>
                                <Card hoverable={false} className={"main-body-card"} style={{ borderRadius:"2% 2% 0% 0%",marginTop:50,height:250}}>
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                                        </Col>
                                        <Col span={12}>
                                            <Statistic title="Unmerged" value={93} suffix="/ 100" />
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card hoverable={false} className={"main-body-card"} style={{ borderRadius:"2% 2% 0% 0%",marginTop:50,height:250}}>
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Statistic title="Active Users" value={112893} />
                                        </Col>
                                        <Col span={12}>
                                            <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                                            <Button style={{ marginTop: 16 }} type="primary">
                                                Recharge
                                            </Button>
                                        </Col>
                                        <Col span={12}>
                                            <Statistic title="Active Users" value={112893} loading />
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>


                    </div>
                </Col>
            </Row>
            <BackTop visibilityHeight={500} duration={1500}/>
            <FooterDesign/>
        </div>
    </>
}