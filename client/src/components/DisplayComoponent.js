import React from "react";
import 'react-bootstrap';
import Payment from "./Payment";
import "../css/table.css"
import '../css/RegisterScreen.css'
const green = '#FFd177';
const yellow = '#39D1B4';

class DisplayComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {submitted: false,color: green, contract: this.props.contract };
        this.changeColor = this.changeColor.bind(this);

    }
    changeColor(){
        const newColor = this.state.color === green ? yellow : green;
        this.setState({ color: newColor })
    }

     onSubmit = async(e) => {
        e.preventDefault();
        console.log(this.props.sp.Address);
        console.log(this.props.account);
        console.log(this.props.sp.charges);
        await this.state.contract.methods.requestService(this.props.sp.Address)
            .send({from: this.props.account, value: this.props.sp.charges});
        console.log("pressed");
        this.setState({submitted:true})

    }
    render(){
        return(
          <div class>
              <br></br>
              <br></br>
              <form onSubmit={this.onSubmit}>
              <table>
                  <thead>
                  <tr>
                      <th>Charges :{this.props.sp.charges}</th>
                      <th colSpan="2">{this.props.sp.name}<br></br> {this.props.sp.city}</th>
                  </tr>
                  </thead>
                  </table><table style={{'border' : "black" }}>
                  <tbody>
                  <tr>
                      <td>{this.props.sp.phone}</td>
                      <td>{this.props.sp.email    }</td>
                      <td bgcolor={"red"}><button onClick={this.changeColor} hidden={this.state.submitted? "true":""}>Place Request for Service</button></td>
                  </tr>
                  <tr>

                  </tr>
                  </tbody>

              </table>
              </form>

          </div>

        ) }
}



export default DisplayComponent;