import 'react-bootstrap'
import React from 'react';
import './App.css'
import Web3 from 'web3'
import ModelABI from './contracts/Model.json';
import RegisterScreen from "./components/RegisterScreen";


class  Welcome extends React.Component{
    componentWillMount() {
        this.loadWeb3().then(r => {console.log("Connected to metamask")});
        this.connectBlockChainData().then(r =>{console.log("data from blockchain now in our program")});
    }

    constructor(props) {
        super(props);
        this.state={currentAccount: 0x0, contract: null, existingUser :null};
    }

    async getUserState (contract){
        let rvalue = false;
         await  this.state.contract.methods.userExist( this.state.currentAccount).call()
          .then(function (result){
              rvalue = result;
          });
        this.setState({existingUser:rvalue});
        console.log(rvalue);
        return rvalue;
    }

  async addUser(name, location, email, phone){
        await  this.state.contract
        .methods
        .addUser(name, location, email, phone)
        .send({from :  this.state.currentAccount});

}


  async loadWeb3(){
      if (window.ethereum) {
          window.web3 = new Web3(window.ethereum)
          await window.ethereum.enable()
      } else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider)
      } else {
          window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
      }
  }
  async RegisterUser(name, location, email, phone){
        await  this.contract
        .methods
        .addUser(name, location, email, phone)
        .send({from :  this.state.currentAccount}).then(function(result){
            console.log(result);
        });
  }



  async connectBlockChainData(){
    const web3 = await new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    this.setState({currentAccount:accounts[0]});
    console.log(accounts[0]);
    console.log( this.state.currentAccount);
    const networkId = await web3.eth.net.getId();
    const networkData = ModelABI.networks[networkId];
    if(networkData){
      const Model = await new web3.eth.Contract(ModelABI.abi,networkData.address);
      this.setState({contract :Model});
      const x = await Model.methods.getAllUsers().call();
      console.log(this.state.contract);
      console.log(x);
      let z = await Model.methods.Users(x[0]).call();
      console.log(z);
      let iop = await this.getUserState(this.state.contract);
      this.setState({existingUser : iop});
    }
    else{
      window.alert("Please switch to Ganache Network!!")
    }
  }

  RegisterScreenLoader(x){

    if( x === true)
        return <h1>hello</h1>
    else
        return <RegisterScreen Account ={ this.state.currentAccount}  Contract = { this.state.contract} />

  }

  render() {
      return (

          <div className="App">

              {

                  this.RegisterScreenLoader(this.state.existingUser)
              }

          </div>);
  }
}

export default Welcome;
