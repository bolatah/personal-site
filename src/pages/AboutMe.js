
import React, { Component } from 'react';
import { CardGroup , Card, CardHeader, CardBody, List, 
        ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import {Link} from 'react-router-dom';  


class AboutMe extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="d-flex flex-colum"> {/* <!--Start of the navbar --> */}
                    <nav  className="navbar navbar-expand-sm navbar-dark col-2 mx-2" id="sideNav">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column">
                                <li className="nav-item pb-4">
                                    <a className="btn btn-secondary fw-bold text-dark w-100" style={{backgroundColor:"#B2E0FC"}} href="#contact">
                                        Contact</a>
                                </li>
                                <li className="nav-item pb-4">
                                    <a href="#work_experience" className="btn btn-secondary fw-bold text-dark" style={{backgroundColor:"#B2E0FC"}}>
                                        Work Experience</a>
                                </li>
                                <li className="nav-item pb-4">
                                    <a className="btn btn-secondary fw-bold text-dark w-100" href="#education" style={{backgroundColor:"#B2E0FC"}}>
                                        Education</a>
                                </li>
                                <li className="nav-item pb-4">
                                    <a className="btn btn-secondary fw-bold text-dark" href="#certificates_awards" style={{backgroundColor:"#B2E0FC"}}>
                                        Certificates & Awards</a>
                                </li>
                                <li className="nav-itemp b-4">
                                    <a className="btn btn-secondary fw-bold text-dark" href="#language_IT"style={{backgroundColor:"#B2E0FC"}}>
                                        Language and IT Skills</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>   {/* <!--End of the navbar --> */}

                <div className="container-fluid p-5 col-10"> 

               {/* <h1 className="text-center my-2" style={{fontSize:"2rem", backgroundColor:"#B4F1FD" }}> Resume </h1> */}
                <section id="contact" style={{lineHeight: "3", marginBottom: "45rem", textAlign:"center"}}>
                    <p className="lead" style={{textAlign:"center"}}>
                        Ahmet Bolat<br/>                                                          
                        +49 0176 55408498 <br/> 
                        bolatah@bolatah.com   <br/>  
                    </p>
                    <Link 
                        className="btn btn-md"
                        // className="btn btn-secondary fw-bold text-dark w-100" 
                        style={{backgroundColor:"#F8A3BA"}}
                        role="button"
                        to="/contactMe"
                    > 
                        Contact Me
                    </Link>
                </section>
                
                <section id="work_experience">
                <Card>
                    <CardHeader style={{backgroundColor:"#B2E0FC", textAlign:"center"}}>Work Experience</CardHeader>
                        <CardBody>
                        <div className="d-flex flex-column flex-md-row justify-content-between m-5">
                            <div className="flex-grow-1">
                                <p className="mb-0">Bank Officer / Ziraatbank International AG Hannover-Germany</p>
                                
                                <p className="lead" style={{fontSize:"1rem"}}> Marketing of all banking products, analysis of loan requests, assistance to commercial and private clients in all banking processes, recommendation of potential loans and preparation of the documentation of approved loans. </p>
                            </div>
                            <div className="flex-shrink-0   d-md-block" >
                                <span className="text-decoration-underline">November 2012 - November 2019</span>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between m-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0" style={{marginTop:"5rem"}}>European Voluntary Service / Montessori Kindergarten Jena-Germany</h3>
                                <p className="lead" style={{fontSize:"1rem"}}> Participating in one year project of <abbr title="European Voluntary Service">
                                <a className="text-decoration-underline"href="https://europa.eu/youth/EU/voluntary-activities/european-voluntary-service_en" >EVS</a></abbr> related to the children. </p>
                            </div>
                            <div className="flex-shrink-0" style={{marginTop:"5rem"}}>
                                <span className="text-decoration-underline"> June 2009 - June 2010</span>
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between m-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Assistant Incentive Tourism / Tekser Tourism Istanbul-Turkey</h3>
                                <p className="lead" style={{fontSize:"1rem"}}> Assisting in the planning and organizing of the incentive tours.</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-decoration-underline">July 2008 - November 2008</span></div>
                        </div>
                        <div className="d-flex flex-column flex-md-row justify-content-between m-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">Internship in the Finance Department / Onurairs Istanbul-Turkey</h3>
                                <p className="lead" style={{fontSize:"1rem"}}> Supporting the preparation of the invoices.</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-decoration-underline">July 2006 - October 2006</span></div>
                          </div>
                        </CardBody>
                    </Card>
                    </section>

                    <section id="education">
                    <Card>
                        <CardHeader style={{backgroundColor:"#B2E0FC", textAlign:"center"}}>Education</CardHeader>
                          <CardBody>

                            <div className="d-flex flex-column flex-md-row justify-content-between m-5">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">
                                        <a className="text-decoration-underline" href="https://www.wiwi.uni-jena.de/en">Friedrich Schiller University / Jena-Germany</a>
                                    </h3>
                                    <div className="subheading mb-3"> Master's Degree in Economics (M.Sc.)</div>
                                    <p className="lead" style={{fontSize:"1rem"}}>Title of  thesis: “Innovation, Technical Change and International Trade: Turkish Automotive Industry" Supervisor : Prof. Uwe Cantner  </p>
                                </div>
                                <div className="flex-shrink-0"><span className="text-decoration-underline">October 2010 - November 2011</span></div>
                            </div>
                            <div className="d-flex flex-column flex-md-row justify-content-between m-5">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">
                                    <a className="text-decoration-underline" href="https://www.istanbul.edu.tr/en/">Istanbul University Istanbul-Turkey </a>
                                    </h3>
                                    <div className="subheading mb-3">Bachelor's Degree in Economics (B.Sc.)</div>
                                </div>
                                <div className="flex-shrink-0"><span className="text-decoration-underline">October 2004 - July 2008</span></div>
                            </div>
                            <div className="d-flex flex-column flex-md-row justify-content-between m-5">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">
                                        <a className="text-decoration-underline" href="https://www.alfatraining.de/">Alfatraining Bildungszentrum GmbH / Hannover-Germany</a>
                                    </h3>
                                    <div className="subheading mb-3">Advanced Vocational Education</div>
                                        <ol className="lead" style={{fontSize:"1rem"}}>
                                            <li>Vocational-German-Language for Specialists and Executives</li>   
                                            <li>Basics of Controlling</li>   
                                            <li>SAP Controlling with additional qualification in Financial Accounting incl. SAP Controlling Certification</li>   
                                        </ol>
                                </div>
                                <div className="flex-shrink-0"><span className="text-decoration-underline">March 2020 - July 2020</span></div>
                            </div>
                         </CardBody>   
                      </Card> 
                    </section>

                <section id="certificates_awards">
                <Card> 
                    <CardHeader style={{backgroundColor:"#B2E0FC", textAlign:"center"}}>Certificates & Awards</CardHeader>
                        <CardBody>  
                            
                            <ListGroup className="m-2">

                                <ListGroupItem >
                                    <ListGroupItemHeading >IBM Data Science Professional Certificate</ListGroupItemHeading>
                                    <ListGroupItemText>
                                    <span className="italic ">IBM / Coursera</span>
                                    </ListGroupItemText>
                                    <ListGroupItemText className="text-decoration-underline italic text-danger" tag="a" href="https://www.credly.com/badges/b77d747a-0362-486c-b701-c7d5ea30f955">
                                    <span >See credential</span>
                                    </ListGroupItemText>
                                </ListGroupItem>

                                <ListGroupItem >
                                    <ListGroupItemHeading >Machine Learning with Python</ListGroupItemHeading>
                                    <ListGroupItemText>
                                    <span className="italic ">IBM / Coursera</span>
                                    </ListGroupItemText>
                                    <ListGroupItemText className="text-decoration-underline italic text-danger" tag="a" href="https://www.credly.com/earner/earned/badge/a128578d-ebc8-4fcd-b801-ef3011c37d60">
                                    <span >See credential</span>
                                    </ListGroupItemText>
                                </ListGroupItem>

                                <ListGroupItem >
                                    <ListGroupItemHeading >Google IT Support Professional Certificate</ListGroupItemHeading>
                                    <ListGroupItemText>
                                    <span className="italic ">Google / Coursera</span>
                                    </ListGroupItemText>
                                    <ListGroupItemText className="text-decoration-underline italic text-danger" tag="a" href="https://www.credly.com/earner/earned/badge/e0f3d596-1ebe-4692-a99f-197d9b4ca2b3">
                                    <span >See credential</span>
                                    </ListGroupItemText>
                                </ListGroupItem>
                         
                                <ListGroupItem >
                                    <ListGroupItemHeading >Using Python to Interact with the Operating
                                    System</ListGroupItemHeading>
                                    <ListGroupItemText>
                                    <span className="italic">Google / Coursera</span>
                                    </ListGroupItemText>
                                    <ListGroupItemText className="text-decoration-underline italic text-danger" tag="a" href="https://www.coursera.org/account/accomplishments/certificate/9VC93QWVJGUE">
                                    <span >See credential</span>
                                    </ListGroupItemText>
                                </ListGroupItem>
                               
                                <ListGroupItem >
                                    <ListGroupItemHeading> Server-side Development with NodeJS, Express and MongoDB</ListGroupItemHeading>
                                    <ListGroupItemText>
                                    <span className="italic">  The Hong Kong University of Science and Technology / Coursera</span>
                                    </ListGroupItemText>
                                    <ListGroupItemText className="text-decoration-underline italic text-danger" tag="a" href="https://www.coursera.org/account/accomplishments/certificate/PVM9F9DS7CY4">
                                    <span >See credential</span>
                                    </ListGroupItemText>
                                </ListGroupItem>

                                <ListGroupItem >
                                    <ListGroupItemHeading>   Front-End Web Development with React</ListGroupItemHeading>
                                    <ListGroupItemText>
                                    <span className="italic"> The Hong Kong University of Science and Technology / Coursera</span>
                                    </ListGroupItemText>
                                    <ListGroupItemText className="text-decoration-underline italic text-danger" tag="a" href="https://www.coursera.org/account/accomplishments/certificate/K7JRRWY9ZLSV">
                                    <span >See credential</span>
                                    </ListGroupItemText>
                                </ListGroupItem>
                    
                                <ListGroupItem >
                                    <ListGroupItemHeading> Test WiDAF - German as a Foreign Language in International Business</ListGroupItemHeading>
                                    <ListGroupItemText>
                                    <span className="italic">C2 - Common European Framework of Reference for Languages</span>
                                    </ListGroupItemText>
                                    <ListGroupItemText>
                                    <span className="italic">AHK Frankreich / The German Chambers of Commerce Abroad / Paris-31.07.2020</span>
                                    </ListGroupItemText>
                                    <ListGroupItemText className="text-decoration-underline italic text-danger" tag="a" href="https://www.francoallemand.com/dienstleistungen/aus-und-weiterbildung/test-widaf">
                                    <span >See for more information</span>
                                    </ListGroupItemText>
                                </ListGroupItem>                              

                                <ListGroupItem >
                                    <ListGroupItemHeading> SAP Financials & Controlling </ListGroupItemHeading>
                                    <ListGroupItemText>
                                    <span className="italic">Alfatraining Bildungszentrum GmbH / Hannover-July.2020</span>
                                    </ListGroupItemText>
                                </ListGroupItem>

                                <ListGroupItem>
                                    <ListGroupItemHeading >TEV Excellence-Award in Higher Education</ListGroupItemHeading>
                                    <ListGroupItemText>
                                    <span>Turkish Education Foundation / Istanbul-2007</span>
                                    </ListGroupItemText>
                                    <ListGroupItemText className="text-decoration-underline italic text-danger" tag="a" href="http://english.tev.org.tr/donations/default/DONATIONS/139/0/0">
                                    <span >See for more information</span>
                                    </ListGroupItemText>
                                </ListGroupItem>                         
                            </ListGroup>           
                    </CardBody>
                  </Card>  
                </section>

                <section id="language_IT">

                    <CardGroup >
                        <Card className="col-md-6">
                        <CardHeader style={{backgroundColor:"#B2E0FC", textAlign:"center"}} >Language</CardHeader>
                            <List  style={{ padding:"2rem", fontSize:"1rem"}}>  
                                <li>Fluent in speaking and writing-<b>English</b></li>  
                                <li>Fluent in speaking and writing-<b>German</b></li> 
                                <li>Basic Knowledge-<b>Spanish</b></li> 
                                <li>Basic Knowledge-<b>Japanese</b></li>
                                <li>Native Speaker-<b>Turkish</b></li>
                            </List>
                        </Card>
                        <Card className="col-md-6">
                        <CardHeader style={{backgroundColor:"#B2E0FC", textAlign:"center"}}>IT Skills</CardHeader>
                            <List style={{ padding:"2rem",fontSize:"1rem"}}>  
                                <li>Python, Python Data Science (pandas, Numpy, Matplotlib, seaborn, Dash etc.)</li>
                                <li>JavaScript, React.js, TypeScript</li>
                                <li>SQL</li>
                                <li>HTML5, CSS3</li>
                                <li>Spreadsheet, Word Processor and Presentation Softwares </li>
                                <li>SAP FI-CO</li>                         
                            </List>
                        </Card>
                    </CardGroup>
                </section>
                </div>

            </React.Fragment>
                    )
    }
};

export default AboutMe;
