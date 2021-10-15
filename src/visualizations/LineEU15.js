import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import {dataEU15} from '../data/dataEU15';

    const LineEU15 = () => (
      <ResponsiveLine
      data={dataEU15}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'linear', min:'2002'}}
      xFormat=" >-"
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          tickValues:[ '2002', '2003' ,'2004', '2005', '2006', '2007','2008'] 
      }}
      axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
          {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
  />
    );   
export default LineEU15;