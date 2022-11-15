import React from "react";
import {Layout, Row, Col, List, Divider, Space} from "antd";
import {
    TwitterOutlined,
    GithubOutlined,
    SkypeOutlined,
    GooglePlusOutlined,
    LinkedinOutlined,
    SlackOutlined,
    InstagramOutlined,
    WhatsAppOutlined

} from "@ant-design/icons";


const { Footer } = Layout;

export default function FooterDesign() {
    return<>
        <Footer className={"footer"}>
            <Row>
                <Col span={14} offset={5}>
                    <Row>
                        <Col span={6}>
                            <div className={"footer-link-header"}>
                                <h3>Company</h3>
                                <h4>About Us</h4>
                                <h4>Freebies</h4>
                                <h4>Premium</h4>
                                <h4>Blog</h4>
                                <h4>Get Coupon</h4>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className={"footer-link-header"}>
                                <h3>Company</h3>
                                <h4>About Us</h4>
                                <h4>Freebies</h4>
                                <h4>Premium</h4>
                                <h4>Blog</h4>
                                <h4>Get Coupon</h4>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className={"footer-link-header"}>
                                <h3>Company</h3>
                                <h4>About Us</h4>
                                <h4>Freebies</h4>
                                <h4>Premium</h4>
                                <h4>Blog</h4>
                                <h4>Get Coupon</h4>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className={"footer-link-header"}>
                                <h3>Company</h3>
                                <h4>About Us</h4>
                                <h4>Freebies</h4>
                                <h4>Premium</h4>
                                <h4>Blog</h4>
                                <h4>Get Coupon</h4>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={22} offset={1}>
                    <hr className={"footer-horizontal-bar"}/>
                </Col>
            </Row>
            <Row>
                <Col span={6} offset={9}>
                    <div className={"footer-logo"}>
                        <img src={"logo.png"} width={50} height={"auto"}/>
                        <p>Bk CiTy</p><br/>
                    </div>

                        <Row>
                            <Col>
                                <Space direction={"horizontal"} size={20}>
                                    <TwitterOutlined className={"footer-menu-icon"}/>
                                    <SkypeOutlined className={"footer-menu-icon"}/>
                                    <GooglePlusOutlined className={"footer-menu-icon"}/>
                                    <LinkedinOutlined className={"footer-menu-icon"}/>
                                    <SlackOutlined className={"footer-menu-icon"}/>
                                    <InstagramOutlined className={"footer-menu-icon"}/>
                                    <WhatsAppOutlined className={"footer-menu-icon"}/>
                                </Space>
                            </Col>
                        </Row>


                </Col>
            </Row>
            <Row>
                <Col span={14} offset={5}>
                    <div className={"footer-text-version"}>
                        <p>
                            © 2022 Bk CiTy, all rights reserved. Made with for a better web.
                        </p>
                    </div>
                </Col>
            </Row>

        </Footer>
    </>
}