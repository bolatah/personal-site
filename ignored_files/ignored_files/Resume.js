import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {CardGroup, Card, CardHeader, CardText} from 'reactstrap';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

 function Contact () {
    return (
        <div>
            <Card style={{lineHeight: "3", marginBottom: "38rem"}}>
                <CardHeader> Contact </CardHeader>
                    <CardText>
                        Name:		Ahmet Bolat<br/>                                                          
                        Phone:	 	+4901776108498 <br/> 
                        E-Mail: 		bolatah@outlook.com   <br/>  
                        Date of Birth:	23.01.1986 <br/> 
                        Place of Birth:	Bakirköy/Istanbul <br/>                                                                         
                    </CardText> 
                </Card>
        </div>
    )
};

function WorkExperience () {
    return (
        <div>
            <Card style={{lineHeight: "3", marginBottom: "38rem"}}>
                <CardHeader> Contact </CardHeader>
                    <CardText>
                    <hr className="m-0"/>
                    <h2 className="captionResume">Work Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Bank Officer</h3>
                            <div className="subheading mb-3">Ziraatbank International AG Hannover-Germany</div>
                            <p className="col-12 w-75"> Marketing of all banking products, analysis of loan requests, assistance to commercial and private clients in all banking processes, recommendation of potential loans and preparation of the documentation of approved loans. </p>
                        </div>
                        <div className="flex-shrink-0  d-none d-md-block" >
                            <span className="text-white text-decoration-underline">November 2012 - November 2019</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0" style={{marginTop:"5rem"}}>European Voluntary Service</h3>
                            <div className="subheading mb-3">Montessori Kindergarten Jena-Germany</div>
                            <p className="lead"> Participating in one year project of <abbr title="European Voluntary Service">
                            <Link to="https://europa.eu/youth/EU/voluntary-activities/european-voluntary-service_en">EVS</Link></abbr> related to the children. </p>
                        </div>
                        <div className="flex-shrink-0" style={{marginTop:"5rem"}}>
                            <span className="text-white text-decoration-underline"> June 2009 - June 2010</span>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Assistant Incentive Tourism</h3>
                            <div className="subheading mb-3">Tekser Tourism Istanbul-Turkey</div>
                            <p className="lead"> Assisting in the planning and organizing of the incentive tours.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-white text-decoration-underline">July 2008 - November 2008</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Internship in the Finance Department</h3>
                            <div className="subheading mb-3">Onurairs Istanbul-Turkey</div>
                            <p className="lead"> Supporting the preparation of the invoices.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-white text-decoration-underline">July 2006 - October 2006</span></div>
                    </div>
                    <hr className="m-0" />                                                              
                    </CardText> 
                </Card>
        </div>
    )
};

function Education () {
    return (
        <div>
        <h2 className="captionResume">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">
                        <Link to="https://www.alfatraining.de/">Alfatraining Bildungszentrum GmbH</Link>
                    </h3>
                    <h4>Hannover-Germany </h4>
                    <div className="subheading mb-3">Advanced Vocational Education</div>
                        <ul className="lead">
                            <li>Vocational-German-Language for Specialists and Executives</li>   
                            <li>Basics of Controlling</li>   
                            <li>SAP Controlling with additional qualification in Financial Accounting incl. SAP Controlling Certification</li>   
                        </ul>
                </div>
                <div className="flex-shrink-0"><span className="text-white text-decoration-underline">March 2020 - July 2020</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">
                        <Link to="https://www.comcave.de/">Comcave.Collage GmbH</Link>
                    </h3>
                    <h4>Hannover-Germany</h4>
                    <div className="subheading mb-3">Advanced Vocational Education</div>
                        <ul className="lead">
                            <li>SAP Foundation Level incl. SAP User Certification</li>   
                            <li>SAP External Accounting incl. SAP FI CertificationS</li>    
                        </ul>
                </div>
                <div className="flex-shrink-0"><span className="text-white text-decoration-underline"> December 2019 - February 2020</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                    <h3 className="mb-0">
                        <Link to="https://www.wiwi.uni-jena.de/en">Friedrich Schiller University </Link>
                    </h3>
                    <h4>Jena-Germany</h4>
                    <div className="subheading mb-3"> Master's Degree in Economics (M.Sc.)</div>
                    <p className="lead">Title of  thesis: “Innovation, Technical Change and International Trade: Turkish Automotive Industry" Supervisor : Prof. Uwe Cantner  </p>
                </div>
                <div className="flex-shrink-0"><span className="text-white text-decoration-underline">October 2010 - November 2011</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                    <h3 className="mb-0">
                    <Link to="https://www.istanbul.edu.tr/en/_">Istanbul University Istanbul-Turkey </Link>
                    </h3>
                    <h4>Istanbul-Turkey</h4>
                    <div className="subheading mb-3">Bachelor's Degree in Economics (B.Sc.)</div>
                </div>
                <div className="flex-shrink-0"><span className="text-white text-decoration-underline">October 2004 - July 2008</span></div>
            </div>
            <hr className="m-0" /> 
        </div>
    )
};

