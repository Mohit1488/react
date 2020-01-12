import React , { Component } from 'react';
import "./Modal.css";
import { Paper } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

class Modal extends Component
{
  render()
  {
    return(
      <div className = "MODAL__grid_div">
        
        <Grid container spacing={0} className="MODAL__grid_one" ShowGridLines="False" > 
          <Grid item xs={12} sm={12} ShowGridLines="False">
            <Paper className="MODAL__paper_three">
            	<h3 style={{color:"darkorange"}}> Game Description </h3>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={12} ShowGridLines="False">
            <Paper className="MODAL__paper_three">
            	<h4> Game Description 2 </h4>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className="MODAL__paper_one_two">
            	<h3> Home Team </h3>
            	<span> line </span><br/>
            	<span>City:</span><br/>
            	<span>Conference:</span><br/>
            	<span>Division:</span><br/>
            	<span>Home Team Score:</span><br/><br/>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className="MODAL__paper_one_two">
            	<h3> Visitor Team </h3>
            	<span> line </span><br/>
            	<span>City:</span><br/>
            	<span>Conference:</span><br/>
            	<span>Division:</span><br/>
            	<span>Visitor Team Score:</span><br/><br/>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={12}>
            <Paper className="MODAL__paper_one">
              <button className="MODAL__footer_buttons"> Close </button>
            </Paper>
          </Grid>

        </Grid>
        </div>
      );
  }
}
  

export default Modal;