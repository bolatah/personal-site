import React, {useRef} from "react";
import * as d3 from "d3";
import * as venn from "venn.js";
import Xarrow from "react-xarrows";
import { Toast, ToastHeader, ToastBody,  Button, UncontrolledPopover, Card, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faDivide, faGreaterThanEqual, faEquals, faGreaterThan, faLessThan} from '@fortawesome/free-solid-svg-icons';

var sets = [
  {
    size: 50,
    sets: ["Technological Specialisation"],
    contenta: "Revealed Technological Advantage (RTA)",
    contentb: ""
  },
  {
    size: 50,
    sets: ["Trade Specialisation"],
    contenta: "Revealed Comparative Advantage (RCA1)" ,
    contentb: "Revealed Competitive Advantage (RCA2)"
  },
  {
    size: 25,
    sets: [ "Trade Specialisation", "Technological Specialisation"],
    contenta: "Reference Countries",
    contentb: "Time Span"
  },
];

  const largeButtonStyle = {
      backgroundColor: "#ef745f",
      padding: "0.75rem",
      borderRadius: "0.75rem",
      marginRight: "8rem",
      fontSize:"0.75rem"
    };

  const smallButtonstyle = {
    backgroundColor: "#e9c1a0",
    padding: "0.6rem",
    borderRadius: "0.6rem",
    marginRight: "3rem",
    fontSize:"0.6rem",
    marginTop: "0.6rem"
  };
  const boxStyle = {
    border: "grey solid 2px",
    borderRadius: "0.6rem",
    padding: "0.3rem",
    width: "100%",
    margin:"2rem"
  };
   
  function RTA() {
    const box1Ref = useRef(null);
    return (
      <React.Fragment>
        <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
          
          <div ref={box1Ref} style={boxStyle}>
            <p style={{textAlign: "center"}}>Technological Specialisation </p>
          </div>
          <div id="elem2" style={boxStyle}>
          <p style={{textAlign: "center"}}>Relative Patent Share </p>
          </div>
          <div id="elem3" style={boxStyle}>
            <p style={{textAlign: "center"}}> 
              (P <sub>ij </sub> / P <sub>it </sub>)
               <hr style={{borderTop:"0.3rem solid #6495ed"}}/> 
              (P <sub>nj </sub>/P <sub>nt</sub> )
            </p>
          </div>

          <Xarrow start={box1Ref} end="elem2" />
          <Xarrow start="elem2" end="elem3" label= {{start:"RTA"}}  />
        
        </div>

        <div >
          <p style={{marginLeft:"2rem"}}>If RTA <sub>ij</sub>&nbsp;
            <span><FontAwesomeIcon icon={faGreaterThanEqual}/></span> 1, then industry is relatively&nbsp;
            <span><FontAwesomeIcon icon={faEquals}/></span>&nbsp; technology-specialised.
          </p>
          <p style={{marginLeft:"2rem"}}>If RTA <sub>ij</sub>&nbsp;
            <span><FontAwesomeIcon icon={faLessThan}/></span> 1, then industry is relatively&nbsp;
            <span><FontAwesomeIcon icon={faEquals}/></span>&nbsp; non technology-specialised.
          </p>
          <div style={{width:"50%"}}>
            <div style={boxStyle}>
                <li>P = Patent volumes</li>
                <li>i= Given country</li>
                <li>j= Given industry</li>
                <li>n= Reference group of countries</li>
                <li>t= Set of industries</li>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  function RCA1() {
    const box1Ref = useRef(null);
    return (
      <React.Fragment>
        <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
          
          <div ref={box1Ref} style={boxStyle}>
            <p style={{textAlign: "center"}}>Trade Specialisation </p>
          </div>
          <div id="elem4" style={boxStyle}>
          <p style={{textAlign: "center"}}>Relative Export Share </p>
          </div>
          <div id="elem5" style={boxStyle}>
            <p style={{textAlign: "center"}}> 
              (X <sub>ij </sub> / X <sub>it </sub>)
              <hr style={{borderTop:"0.3rem solid #6495ed"}}/>
              (X <sub>nj </sub>/X <sub>nt</sub> )
            </p>
          </div>

          <Xarrow start={box1Ref} end="elem4" />
          <Xarrow start="elem4" end="elem5" label={{start:"RCA1"}} />
        
        </div>
        <div>
          <p style={{marginLeft:"2rem"}}>If RCA1 <sub>ij</sub>&nbsp;
              <span><FontAwesomeIcon icon={faGreaterThanEqual}/></span> 1, then industry is relatively&nbsp;
              <span><FontAwesomeIcon icon={faEquals}/></span>&nbsp; trade-specialised.
          </p>
          <p style={{marginLeft:"2rem"}}>If RCA1 <sub>ij</sub>&nbsp;
              <span><FontAwesomeIcon icon={faLessThan}/></span> 1, then industry is relatively&nbsp;
              <span><FontAwesomeIcon icon={faEquals}/></span>&nbsp; non trade-specialised.
          </p>
          <div style={{ width: "50%"}}>
              <div style={boxStyle}>
                <li>X = Export volumes</li>
                <li>i= Given country</li>
                <li>j= Given industry</li>
                <li>n= Reference group of countries</li>
                <li>t= Set of industries</li>
              </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  function RCA2() {
    const box1Ref = useRef(null);
    return (
      <React.Fragment>
        <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
          
          <div ref={box1Ref} style={boxStyle}>
            <p style={{textAlign: "center"}}>Trade Specialisation </p>
          </div>
          <div id="elem6" style={boxStyle}>
          <p style={{textAlign: "center"}}>Export-Import Ratio </p>
          </div>
          
          <div id="elem7" style={boxStyle}>
     
              <div >
                <div className="Row">
                  Ln&#40;&#40;X <sub>ij </sub> &#47;X<sub>it </sub>&#41;
                  <FontAwesomeIcon icon={faDivide} />
                  &#40;X <sub>nj </sub>&#47;X <sub>nt</sub>&#41;&#41;
                 </div> 
                 <div>
                  <FontAwesomeIcon icon={faMinus} style={{display:"block", margin:"auto"}}/>
                 </div>
                 <div className="Row">
                  Ln&#40;&#40;M <sub>ij </sub> &#47;M <sub>it </sub>&#41;
                  <FontAwesomeIcon icon={faDivide} />
                  &#40;M <sub>nj </sub>&#47;M <sub>nt</sub>&#41;&#41;
                </div>
               </div> 

          </div>

          <Xarrow start={box1Ref} end="elem6" />
          <Xarrow start="elem6" end="elem7" label={{start:"RCA2"}} />
        
        </div>

        <div>
          <p style={{marginLeft:"2rem"}}>If RCA2 <sub>ij</sub>&nbsp;
              <span><FontAwesomeIcon icon={faGreaterThan}/></span> 0, then industry is relatively&nbsp;
              <span><FontAwesomeIcon icon={faEquals}/></span>&nbsp; trade-specialised.
          </p>
          <p style={{marginLeft:"2rem"}}>If RCA2 <sub>ij</sub>&nbsp;
              <span><FontAwesomeIcon icon={faLessThan}/></span> 0, then industry is relatively&nbsp;
              <span><FontAwesomeIcon icon={faEquals}/></span>&nbsp; non trade-specialised.
          </p>
        <div style={{width:"50%"}}>
          <div style={boxStyle}>
              <li>X = Export volumes</li>
              <li>M = Import volumes</li>
              <li>i= Given country</li>
              <li>j= Given industry</li>
              <li>n= Reference group of countries</li>
              <li>t= Set of industries</li>
          </div>
        </div>
        </div>
      </React.Fragment>
    );
  };

  class Venn extends React.Component {
  constructor(props) {
    super(props);
    this.chartView = React.createRef();
  }
  chart = venn.VennDiagram().width(425).height(350);

  componentDidMount() {
    let div = d3.select(this.chartView)
    .style("font-size", "small")
    div.datum(sets).call(this.chart);

    var tooltip = d3
      .select(this.chartView)
      .append("div")
      .attr("class", "venntooltip")
      .style("display", "none")
      
    div
      .selectAll("g")
      .on("mouseover", function (d, i) {
        venn.sortAreas(div, i);
        tooltip
          .transition()
          .duration(400)
          .style("opacity", 1)
          .style("display", "inline")
          tooltip.html(`<ul><li>${i.contenta}</li> <li>${i.contentb}</li></ul>`);
          var selection = d3.select(this).transition("tooltip").duration(400);
          selection
            .select("path")
            .style("stroke-width", 3)
            .style("fill-opacity",  0.1)
            .style("stroke-opacity", 1); 
      })
      .on("mouseout", function (d, i) {
        tooltip.transition().duration(400).style("opacity", 0);
        var selection = d3.select(this).transition("tooltip").duration(400);
        selection
          .select("path")
          .style("stroke-width", 0)
          .style("fill-opacity",  0.25)
          .style("stroke-opacity", 0);
      });
  };
  render() { 
    return (  
      <React.Fragment>
      <div className="d-md-flex justify-content-around">

        <div  ref={(el) => (this.chartView = el)}>
        </div>
          <Card >
            <Row >
              <Col md="4"><Button id="methods" type="button" style={largeButtonStyle}>Methods</Button> </Col>
              <Col md="4"><Button id="reference_countries" type="button" style={largeButtonStyle}>Reference Countries</Button> </Col>
              <Col md="4"> <Button id="time_span" type="button" style={largeButtonStyle}>Time Span</Button>  </Col>
           
              <UncontrolledPopover trigger="hover" placement="bottom-start" target="methods">

                <Row >
                
                    <Col md="4"><Button id="rta" type="button" style={smallButtonstyle} >RTA </Button></Col>
                    <Col md="4"> <Button id="rca1" type="button" style={smallButtonstyle}>RCA1</Button></Col>
                    <Col md="4"> <Button id="rca2" type="button" style={smallButtonstyle}> RCA2</Button></Col>
                          
                </Row>
               
                <UncontrolledPopover trigger="hover" placement="end" positionFixed="True" target="rta" style={{fontSize:"0.75rem"}}>
                  <div className="scrollable">
                    <Toast className="p-3 my-2 rounded" style={{ background: 'white', minWidth:"40rem" }}>
                      <ToastHeader>
                        Revealed Technological Advantage
                      </ToastHeader>
                      <ToastBody>
                        <RTA/>
                      </ToastBody>
                    </Toast>
                   </div> 
                </UncontrolledPopover>
               
                <UncontrolledPopover trigger="hover" placement="end" positionFixed="True" target="rca1" style={{fontSize:"0.75rem"}}>
                <div className="scrollable">
                    <Toast className="p-3 my-2 rounded" style={{ background: 'white', minWidth:"40rem" }}>
                      <ToastHeader>
                        Revealed Comparative Advantage (Balassa)
                      </ToastHeader>
                      <ToastBody>
                        <RCA1/>
                      </ToastBody>
                    </Toast>
                  </div>
                </UncontrolledPopover>  

                <UncontrolledPopover trigger="hover" placement="end" positionFixed="True" target="rca2" style={{fontSize:"0.75rem"}}>
                <div className="scrollable">
                  <Toast className="p-3 my-2 rounded" style={{ background: 'white',  minWidth:"40rem"}}>
                    <ToastHeader>Revealed Competitive Advantage</ToastHeader>
                    <ToastBody>
                      <RCA2/>
                    </ToastBody>
                  </Toast>
                  </div>
                </UncontrolledPopover>  

              </UncontrolledPopover>   
              
              <UncontrolledPopover trigger="hover" placement="bottom-start" target="reference_countries">
                <Button id="eu15" type="button" style={smallButtonstyle} >EU15</Button>
                <Button id="eu12" type="button" style={smallButtonstyle} >EU12</Button>
                <UncontrolledPopover trigger="hover" placement="bottom" target="eu15" style={{fontSize:"0.75rem"}}>
                  <Toast className="p-3 my-2 rounded background-white" style={{ boxStyle }}>       
                      <ToastHeader>EU15</ToastHeader>
                      <ToastBody>
                      Austria, Belgium, Denmark, Finland, France, Germany, Greece, Ireland, Italy, Luxembourg, <br/> Netherlands, Portugal, Spain, Sweden and United Kingdom.
                      </ToastBody>
                    </Toast>
                </UncontrolledPopover> 

                <UncontrolledPopover trigger="hover" placement="bottom" target="eu12" style={{fontSize:"0.75rem"}}>
                    <Toast className="p-3 my-2 rounded" style={{ boxStyle }}>  
                      <ToastHeader>EU12</ToastHeader>
                      <ToastBody>
                      Cyprus, Czechia, Estonia, Hungary, Latvia, Lithuania , Malta, Poland , Slovakia, Slovenia, Bulgaria and Romania.
                      </ToastBody>
                    </Toast>
                </UncontrolledPopover> 
              </UncontrolledPopover>         
              <UncontrolledPopover trigger="hover" placement="bottom" target="time_span" style={{fontSize:"0.75rem"}}>
                <Toast className="p-3 my-2 rounded" style={{ background: 'white', maxWidth:"10rem", maxHeight:"12rem"}}>  
                        <ul>
                          <li style={{padding:"1rem"}}>1990-1995</li>
                          <li style={{padding:"1rem"}}>1996-2001</li>
                          <li style={{padding:"1rem"}}>2002-2008</li>
                        </ul>
                  </Toast>  
            </UncontrolledPopover>   
            </Row> 
          </Card>
       </div>
      </React.Fragment>   
      );
    }
  }
export default Venn;

