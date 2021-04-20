// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Model.sol";


contract Model_test {
    Model model = Model(DeployedAddresses.Model());
    address payable expectedUser = payable(address(this));
    address payable expectedServiceProvider = payable(address(this));
    uint public initialBalance = 10 ;


    function testUserCanSignUp() public {
        model.addUser("Bhuwnesh Lohani", "Rose Street", "Bangalore","bhuwnesh.126@gmail.com", "+917579245939");
        address payable[] memory  allUsers = model.getAllUsers();
        address payable lastRegisteredUser = allUsers[allUsers.length -1];

        Assert.equal(lastRegisteredUser, expectedUser, "last added user address must be same as the contract's address.");
    }

    //Testing the addServiceProvider()
    function testServiceProviderCanSignUp() public {
        model.addServiceProvider("Bhuwnesh Lohani", "Bangalore","bhuwnesh.126@gmail.com", "+917579245939", 1200000,2);
        address payable[] memory  allSP = model.getAllServiceProviders();
        address payable lastRegisteredSP = allSP[allSP.length -1];
        Assert.equal(lastRegisteredSP, expectedServiceProvider, "last added service provider's address must be same as the contract's address.");
    }


    function testCategoryList() public {
        model.addServiceProvider("Bhuwnesh Lohani", "Bangalore","bhuwnesh.126@gmail.com", "+917579245939", 1200000,2);
        model.render_List(2);
        address payable[] memory render = model.return_rendered_List();
        Assert.equal(render[render.length -1], expectedServiceProvider, "The correct service provider must be fetched as per the category.");

    }

    function testServiceRequested() public {
        model.addServiceProvider("Bhuwnesh Lohani", "Bangalore","bhuwnesh.126@gmail.com", "+917579245939", 1200000,2);
        address payable[] memory  allSP = model.getAllServiceProviders();
        address payable lastRegisteredSP = allSP[allSP.length -1];
        Assert.equal(lastRegisteredSP, expectedServiceProvider, "The user must be added to the serivce providers list.");
    }

    function testServiceStatusTurnedOff() public{
        model.addServiceProvider("Bhuwnesh Lohani", "Bangalore","bhuwnesh.126@gmail.com", "+917579245939", 1200000,2);
        address payable[] memory  allSP = model.getAllServiceProviders();
        address payable lastRegisteredSP = allSP[allSP.length -1];
        Assert.equal(lastRegisteredSP, expectedServiceProvider, " The service status must be turned off");
    }


}
