//SPDX-License-Identifier: GPL-3.
pragma solidity >=0.7.0 <0.9.0;


contract Model {

    address payable public admin;

    constructor(){
        admin = payable(msg.sender);

    }
    // structure for Users
    struct User {
        uint id;
        address payable Address;
        address home_address;
        address payable sp;
        string name;
        string city;
        string email;
        string phone;
    }


    // structure for Service Provider
    struct Service_Provider {
        uint id;
        address payable Address;
        string name;
        string city;
        address payable [] service_seeker;
        string phone;
        string email;
        uint charges;
        uint service_type;

    }


    address payable[] public service_providers;
    address payable[] public  user_Addresses;
    address payable[] public sp_Addresses;
    uint usersId = 0;
    uint serviceProviderId = 0;
    uint usersCount = 0;
    uint serviceProviderCount = 0;

    mapping(address => User) public Users;
    mapping(address => Service_Provider) public ServiceProviders;

    // Function to add Users
    function addUser(string memory name, string memory city, string memory email, string memory phone) public payable {
        usersCount++;
        usersId++;
        address payable Address = payable(msg.sender);
        address payable sp = payable(0);
        user_Addresses.push(Address);
        Users[Address] = User(usersId, Address, sp, name, city, email, phone);
    }

    // Function to return the array of addresses of Users
    function getAllUsers() public view returns (address payable [] memory){
        return user_Addresses;
    }

    // to check if user exist already or not.
    function userExist(address payable Address) public view returns (bool){
        if (Users[Address].id > 0) {
            return true;
        }
        else
            return false;
    }



    // Function to add service providers
    function addServiceProvider(string memory name, string memory city, string memory email, string memory phone, uint charges, uint service_type) public payable {
        serviceProviderCount++;
        serviceProviderId++;
        address payable Address = payable(msg.sender);
        sp_Addresses.push(Address);
        address payable [] memory service_seeker;
        ServiceProviders[Address] = Service_Provider(serviceProviderId, Address, name, city, service_seeker, email, phone, charges, service_type);


    }
    // function to return a service provider list to user
    function render_List(uint service_type) public {
        service_providers = new address payable [](0);
        uint i = 0;
        for (i = 0; i < sp_Addresses.length; ++i) {
            if (ServiceProviders[sp_Addresses[i]].service_type == service_type) {

                service_providers.push(sp_Addresses[i]);}
        }

    }

    function return_rendered_List() public view returns (address payable[] memory){
        return service_providers;
    }
    //function to return the array of addresses of Service Providers
    function getAllServiceProviders() public view returns (address payable [] memory){
        return sp_Addresses;
    }

    //require(msg.value == 2 ether)
    // function for checking ether value and registeration of user to particular service Providers
    function requestService(address payable sp) public payable {
        address payable user;

        user = payable(msg.sender);

        if (msg.value != ServiceProviders[sp].charges) {
            user.transfer(msg.value);

        }
        else {
            Users[user].sp = sp;
            ServiceProviders[sp].service_seeker.push(user);

        }

    }

    function servicecompleted() public payable {
        address payable user;
        user = payable(msg.sender);
        uint i = 0;
        uint length = ServiceProviders[Users[user].sp].service_seeker.length;
        // loop to check whether user is present in service provider list or not
        for (; i < length; i++)
        {
            if (ServiceProviders[Users[user].sp].service_seeker[i] == user)
                break;
        }
        // if user not present then we transfer 0 to the service provider
        if (i == ServiceProviders[Users[user].sp].service_seeker.length)
            Users[user].sp.transfer(0);
        else {
            uint amount = (100 * ServiceProviders[Users[user].sp].charges - 95 * ServiceProviders[Users[user].sp].charges) / 100;
            admin.transfer(amount);
            Users[user].sp.transfer((90 * ServiceProviders[Users[user].sp].charges) / 100);
            // this to delete the user from service provider list
            ServiceProviders[Users[user].sp].service_seeker[i] = ServiceProviders[Users[user].sp].service_seeker[length - 1];
            ServiceProviders[Users[user].sp].service_seeker[length - 1] = user;
            ServiceProviders[Users[user].sp].service_seeker.pop();
        }

    }


}