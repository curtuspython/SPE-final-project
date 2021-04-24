
import React from 'react'
import payment from './images/payment.png';
import panda from "./images/panda.png";
class  Payment extends React.Component{

    constructor(props){
        super(props);
        this.state ={account:this.props.account, contract : this.props.contract};
    }

    onClick = async (e) => {
        e.preventDefault();
        await this.state.contract.methods.servicecompleted().send({from:this.state.account});
        alert('paid');
        window.location.reload(false);


    }
    render(){

        return (
            <div class = "hero">
                <h2>
                    <div className="panda">Welcome to<br></br><img src={panda}></img><br></br> Your Helper</div>
                    <br></br>
                </h2>
                <h2>CAUTION: Click only if the service is completed. </h2>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={this.onClick} height= "100%"> click on this to pay to the service provider </button>

            </div>
        )}
}

export default Payment