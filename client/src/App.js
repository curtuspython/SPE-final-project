import 'react-bootstrap'
import React from 'react';
import './App.css'
import Web3 from 'web3'
import ModelABI from './contracts/Model.json';
import RegisterScreen from "./components/RegisterScreen";
import DisplayServiceProviders from "./components/DisplayServiceProviders";
import Payment from "./components/Payment";


class  Welcome extends React.Component{
    componentWillMount() {
        this.loadWeb3().then(r => {console.log("Connected to metamask")});
        this.connectBlockChainData().then(r =>{console.log("data from blockchain now in our program")});
    }

    constructor(props) {
        super(props);
        this.state={currentAccount: 0x0,
            contract: null,
            existingUser :null,
            existingServiceProvider:null,
            serviceProvidersList :null
        };
    }

    async getUserState (contract){
        let rvalue = false;
         await  this.state.contract.methods.userExist( this.state.currentAccount).call()
          .then(function (result){
              rvalue = result;
          });
        this.setState({existingUser:rvalue});

        rvalue = false
        await  this.state.contract.methods.serviceProviderExist( this.state.currentAccount).call()
            .then(function (result){
                rvalue = result;
            });
        this.setState({existingServiceProvider:rvalue});

        console.log(rvalue);
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
    console.log( this.state.currentAccount);
    const networkId = await web3.eth.net.getId();
    const networkData = ModelABI.networks[networkId];
    if(networkData){
      const Model = await new web3.eth.Contract(ModelABI.abi,networkData.address);
      this.setState({contract :Model});
      const x = await Model.methods.getAllUsers().call();
      const y = await Model.methods.getAllServiceProviders().call();
      console.log(x);
      console.log(y);
      console.log(await Model.methods.ServiceProviders(y[4]).call());
      let iop = await this.getUserState(this.state.contract);
    }
    else{
      window.alert("Please switch to Ganache Network!!")
    }
  }

    async user()
    {
        let v= false;

        await this.state.contract.methods.Users(this.state.currentAccount).call()
            .then(function(result){
                v= result[8];



            });
        this.setState({sp :v});
    }

  RegisterScreenLoader(x, y){

    if( x === true || y === true)
        if(x === true){
            this.user();
            if(this.state.sp=== true){
                return <Payment contract= {this.state.contract} account ={this.state.currentAccount}/>}
            else {
                return <DisplayServiceProviders Account = {this.state.currentAccount}  Contract={this.state.contract}/>}}        else
            return <h1>Hello service provider</h1>
    else
        return <RegisterScreen Account ={ this.state.currentAccount}  Contract = { this.state.contract} />

  }

  render() {
      return (

          <div className="App">

              {

                  this.RegisterScreenLoader(this.state.existingUser,this.state.existingServiceProvider)
              }

          </div>);
  }
}

export default Welcome;
