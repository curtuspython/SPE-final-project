import React, {useEffect} from "react";
import 'react-bootstrap';
const green = '#39D1B4';
const yellow = '#FFD712';
import servicerequested from './servicerequested'
class DisplayComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {submitted: false,color: green };
        this.changeColor = this.changeColor.bind(this);

    }
    changeColor(){
        const newColor = this.state.color === green ? yellow : green;
        this.setState({ color: newColor })
    }

     onSubmit = async(e) => {
        e.preventDefault();
        await this.props.contract.requestService(this.props.user.address)
            .send({from: this.props.Account, value: this.props.sp.charges});
        console.log("pressed");
        this.setState({submitted:true})

    }
    render(){
        return(
          <div>
              <form onSubmit={this.onSubmit}>
              <table style={{"borderWidth":"5px", 'borderColor':"black", 'borderStyle':'solid'}}>
                  <thead>
                  <tr bgcolor={"yellow"}>
                      <th>Charges :{this.props.user.charges}</th>
                      <th colSpan="2">{this.props.user.name}<br></br> {this.props.user.city}</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td>{this.props.user.phone}</td>
                      <td>{this.props.user.email    }</td>
                      <td bgcolor={"red"}><button color={"yellow"} onClick={this.changeColor} hidden={this.state.submitted? "true":""}>Place Request for Service</button></td>
                  </tr>
                  <tr>
                      {this.state.submitted === true ?
                          <servicerequested/>
                          :<h2>hello</h2>}
                  </tr>
                  </tbody>

              </table>
              </form>

          </div>

        ) }
}



export default DisplayComponent;