function CerAw() {
    return (
        <div>
              <h2 className="captionResume">Certificates & Awards</h2>
                <ul className="lead">
                
                    <li><span>Google IT Support Professional Certificate</span>
                        <span className="italic">Google,</span>
                        <span className="underline">E-Certificate-Coursera-Present</span>
                    </li>

                    <li><span>Building Web Applications in PHP,</span>
                        <span className="italic">University of Michigan,</span>
                        <span className="underline">E-Certificate-Coursera-18.12.2020</span>
                    </li>

                    <li><span>What is Data Science?,</span>
                        <span className="italic">IBM,</span>
                        <span className="underline">E-Certificate-Coursera-25.10.2020</span>
                    </li>

                    <li><span>Programming Foundations with JavaScript, HTML and CSS,</span>
                        <span className="italic">Duke University,</span>
                        <span className="underline">E-Certificate-Coursera-25.09.2020</span>
                    </li>
            
                    <li><span>SAP Controlling Certification,</span>
                        <span className="italic">Alfta Training Bildungszentrum GmbH,</span>
                        <span className="underline">Hannover-24.07.2020</span>
                    </li>
            
                    <li><span>Test WiDaf–German as a Foreign Language in Business-Language Level C2,</span>
                        <span className="italic">AHK AHK German-French Chamber of Commerce and Industry,</span>
                        <span className="underline">Paris-31.01.2020</span>
                    </li>
            
                    <li><span>Interactivity with JavaScript, </span>
                        <span className="italic">University of Michigan,</span>
                        <span className="underline">E-Certificate-Coursera-31.07.2020</span>
                    </li>
            
                    <li><span>Responsive Website Basics with HTML ,CSS and Javascript, </span>
                        <span className="italic">University of Michigan,</span>
                        <span className="underline">E-Certificate-Coursera-09.06.2020</span>
                    </li>
            
                    <li><span>CSS3,</span>
                        <span className="italic">University of Michigan,</span>
                        <span className="underline">E-Certificate-Coursera-05.06.2020</span>
                    </li>
            
                    <li><span>HTML5,</span>
                        <span className="italic">University of Michigan,</span>
                        <span className="underline">E-Certificate-Coursera-27.04.2020</span>
                    </li>
            
                    <li><span>Basics of Controlling, </span>
                        <span className="italic">Alfta Training Bildungszentrum GmbH,</span>
                        <span className="underline">Hannover-29.05.2020</span>
                    </li>
            
                    <li><span>Vocational-German- Language for Specialists and Executives, </span>
                        <span className="italic">Alfta Training Bildungszentrum GmbH,</span>
                        <span className="underline">Hannover-30.04.2020</span>
                    </li>

                    <li><span>SAP Financials Certification, </span>
                        <span className="italic">Comcave Collage GmbH,</span>
                        <span className="underline">Hannover-20.02.2020</span>
                    </li>

                    <li><span>SAP Foundation Level Certification, </span>
                        <span className="italic">Comcave Collage GmbH,</span>
                    <span className="underline">Hannover-22.01.2020</span>
                    </li>

                    <li><span>Introduction to Target-Setting Meeting </span>
                    <span className="italic">Frankfurt School of Finance & Management Bankakademie</span>
                    <span className="underline">Frankfurt-11.06.2015</span>
                    </li>

                    <li><span>Financial Statement Analysis </span>
                    <span className="italic">Ziraatbank International AG / Prestij Eğitim,</span>
                    <span className="underline">Frankfurt-25.10.2014</span>
                    </li>

                    <li><span>Excellence-Award in Higher Education</span>
                    <span className="italic"><abbr title="Turkish Education Foundation"><a href="http://english.tev.org.tr/donations/default/DONATIONS/139/0/0">TEV</a></abbr> </span>
                    <span className="underline">Istanbul-2007</span>
                    </li>
                </ul>
                <hr className="m-0" />  
        </div>
    )
};

