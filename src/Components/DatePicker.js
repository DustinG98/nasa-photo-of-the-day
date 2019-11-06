import React, { Component } from "react";
import DatePicker from 'react-date-picker';
import Moment from 'react-moment';


class MyApp extends Component {
     
    
    state = {
      date: new Date(),
    }

   
    onChange = date => {
        this.setState({ date })
    }
    
    
    
    render() {
      
      return (
        <div>
          
          <DatePicker
            onChange={this.onChange}
            value={this.state.date}
          />
          <p  className="currentDate">
           <Moment format="YYYY-MM-DD">
              {this.state.date}
            </Moment>
          </p>
            
        </div>
        
      );
    }
  }


export default MyApp;