
import React from 'react';
import { CardGroup , Card, Row, Col, CardHeader, CardText, UncontrolledCarousel } from 'reactstrap';
// import Footer from './components/Footer';
import Typewriter from 'typewriter-effect';
// import Form from './EmailForm/Form';
// import ThankYou from './EmailForm/ThankYou';

const items = [
    {
        src: "assets/images/coffee_mice.jpg",
        altText: 'Coffee and Chatting',
        caption: '@ahmet_bolat',
        header: 'Coffee and Chatting',
        key: '1'
    },
    {
         src: "assets/images/salad_people.jpg",
         altText: 'Howling in the jungle',
         caption: '@ahmet_bolat',
         header: 'Howling in the jungle',
         key: '2'
    },
    {
        src: "assets/images/trace.jpg",
        altText: 'Following the trace',
        caption: '@ahmet_bolat',
        header: 'Following the trace',
        key: '3'
    }
  ];


const Home = () => {

    return (
        <React.Fragment>
        <CardGroup>
            <Row>
                <Col sm="6">
                    <div className="d-flex justify-content-center p-5">
                        <img src="assets/images/ahmet_bolat.jpg" className="img-fluid img-thumbnail rounded-circle w-100" 
                        alt="Ahmet Bolat"/>
                    </div>    
                </Col>
                {/* <!--Start of the corousel--> */}
                <Col sm="6">
                    <Card className="m-5">
                        <UncontrolledCarousel items={items}  />
                    </Card>
                </Col>
            </Row>
            {/* <!--End of the corousel--> */}

            <Card style={{fontSize:"1.5rem", backgroundColor:"#F3F8F1"}}  body>  
            
                <CardHeader tag="h1" className="text-center py-2" style={{fontSize:"1.5rem", backgroundColor:"#B4F1FD"}}> 
                    <Typewriter options={{strings:['Hello,', 'Welcome to My Page.'] , autoStart: true, loop: true,}}/>
                </CardHeader>
                    <CardText className="lead" style={{textAlign:"justify", textIndent: "2em"}}>
                        I have been living, in Hannover, since the beginning of my previous job. After working for 7 years in a bank, I left so-called comfort zone and put 
                        up a challenge of dealing for my future career more intensively with I&T in which i had always ambition before. 
                        Since then, in pursuing an occupation or better of saying exploring myself, I have been engaged mainly
                        in "Web Development" and "Data Science" and developing with Python, Javascript etc. further my programming skills. Learning never ends in this branch. 
                        Therefore, I&T suits exactly what I am looking for as a challenge when I started this journey. As a person never getting tired of learning,
                         I have been doing <span><a href="/resume#certificates_awards" className="text-decoration-underline text-danger">certificates</a></span>, especially in 
                        <span>&nbsp;<a href="https://www.coursera.org/" className="text-decoration-underline text-danger">Coursera</a></span> and utilizing
                        online resources as much as possible. You can find some of the projects i did in my
                        <span> <a href="https://www.kaggle.com/kurban81/code?scroll=true" className="text-decoration-underline text-danger">kaggle</a></span> and 
                         <span>&nbsp;<a href="https://github.com/bolatah" className="text-decoration-underline text-danger">GitHub</a></span>&nbsp;
                         profiles.  As a further step, I set up this personal website in which you can find
                        interesting things about me behind of a typical <span><a href="/resume" className="text-decoration-underline text-danger">resume</a></span> page and also prepared a 
                        &nbsp;<span><a href="/masterthesis" className="text-decoration-underline text-danger">dashboard</a></span> using many "Data Analysis" tools 
                        about my master thesis when i was in Jena-Germany . 
                        I hope you enjoy getting to know me!
                    </CardText>
              
            </Card>
                
    </CardGroup> 
</React.Fragment>
        )
    
}

export default Home;