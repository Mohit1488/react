import React , { Component } from 'react';
import Header from "./Components/Header/Header"
import "./App.css"
import Grid from "./Components/Grid/Grid"
//import Grid_2 from "./Components/Grid_2/Grid_2"
import Modal from "./Components/Modal/Modal"
import Tooltip from "./Components/Tooltip/Tooltip"


class App extends Component
{


/*
{  // nbaTeamsButtonHandler = () =>
  // {
  //   document.getElementsByClassName("App__top_buttons")[0].style.backgroundColor = "White";
  //   document.getElementsByClassName("App__top_buttons")[1].style.backgroundColor = "Orange";
  // }

  // nbaGamesButtonHandler = () =>
  // {
  //   document.getElementsByClassName("App__top_buttons")[0].style.backgroundColor = "Orange";
  //   document.getElementsByClassName("App__top_buttons")[1].style.backgroundColor = "White";
  // }
}
*/

previousButton = () =>
{
  return <Modal />
}

nextButton = () =>
{
  return <Modal />
}

  state = 
  {
    loading : true,
    teams : null
  }
  
  async componentDidMount()
  {
    const url = "https://www.balldontlie.io/api/v1/teams";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data);
    this.setState (
    {
      teams : data.data[0],
      loading : false
    })

    /*{ 
    const url_2 = "https://www.balldontlie.io/api/v1/teams";
    const response_2 = await fetch(url_2);
    const data_2 = await response.json();
    console.log(data_2.data);
    }*/

}




  render()
  {
    if(this.state.loading)
    {
      return <div>
                <Header heading="NBA REPO"/>

                <div className="APP_div_1" style={{"textAlign":"Center"}}>
                  <button className="APP__top_buttons APP_button_1" onClick={this.nbaTeamsButtonHandler}> NBA Teams </button>
                  <button className="APP__top_buttons APP_button_2" onClick={this.nbaGamesButtonHandler}> NBA Games </button>
                </div> 
                
                <h1 style={{"textAlign":"Center"}}> LOADING... </h1> <br/> <br/>
              
                <div className="APP_div_2" style={{"textAlign":"Center"}}>
                  <button className="APP__footer_buttons"> NBA Teams </button>
                  <button className="APP__footer_buttons"> NBA Games </button>
                </div> 

              </div>
    }

    if(!this.state.teams)
    {
      return <div>teams unavailable...</div>
    }

    return (
      <div className = "APP_main_div">
        
        <Header heading="NBA REPO"/>
  
        <div className="APP_div_1" style={{"align":"center"}}>
          <button className="APP__top_buttons APP_button_1" onClick={this.nbaTeamsButtonHandler}> NBA Teams </button>
          <button className="APP__top_buttons APP_button_2" onClick={this.nbaGamesButtonHandler}> NBA Games </button>
        </div> 
      

        <Grid />
      
        <div className="APP_div_2" style={{"textAlign":"Center"}}>
          <button className="APP__footer_buttons" onClick={this.previousButton}> Previous </button>
          <button className="APP__footer_buttons" onClick={this.nextButton}> Next </button>
        </div> 

      </div>
    )
  }
}

export default App;
