import {
    Col,
    Divider,
    Row,
    Popover,
    Layout,
    Avatar,
    Badge,
    Input,
    List,
    Button,
    Tooltip, Card, Switch, Drawer, Menu, MenuProps
} from "antd";
import {
    DashboardFilled,
    RightOutlined,
    BellFilled,
    GiftOutlined,
    UserOutlined,
    CheckOutlined,
    LogoutOutlined,
    ShoppingCartOutlined,
    CodepenCircleOutlined,
    EyeOutlined,
    RestOutlined,
    SketchOutlined,
    IeOutlined,
    AlibabaOutlined,
    DropboxOutlined,
    SlackSquareOutlined,
    DingdingOutlined,
    GithubOutlined,
    QqOutlined,
    DownOutlined,
    SearchOutlined,
    CloseCircleOutlined, CloseOutlined, SettingFilled
} from "@ant-design/icons";
import Link from "next/link";
import LoadingBar from 'react-top-loading-bar'
import React, {useState} from "react";
import Notification from "./notification";
import {ColumnsType} from "antd/es/table";
import {HexColorPicker} from "react-colorful";

const { Header, Sider, Content } = Layout;

const menuTitle=(getIcon:any,name:any)=>{
    return(
        <Col>
            <div className={"card-title"}>
                <Row>
                    <Col>
                        {getIcon}
                    </Col>
                    <Col>
                        <h4 className={"title"}>{name}</h4>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
const menuBtn=(name:string)=>{
    return(
        <div className={"card-btn"}>
            {name}
        </div>
    )
}
const menuBtnIcon=(name:string,getIcon:any)=>{
    return(
        <div className={"card-btn"}>
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
const subMenuBtn=(name:string,con:any,place:any,opacity:any)=>{
    return(
        <Popover content={con} placement={place} overlayStyle={{position:"fixed",zIndex:1}} overlayInnerStyle={{borderRadius:10,opacity:opacity}} arrowPointAtCenter>
        {/*<Popover content={con} placement={place} overlayInnerStyle={{borderRadius:10}} >*/}
            <div className={"card-sub-btn"}>
                <Row>
                    <Col>
                        {name}
                    </Col>
                    <Col>
                        <div className={"btn-arrow"}><RightOutlined /></div>
                    </Col>
                </Row>
            </div>
        </Popover>
    )
}
const divider=()=> {
    return(
        <Col>
            <Divider type={"vertical"} style={{height: "100%", marginTop: 50, marginBottom: 50, color: "red"}}/>
        </Col>
    )
}
const popover=(content:any,place:any,navigationText:string,icon:any)=>{
    return(
        <Popover content={content} placement={place} overlayStyle={{position:"fixed",zIndex:1}} overlayInnerStyle={{borderRadius:10}} className={"pop-back"} arrowPointAtCenter>
            <Row>
                <div style={{paddingLeft:"50%"}} >

                       {icon}

                </div>
            </Row>
            <Row>
                <span className={"nav-text"}>{navigationText}<DownOutlined style={{fontSize:8,paddingLeft:5}} /></span>
            </Row>

        </Popover>
    )
}


// const Lang=[
//     {title: 'English', id:'En'},
//     {title: 'සිංහල', id:'සිංහල'},
//     {title: 'தமிழ்', id:'தமிழ்'}
// ]


function bajColorChoose(count:number) {
    let def="#8f7cec"
    if(count<5){
        def="#78ff4f"
    }else if(count>=5 && count<=10){
        def="#ff9800"
    }else if(count>10){
        def="#ec0707"
    }
    return def;
}

export default function HeaderDesign() {
    const [open, setOpen] = useState(false);
    const [navColor, setNavColor] = useState<string>("#555555");
    const[bajCount,setBajCount]=useState<number>(1)
    const[navFixed,setNavFixed]=useState<any>("fixed")


    const YourComponent = () => {
        return <HexColorPicker color={navColor} onChange={setNavColor} />;
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const noti=(
        <div className={"header-noti"}>
           <Notification />
            <div className={"header-noti-window"}>
                <Row>
                    <Col span={10} offset={7}>
                        <span className={"header-noti-clear"}><RestOutlined /> Clear all</span>
                        <span className={"header-noti-read"} onClick={()=>setBajCount(0)}><EyeOutlined /> Read All</span>
                    </Col>
                </Row>


            </div>
        </div>
    );

    // const translate=(
    //     <div>
    //         <List dataSource={Lang} size={"small"} split={false}
    //               renderItem={item => (
    //                   <List.Item onClick={()=>{
    //                       setLangSelsect(item.id)
    //                   }}>
    //                       <div style={{cursor:"pointer"}}>
    //                           <List.Item >{item.title}</List.Item>
    //                       </div>
    //                   </List.Item>
    //         )} style={{fontSize:12}}
    //         />
    //     </div>
    // );
    const content=(
        <div >
            <Row>
                <Col>
                    {menuTitle(<DashboardFilled/>,"Dashboard")}
                </Col>
                <Col>
                    {menuTitle(<DashboardFilled/>,"Dashboard")}
                </Col>
            </Row>
            <Row>
                <Col>
                    {menuBtn("test")}
                </Col>
                <Col>
                    {menuBtn("test 2")}
                </Col>
            </Row>
        </div>
    );
    const Sell_on_Daraz=(
        <div>
            <Row>
                <Col>
                    {menuTitle(<DashboardFilled />,"Dashboard")}
                </Col>
                <Col>
                    {menuTitle(<CodepenCircleOutlined />,"Dashboard")}
                </Col>
                <Col>
                    {menuTitle(<SketchOutlined />,"Dashboard")}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Link href="/tabledata" className="text-dark font-bold">
                            {menuBtn("Display Table")}
                        </Link>
                    </Row>
                    <Row>
                        <Link href="/tempoBackup/tabledata" className="text-dark font-bold">
                         {menuBtn("Display Custom")}
                        </Link>
                    </Row>
                    <Row>
                        <Link href="/components/card/creditCard" className="text-dark font-bold">
                            {subMenuBtn("Credit Card",content,"right","95%")}
                        </Link>
                    </Row>
                    <Row>
                        {menuBtnIcon("Test four",<AlibabaOutlined />)}
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Link href="/tempoBackup/tabledata" className="text-dark font-bold">
                            {menuBtn("Display Table")}
                        </Link>
                    </Row>
                    <Row>
                        {menuBtn("Test two")}
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Link href="/tempoBackup/tabledata" className="text-dark font-bold">
                            {menuBtn("Display Table")}
                        </Link>
                    </Row>
                    <Row>
                        {menuBtn("Test two")}
                    </Row>
                    <Row>
                        {subMenuBtn("Test one",content,"right","90%")}
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    {menuTitle(<DashboardFilled />,"Dashboard")}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Link href="/tempoBackup/tabledata" className="text-dark font-bold">
                            {menuBtn("Display Table")}
                        </Link>
                    </Row>
                    <Row>
                        {menuBtn("Test two")}
                    </Row>
                    <Row>
                        {subMenuBtn("Test one",content,"right","85%")}
                    </Row>
                </Col>
            </Row>

        </div>
    );

    const user=(
        <div>
            <Row>
                {menuBtnIcon("My Purchases",<ShoppingCartOutlined />)}
            </Row>
            <Row>
                <Link href="/forget_Password" className="text-dark font-bold">
                    {menuBtnIcon("Discount Program",<GiftOutlined />)}
                </Link>
            </Row>
            <Row>
                <Link href="/account" className="text-dark font-bold">
                    {menuBtnIcon("Account Settings",<UserOutlined />)}
                </Link>
            </Row>
            <Row>
                <Link href="/sign" className="text-dark font-bold">
                    {menuBtnIcon("Log Out",<LogoutOutlined />)}
                </Link>
            </Row>

        </div>
    );
    const menuList=[
        {content:Sell_on_Daraz,place:"bottomLeft",navigationText:"Sell on Daraz",icon:<IeOutlined className={"menu-icon"} style={{color:navColor,fontSize:25}}/>},
        {content:Sell_on_Daraz,place:"bottomLeft",navigationText:"Help",icon:<SlackSquareOutlined className={"menu-icon"} style={{color:navColor,fontSize:25}} />},
        {content:Sell_on_Daraz,place:"bottomLeft",navigationText:"Buyer Protection",icon:<DropboxOutlined className={"menu-icon"} style={{color:navColor,fontSize:25}} />},
        {content:Sell_on_Daraz,place:"bottomLeft",navigationText:"Service",icon:<QqOutlined className={"menu-icon"} style={{color:navColor,fontSize:25}} />},
        {content:Sell_on_Daraz,place:"bottomLeft",navigationText:"Category",icon:<DingdingOutlined className={"menu-icon"} style={{color:navColor,fontSize:25}} />},
        {content:Sell_on_Daraz,place:"bottomLeft",navigationText:"Purchas",icon:<GithubOutlined className={"menu-icon"} style={{color:navColor,fontSize:25}} />}
    ]

    return(
      <>
          <Drawer  placement="right" onClose={onClose} open={open} width={350} closeIcon={<CloseCircleOutlined/>} closable={false} style={{borderRadius:10}}>
              <div className={"theme-drawer-window"}>
                  <Row>
                      <Col span={23}>
                          <span className={"theme-menu-title"}>Material UI Configurator</span>
                      </Col>
                      <Col span={1}>
                          <div className={"theme-close-btn-window"}>
                              <CloseOutlined className={"theme-close-btn-icon"} onClick={()=>onClose()}/>
                          </div>
                      </Col>
                  </Row>
                  <Row>
                      <Col>
                          <span className={"theme-menu-sub"}>Material UI Configurator</span>
                      </Col>
                  </Row>
                  <hr className={"theme-horizontal"}/>
                  <Row>
                      <Col>
                          <span className={"theme-menu-normal"}>Navigation Icon Colors</span>
                      </Col>
                  </Row>
                  <div className={"theme-btn-bar"}>
                      <Row gutter={10}>
                          <Col>
                              <Button type="primary" shape="circle" size={"small"} className={"theme-btn-bar-1"} onClick={()=>setNavColor("#8f7cec")} icon={<IeOutlined/>}> </Button>
                          </Col>
                          <Col>
                              <Button type="primary" shape="circle" size={"small"} className={"theme-btn-bar-2"}  onClick={()=>setNavColor("#e500ff")}> </Button>
                          </Col>
                          <Col>
                              <Button type="primary" shape="circle" size={"small"} className={"theme-btn-bar-3"}   onClick={()=>setNavColor("#ec0707")}> </Button>
                          </Col>
                          <Col>
                              <Button type="primary" shape="circle" size={"small"} className={"theme-btn-bar-4"}  onClick={()=>setNavColor("#ff9800")}> </Button>
                          </Col>
                          <Col>
                              <Button type="primary" shape="circle" size={"small"} className={"theme-btn-bar-5"}  onClick={()=>setNavColor("#52c41a")}> </Button>
                          </Col>
                          <Col>
                              <Button type="primary" shape="circle" size={"small"} className={"theme-btn-bar-6"}  onClick={()=>setNavColor("#00ffce")}> </Button>
                          </Col>

                      </Row>
                      <Row>
                          <Col span={17}>
                              <div className={"theme-color-window"}>
                                  {YourComponent()}
                              </div>
                          </Col>
                          <Col span={7}>
                              <Row>
                                  <Col>
                                      <Tooltip placement="top" title={"Click to add"}>
                                          <Card hoverable={true} className={"theme-color-preview"} style={{backgroundColor:navColor}}/>
                                      </Tooltip>

                                  </Col>
                                  <Col>
                                      <Input type={"text"} className={"theme-color-input"} value={navColor} onChange={event=>setNavColor(event.target.value)}/>
                                  </Col>
                              </Row>

                          </Col>
                      </Row>
                      <hr className={"theme-horizontal"}/>
                      <div className={"theme-space-top"}>
                          <Row>
                              <Col span={19}>
                                  <span className={"theme-menu-normal"} >Navbar Fixed</span>
                              </Col>
                              <Col span={5}>
                                  <Switch size={"small"} defaultChecked checkedChildren={<CheckOutlined />}unCheckedChildren={<CloseOutlined />} onChange={(checked)=>{
                                      if(checked){
                                          setNavFixed("fixed")
                                      }else{
                                          setNavFixed("initial")
                                      }
                                  }}/>
                              </Col>
                          </Row>
                      </div>
                      <hr className={"theme-horizontal"}/>
                      <div className={"theme-space-top"}>
                          <Row>
                              <Col span={19}>
                                  <span className={"theme-menu-normal"} >Light / Dark</span>
                              </Col>
                              <Col span={5}>
                                  <Switch size={"small"} checkedChildren={<CheckOutlined />}unCheckedChildren={<CloseOutlined />} />
                              </Col>
                          </Row>
                      </div>
                      {/*<hr className={"theme-horizontal"}/>*/}
                      {/*<div className={"theme-space-top"}>*/}
                      {/*    <Row>*/}
                      {/*        <Col span={12}>*/}
                      {/*            <Button type={"primary"} className={"theme-btn-save"}>Save Changes</Button>*/}
                      {/*        </Col>*/}
                      {/*        <Col span={12}>*/}
                      {/*            <Button className={"theme-btn-default"}>Default</Button>*/}
                      {/*        </Col>*/}
                      {/*    </Row>*/}
                      {/*</div>*/}
                  </div>
              </div>
          </Drawer>

          <Layout>
          <div className={"header-menu-item-window"} style={{position:navFixed,zIndex:1}}>
              <Row>
                  <Col span={9}>
                      <div className={"header-main-logo-search-div"}>
                          <Row>
                              <Col>
                                  <Link href="/home" >
                                    <img src={"logo.png"} width={40} height={"auto"}/>
                                  </Link>
                              </Col>
                              <Col>
                                  <Link href="/home" className="text-dark font-bold">
                                    <h1>BK CiTy</h1>
                                  </Link>
                              </Col>
                              <Col>
                                  <div className={"header-search-div"}>
                                      <Input placeholder={"Search"} className={"header-search"} prefix={<SearchOutlined />} allowClear bordered={false}/>
                                  </div>
                              </Col>
                          </Row>
                      </div>
                  </Col>
                  <Col span={12}>
                          <List
                              grid={{ gutter: 20}}
                              dataSource={menuList}
                              split={false}
                              renderItem={item => (
                                  <List.Item>
                                      {popover(item.content,item.place,item.navigationText,item.icon)}
                                  </List.Item>
                              )}
                          />
                  </Col>
                  <Col span={3}>
                      <Row gutter={15}>
                          <Col>
                              <div>
                                  <Badge count={bajCount} size={"small"} className={"header-badge-noti"} style={{backgroundColor:bajColorChoose(bajCount)}} >
                                      <Popover content={noti} placement={"bottomRight"} overlayStyle={{position:"fixed",zIndex:1}} overlayInnerStyle={{borderRadius:10,opacity:"100%"}} arrowPointAtCenter>
                                          <Avatar className={"header-noti-avatar"} shape="circle" size={22} style={{backgroundColor:navColor}} onClick={()=>{
                                              setBajCount(bajCount+1)
                                          }}>
                                              <BellFilled />
                                          </Avatar>
                                      </Popover>
                                  </Badge>
                              </div>
                          </Col>
                          {/*<Col>*/}
                          {/*    <Badge count={langSelsect} size={"small"} className={"header-lang-icon-badge"} >*/}
                          {/*        <Popover content={translate} placement={"bottomRight"} overlayStyle={{position:"fixed",zIndex:1}} overlayInnerStyle={{borderRadius:10,opacity:"90%"}} arrowPointAtCenter>*/}
                          {/*           <img src="https://img.icons8.com/ios-glyphs/480/null/google-translate.png" width={22} height={22} className={"header-lang-icon"}/>*/}
                          {/*        </Popover>*/}
                          {/*    </Badge>*/}
                          {/*</Col>*/}
                          <Col>
                              {<SettingFilled onClick={showDrawer} style={{fontSize:18}}/>}
                          </Col>
                          <Col>
                              <div>
                                  <Popover content={user} placement={"bottomRight"} overlayStyle={{position:"fixed",zIndex:1}} overlayInnerStyle={{borderRadius:10,opacity:"95%"}} arrowPointAtCenter>
                                      <Avatar className={"header-user-avatar"} src={"logo.png"}/>
                                  </Popover>
                              </div>
                          </Col>
                      </Row>
                  </Col>
              </Row>
          </div>
          </Layout>

      </>
    )
}