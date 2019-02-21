import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class FreezerList extends Component {


    constructor(props) {
        super(props);
        this.state = {
        
        };
      }
    
      

    
    render() {
          return (
            <div>
              <div>
                <h2>My Freezer List</h2>
                <div className="container"> 
                <table className="table table-striped table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Items</th>
                      <th>Date</th>
                      <th>Quantity</th>
                      <th>Remove Items</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    this.props.fridgeFreezerList
                  
                    .map((item, i) => { 
                        if (item.fridge === 0) {              
                            return <tr key={i}>                
                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                    <td>{item.quantity}</td> 
                                    <td><button onClick = {(event) => this.props.removeItem(event, i)}>Remove</button></td>
                                </tr>;
                             }
                            return <div></div>;
                         }
                    )}
                  </tbody>
                </table>
                </div>
              </div>
    
            </div>
          )
        }


  



}


export default FreezerList;