import React from 'react'
import 'react-bootstrap';
import "../css/table.css"
import '../css/RegisterScreen.css'
const green = '#FFd177';
const yellow = '#39D1B4';

class userselection extends  React.Component{


    constructor(props){
        super(props);
        this.state={ contract :this.props.contract,
            account : this.props.account,
            servi:this.props.sp,
            submitted:this.props.sp.ongiong_service

        };
        console.log("I am called");
        this.changeColor = this.changeColor.bind(this);

    }

    changeColor(){
        const newColor = this.state.color === green ? yellow : green;
        this.setState({ color: newColor })
    }

    onSubmit = async(e) => {
        e.preventDefault();
        console.log(this.state.servi.Address);

        await this.state.contract.methods.service_choice(this.state.servi.Address).send({from:this.state.account});

        await this.state.contract.methods.Users(this.state.servi.Address).call()
            .then(function(result){
                console.log(result.ongiong_service);
            });
        console.log("pressed");
        this.setState({submitted:true})
        window.location.reload(false);
    }

    render(){
        return (
            <div >

                <br></br>
                <br></br>
                <form onSubmit={this.onSubmit}>
                    <table>
                        <thead>
                        <tr>
                            <th>Address:{this.state.servi.Address}</th>
                            <th colSpan="2">{this.state.servi.name}<br></br> {this.state.servi.city}</th>
                        </tr>
                        </thead>
                    </table><table style={{'border' : "black" }}>
                    <tbody>
                    <tr>
                        <td>{this.state.servi.phone}</td>
                        <td>{this.state.servi.email}</td>
                        <td bgcolor={"red"}><button onClick={this.changeColor} hidden={this.state.submitted? "true":""}>Accept Service Request</button></td>
                    </tr>
                    <tr>

                    </tr>
                    </tbody>

                </table>
                </form>




            </div>
        )
    }
}
export default userselection;