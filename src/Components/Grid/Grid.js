import React , { Component } from 'react';
import { Paper } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import "./Grid.css";
// import Tooltip from "./Components/Tooltip/Tooltip"

class Grid_maker extends Component
{
  someHandler = () =>
    {
      console.log("Hi");
      // return <Tooltip />

    }

    someOtherHandler = () =>
    {
      
    }

  render()
  {
      return(
      <div className = "GRID__main_div">
        
        <Grid container spacing={0} className="GRID__grid_one"> 
          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>
        
          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
           <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name :
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Paper className="GRID__paper_one" 
              onMouseEnter={this.someHandler}
              onMouseLeave={this.someOtherHandler}>
              <h2> Team Name : </h2>
              Division Name : 
            </Paper>
          </Grid>
        
        </Grid>
        </div>
      );
  }
}
  

export default Grid_maker;