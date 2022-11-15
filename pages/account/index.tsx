import HeaderDesign from "../../components/headerFooter/header";
import {Card, Col, Row, Space, Image, Avatar, List, Affix, Switch} from "antd";
import FooterDesign from "../../components/headerFooter/footer";
import {
    UserOutlined,
    FileTextFilled,
    LockFilled,
    UsbFilled,
    ContactsFilled,
    SoundFilled,
    ReconciliationFilled,
    DeleteFilled
} from "@ant-design/icons";
import {useState} from "react";
import BasicInfo from "../../components/account/basicInfo";
import Link from "next/link";
import Profile from "../../components/account/profile";
// import HeaderDesign from "../../components/headerFooter/header";


const menuList=[
    {icon:<UserOutlined />,name:"Profile",link:<BasicInfo/>},
    {icon:<FileTextFilled />,name:"Basic Info",link:<BasicInfo/>},
    {icon:<LockFilled />,name:"Change Password",link:<FooterDesign/>},
    {icon:<UsbFilled />,name:"2F Authantication",link:<BasicInfo/>},
    {icon:<ContactsFilled />,name:"Accounts",link:<BasicInfo/>},
    {icon:<SoundFilled />,name:"Notifications",link:<FooterDesign/>},
    {icon:<ReconciliationFilled />,name:"Sessisions",link:<BasicInfo/>},
    {icon:<DeleteFilled />,name:"Delete Account",link:<FooterDesign/>}
]
const profileData=[
    {
        fname:"Ashan",lname:"Jayalath",gender:"Male",dob:"02/25/1996",email:"shanjayalath225@gmail.com",phone:"0710710712"
    }
]

export default function AccountSettings() {
    const[loadPage,setLoadPage]=useState(<FooterDesign/>)

    const menuBtnIcon=(name:string,getIcon:any,link:any)=>{
        return(
            <div className={"acnt-btn"} onClick={()=> setLoadPage(link)}>
                <Row>
                    <Col>
                        {getIcon}
                    </Col>
                    <Col>
                        <div style={{paddingLeft:10}}>
                            {name}
                        </div>

                    </Col>
                </Row>

            </div>
        )
    }

    return<>
        <HeaderDesign/>
        <Row style={{marginTop:100}} gutter={30}>
            <Col span={5}>
                <Affix offsetTop={100}>
                    <div style={{width:"100%",height:"auto"}}>
                        <Card className={"account-menu"} style={{borderRadius:10,marginLeft:20}} hoverable={false}>
                            <List
                                grid={{ gutter: 16}}
                                dataSource={menuList}
                                split={false}
                                renderItem={item => (
                                    <List.Item>
                                        {menuBtnIcon(item.name,item.icon,item.link)}
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </div>
                </Affix>
            </Col>

            <Col span={19}>
                <div style={{width:"100%",height:"auto"}}>
                    <Card className={"account-menu-view"} style={{borderRadius:10,width:"auto",marginRight:20}} hoverable={false}>
                        <Profile/>
                    </Card>
                    <Card className={"account-menu-view"}style={{borderRadius:10,marginRight:20,marginTop:20,marginBottom:20,height:"auto",width:"auto"}} hoverable={false}>
                        {loadPage}
                    </Card>
                </div>
            </Col>
        </Row>
        {/*<FooterDesign/>*/}
    </>
}