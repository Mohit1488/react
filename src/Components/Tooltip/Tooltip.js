import React , { Component } from 'react';
import "./Tooltip.css"

class Tooltip extends Component
{
  render()
  {
    return (
      <div className="TOOLTIP__div_tooltip">
      	<span>  Line 1 </span>
      	<span> City : </span> <br/>
      	<span> Conference : Line 3 </span> <br/>
      	<span> Division : </span> <br/>
      </div>
    )
  }
}

export default Tooltip;
