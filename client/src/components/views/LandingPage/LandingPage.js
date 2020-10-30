import React,{useState,useEffect} from 'react'
import { FaCode } from "react-icons/fa";
import profile from '../common/profile.png'
import {Row,Typography,Avatar,Col,Card} from 'antd';
import Axios from 'axios';
import { UserOutlined,GithubFilled,LinkedinFilled,MailFilled} from '@ant-design/icons';
import WIWI from '../common/WIWI.jpg';
import moment from 'moment'
import MainImage from '../common/MainImage.jpg'
import '../../../index.css';
const {Title} = Typography;
const {Meta} = Card;
function LandingPage() {


    const [Video, setVideo] = useState([])

    useEffect(() => {
      Axios.get('/api/video/getVideo')
        .then(response => {
            if(response.data.success){
                setVideo(response.data.video)
            }else{
                alert('fail to get video')
            }
        })
    }, [])

  
    const renderCards = Video.map((video,index) => {
        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);
        return <Col lg={8} md={12} xs={24}>
        <div key={index} style={{ position: 'relative' }}>
            <a href={`/video/${video._id}`} >
                <img style={{ width: '100%' }} alt="thumbnail" src={`http://localhost:5000/${video.thumbnail}`} />
                <div className="duration">
                    <span>{minutes} : {seconds}</span>
                </div>
            </a>
        </div>
        <br />

        <Meta
            avatar={
                <Avatar 
                style={{backgroundColor: '#87d068'}}
                icon={<UserOutlined/>}
                />
            }
            title={video.title}
        />
        <span>{video.writer.name} </span><br />
        <span style={{ marginLeft: '3rem' }}> {video.views}</span>
        - <span> {moment(video.createdAt).format("MMM Do YY")} </span>
    </Col>
    })

    return (
        <div>

        {/*Main Image*/}
                 <div style={   {background: `linear-gradient(to bottom, rgba(0,0,0,0)39%, rgba(0,0,0,0)41%, rgba(0,0,0,0.65) 100% ),
                                url('${MainImage}'), #1c1c1c`,
                                height: '700px',
                                backgroundSize: '100%, cover',
                                backgroundPosition: 'center, center',
                                width: '100%',
                                position: 'relative'}}>

                    <div style={{padding: '3rem',marginLeft:'3rem'}}>
                    <img src={profile} alt="profile"/>
                    </div>

                    <div className="description">
                        <h1>Kihun Kim</h1>
                        <p>Coding Enthusiast</p>
                            <a href="https://github.com/deutschkihun" target="_blank">
                            <Avatar
                                style={{backgroundColor: '#1c1c1c'}}  
                                icon={<GithubFilled />}
                            /> </a>

                            <a href="https://www.linkedin.com/in/kihun-kim-b35b73174/" target="_blank">
                            <Avatar
                                style={{backgroundColor: '#1c1c1c'}}  
                                icon={<LinkedinFilled />}
                            /> </a>

                            <a href="mailto:deutschkihun@gmail.com">
                            <Avatar
                                style={{backgroundColor: '#1c1c1c'}}  
                                icon={<MailFilled />}
                            /></a>
                    </div>
                </div>  
                
                {/* life motto*/}
                <div className="app">
                    <p><FaCode style={{ fontSize: '1.5rem' }} /> LIFE MOTTO <FaCode style={{ fontSize: '1.5rem' }} /></p>
                    <span>YOUR EFFORT WON'T BETRAY YOU.... NEVER GIVE UP!</span>
                </div>

               <div className="title">
                <Title level={2}>INTRODUCTION VIDEO</Title>
                <hr />

                {/*video*/}
                <Row gutter={[16,16]}>
                    {renderCards}
                </Row>
                <br/>
                <br/>
                <br/>

                <Title level={2} style={{fontFamily:'Comic Sans MS, Comic Sans, cursive'}}>3 IMPORTANT THINGS ABOUT ME</Title>
                <hr/>
                <br/>
                <br/>
                <br/>

                <div className="keypoint">
                    <img src={WIWI} alt="industrial engineering icon"/>
                        <h2>Industrial engineering student</h2>
                        <p>Industfwefwfwefwefwefwefwefwefwefiria</p>
                    </div>
                </div>

               

            <br/><br/><br/><br/><br/><br/><br/>

            </div>
          
    )
}


export default LandingPage