function LangIT() {
    return (
        <div>
             <h2 className="captionResume">Language and I&T Skills</h2>
                <div className="container-fluid d-flex flex-row m-0">
                    <div className="row">
                    <div className="col-6">
                    <h3>Language</h3>
                    <ul className="lead">  
                        <li>Fluent in speaking and writing-<b>English</b></li>  
                        <li>Fluent in speaking and writing-<b>German</b></li> 
                        <li>Basic Knowledge-<b>Spanish</b></li> 
                        <li>Basic Knowledge-<b>Japanese</b></li>
                        <li>Native Speaker-<b>Turkish</b></li>
                    </ul>
                    </div>
                    <div className="col-6">
                    <h3>I&T Skills</h3>
                    <ul className="lead">   
                        <li><b>SAP FI-CO</b></li>  
                        <li><b>MS and Linux Operating Systems</b></li> 
                        <li><b>Office Softwares <br/> 
                        (Spreadsheet, Word Processor and Presentation Softwares)</b></li> 
                        <li><b>HTML5, CSS3</b></li>
                        <li><b>Python</b></li>
                        <li>Basic Knowledge-<b>PHP and JavaScript</b></li>
                    </ul>
                    </div>
                </div>
                </div>
                <hr className="m-0" />
        </div>
    )
}; 
function VerticalNavBar() {
return (
    <div className="d-flex flex-colum"> 
<nav className="navbar navbar-expand-lg navbar-dark col-2" id="sideNav">
    <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column">
            <li className="nav-item pb-4">
                <Link to="/resume/work_experience" className="btn btn-secondary fw-bold border-white bg-white text-dark" >Work Experience</Link>
            </li>
        <li className="nav-item pb-4">
            <Link  to="/resume/education" className="btn btn-secondary fw-bold border-white bg-white text-dark w-100">Education</Link>
        </li>
        <li className="nav-item pb-4">
            <Link  to="/resume/certificates_awards" className="btn btn-secondary fw-bold border-white bg-white text-dark"> Certificates & Awards </Link>
        </li>
        <li className="nav-itemp b-4">
            <Link to="/resume/lang_IT" className="btn btn-secondary fw-bold border-white bg-white text-dark" >Language and I&T Skills</Link>
        </li>
        </ul>
    </div>
</nav>
</div> 
)
};
 

class Resume extends Component {
    render() {
        return (
                <div>
                    <Router>
                        <VerticalNavBar/>
                        <Switch>
                            <Route exact path="/resume"> <Resume/></Route>
                            <Route path="/resume/contact"><Contact/></Route> 
                            <Route path ="/resume/work_experience"><WorkExperience/></Route> 
                            <Route path="/resume/education"> <Education/> </Route>
                            <Route path="/resume/certificates_awards"><CerAw/></Route>
                            <Route path="/resume/lang_IT"> <LangIT/> </Route>
                            <Redirect to="/resume" />
                        </Switch>
                    </Router>
                </div>
        )              
    }
};

export default Resume;
