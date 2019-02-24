import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

class FridgeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  


    render() {
      return (
      
        <div>
          <div className="container">
            <div className="container">
              <h2>My Fridge List</h2>
              <hr id="hr" class="hr-light my-4"></hr>
            </div>
            
            
            <div className="container"> 
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Items</th>
                    <th>Date</th>
                    <th>Quantity</th>
                    <th>Remove Items</th>
                    <th>Get Recipes</th>
                  </tr>
                </thead>
                <tbody>
                {
                  this.props.fridgeFreezerList
                  .map((item, i) => {
                    if (item.fridge === 1) {
                      return <tr key={i}>                
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                        <td>{item.quantity}</td> 
                        <td><button onClick = {(event) => this.props.removeItem(event, i)}>Remove</button></td>
                        <td><NavLink to={`/recipes/${item.id}`}>Recipes</NavLink></td>
                      </tr> 
                      }
                      return <tr key={i}></tr>;
                    }               
                  )}

    {/* when do i need{}???? 
    this.props.fridgeFreezerList
                  .filter(item => item.fridge === 1)
                  .map((item, i) => {                
                      return <tr key={i}>                
                              <td>{item.name}</td>
                              <td>{item.date}</td>
                              <td>{item.quantity}</td> 
                              <td><button onClick = {(event) => this.props.removeItem(event, i)}>Remove</button></td>
                            </tr>
                    }
                  ) */} 
                  </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    }
  };


export default FridgeList;