import {Avatar, Col, Row, Switch} from "antd";

export default function Profile(){
    return<>
        <Row gutter={20}>
            <Col span={2}>
                <Avatar className={"pro-user-avatar"} src={"logo.png"} size={"large"}/>
            </Col>
            <Col span={6}>
                <span className={"pro-name"}>
                    Ashan Jaylath
                </span>
                <br/>
                <span className={"pro-name-sub"}>
                     Ashan Jaylath
                </span>
            </Col>
            <Col span={16}>
                <span className={"pro-switch"}>Switch to visible</span>
                <Switch className={"pro-switch-btn"}size={"small"} title={"sss"}/>
            </Col>
        </Row>
    </>
}