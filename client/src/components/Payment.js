import React from 'react'
import payment from './images/payment.png';
class  Payment extends React.Component{

    constructor(props){
        super(props);
        this.state ={account:this.props.account, contract : this.props.contract};
    }

    onClick = async (e) => {
        e.preventDefault();
        await this.state.contract.methods.servicecompleted().send({from:this.state.account});
        alert('paid');


    }
    render(){

        return (
            <div class = "hero">
                <h2>CAUTION: Click only if the service is completed. </h2>
               <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={this.onClick} height= "100%"> click on this to pay to the service provider </button>

            </div>
        )}
}

export default Payment;