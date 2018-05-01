import React, { Component } from 'react';
import PropTypes from 'prop-types';

const pathOneStyle = {
    fill:'url(radialGradient18302)',
    fillOpacity:1,
    fillRule:'evenodd',
    stroke:'none'
  };

  const pathTwoStyle = {
      fill:'darkMidnightBlue',
      fillOpacity:1,
      fillRule:'nonzero',
      stroke:'darkMidnightBlue',
      strokeWidth:10,
      strokeMiterlimit:4,
      strokeOpacity:1,
      strokeDasharray:'none',
      display:'inline'
  }
  
  const rectOneStyle = {
    fill:'darkMidnightBlue',
    fillOpacity:1,
    fillRule:'nonzero',
    stroke:'darkMidnightBlue',
    strokeWidth:6.66293573,
    strokeMiterlimit:4,
    strokeOpacity:1,
    strokeDasharray:'none'
  };

class Dbase extends Component {
    render() {
        const { width, height, xPos = 0, yPos = 0 } = this.props;
            
        return (
            <svg
            x={ `${xPos - (width / 2)}px` }
            y={ `${yPos - (height / 1)}px` }
            xmlnsSvg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.0"
            id="svg2108">
           <defs
              id="defs3">
             <linearGradient
                x1="105.0923"
                y1="75.109901"
                x2="124.8197"
                y2="92.612297"
                id="aigrd11"
                gradientUnits="userSpaceOnUse">
               <stop
                  id="stop12981"
                  style={{stopColor:'#3fa6cc',stopOpacity:1}}
                  offset="0" />
               <stop
                  id="stop12983"
                  style={{stopColor:'#00687a',stopOpacity:1}}
                  offset="1" />
             </linearGradient>
             <linearGradient
                id="linearGradient2456">
               <stop
                  id="stop2458"
                  style={{stopColor:'#000000',stopOpacity:1}}
                  offset="0" />
               <stop
                  id="stop2460"
                  style={{stopColor:'#000000',stopOpacity:0}}
                  offset="1" />
             </linearGradient>
             <radialGradient
                cx="28.283663"
                cy="47.400623"
                r="13.804391"
                fx="28.283663"
                fy="47.400623"
                id="radialGradient18302"
                xlinkHref="#linearGradient2456"
                gradientUnits="userSpaceOnUse"
                gradientTransform="scale(1.164226,0.85894)" />
             <linearGradient
                x1="-22.976406"
                y1="18.516047"
                x2="-14.360273"
                y2="33.016045"
                id="linearGradient18304"
                xlinkHreff="#aigrd11"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(2.3931406,0,0,1.2167111,10.086181,-9.1255997)" />
           </defs>
           <g
              id="layer1"
              style={{display:'inline'}} />
           <g
              id="layer2"
              style={{display:'inline'}}>
             <g
                transform="matrix(1.7223399,0,0,1.7223399,121.82836,7.7201135)"
                id="g18295">
               <path
                  d="m 48.999998,40.714287 c 0,6.548519 -7.195424,11.857142 -16.071428,11.857142 -8.876005,0 -16.071429,-5.308623 -16.071429,-11.857142 0,-6.548519 7.195424,-11.857142 16.071428,-11.857142 8.876005,0 16.071429,5.308623 16.071429,11.857142 l 0,0 z"
                  transform="matrix(2.3795895,0,0,1.2824084,-112.88539,-3.8358938)"
                  id="path1693"
                  style={ pathOneStyle } />
               <path
                  d="m 54.800776,-7.9412799 c 0,9.4702139 -23.901978,17.1473392 -53.3865625,17.1473392 -29.4845845,0 -53.3865625,-7.6771253 -53.3865625,-17.1473392 0,-9.4702141 23.901978,-17.1473391 53.3865625,-17.1473391 29.4845845,0 53.3865625,7.677125 53.3865625,17.1473391 l 0,0 z"
                  transform="matrix(0.5350417,0,0,0.5350417,-35.152994,47.139656)"
                  id="path11450"
                  style={ pathTwoStyle } />
               <rect
                  width="55.815552"
                  height="17.414896"
                  x="-62.304111"
                  y="23.003975"
                  id="rect11448" 
                  style={ rectOneStyle } />
               <path
                  d="m 54.800776,-7.9412799 c 0,9.4702139 -23.901978,17.1473392 -53.3865625,17.1473392 -29.4845845,0 -53.3865625,-7.6771253 -53.3865625,-17.1473392 0,-9.4702141 23.901978,-17.1473391 53.3865625,-17.1473391 29.4845845,0 53.3865625,7.677125 53.3865625,17.1473391 l 0,0 z"
                  transform="matrix(0.5350417,0,0,0.5350417,-35.152994,24.799556)"
                  id="path11444"
                  style={{fill:'#336699',fillOpacity:1,fillRule:'nonzero',stroke:'#00a4ff',strokeWidth:10,strokeMiterlimit:4,strokeOpacity:1,strokeDasharray:'none' }} 
                  />
               <path
                  d="m -5.7331306,20.627303 c 0,5.342382 -12.8846504,9.67209 -28.7810944,9.67209 -15.896447,0 -28.782633,-4.329708 -28.782633,-9.67209 0,-5.342381 12.887723,-9.67209 28.782633,-9.67209 15.896444,0 28.7810944,4.329709 28.7810944,9.67209 l 0,0 z"
                  id="path3935"
                  style={{fill:'url(#linearGradient18304)',fillOpacity:1,fillRule:'nonzero', stroke:'none' }} 
                  />
             </g>
           </g>
         </svg>
        );
    }
}

Dbase.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    xPos: PropTypes.number,
    yPos: PropTypes.number
};

export default Dbase;
