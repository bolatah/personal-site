import React, { Component } from 'react';
import { UncontrolledTooltip, CardHeader } from 'reactstrap';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-resizable/css/styles.css';
import LineExim from '../visualizations/LineExim' ;
import LineEU15 from '../visualizations/LineEU15';
import LineEU12 from '../visualizations/LineEU12';
import Venn from '../visualizations/VennDiagram';
import BarPatent from '../visualizations/BarPatent';
import CollapsibleTable from '../visualizations/TableIs'

// Handles the responsive nature of the grid
const ResponsiveGridLayout = WidthProvider(Responsive);
// Determines the screen breakpoints for the columns
const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 320 };
// How many columns are available at each breakpoint
const cols = { lg: 4, md: 4, sm: 1, xs: 1, xxs: 1 };


class MasterThesis extends Component {

    render() {
    
        return (
        <div className="App">
            <div>
            <CardHeader tag="h1" className="text-center p-3" style={{fontSize:"1.5rem"}}> 
                <span style={{textDecoration: "underline", color:"black"}} href="#" id="UncontrolledTooltipExample">Innovation, Technical Change and International Trade</span>
                <UncontrolledTooltip placement="bottom" target="UncontrolledTooltipExample">
                    <h2><i>Turkish Automative Industry</i></h2>
                    <h3> <q>Master's Thesis</q></h3>
                </UncontrolledTooltip>
              </CardHeader>
      
              <ResponsiveGridLayout
                className="my-5 mx-8"
                breakpoints={breakpoints}
                cols={cols}
                
              > 
                <div 
                  className="grid-cell"
                  key="1"
                  data-grid={{ x: 0, y:0 , w: 4, h: 4, isDraggable:false }}
                >
                  <h3 className="grid-header text-center">Industrial Specialisation Model</h3>
                  <Venn />
                </div>
                <div
                  className="grid-cell "
                  key="2"
                  data-grid={{ x: 0, y: 1, w: 4, h: 4, isDraggable:false }}
                >
                  <h3 className="grid-header">Industrial Specialisation in Relative Values</h3>
                  <CollapsibleTable />
                </div>
              
                <div
                  className="grid-cell"
                  key="3"
                  data-grid={{ x: 0, y: 2, w: 2, h: 2, isDraggable:false}}
                >
                  <h3 className="grid-header">Export Volumes in Automative Industries - Turkey & EU15 </h3>
                  <p className="currency-unit"> Million US Dollar</p>
                  <LineEU15 />
                </div>
                <div
                  className="grid-cell"
                  key="4"
                  data-grid={{ x: 2, y: 2, w: 2, h: 2, isDraggable:false}}
                >
                  <h3 className="grid-header">Export Volumes in Automative Industries - Turkey & EU12 </h3>
                  <p className="currency-unit"> Million US Dollar</p>
                  <LineEU12 />
                </div>
                <div
                    className="grid-cell"
                    key="5"
                    data-grid={{ x: 0, y:3 , w: 2, h: 2, isDraggable:false}}
                  >
                    <h3 className="grid-header">Average Export-Import Ratio in Turkish Automative Industry</h3>
                    <LineExim />
                </div> 
                <div
                  className="grid-cell"
                  key="6"
                  data-grid={{ x: 2, y: 3, w: 2, h: 2, isDraggable:false}}
                >
                  <h3 className="grid-header">Average Patent Productivity in Turkish Automative Industry</h3>
                  <BarPatent />
                </div>
             
              </ResponsiveGridLayout>
            </div>
          </div>
        );
      }
    }

export default MasterThesis;

