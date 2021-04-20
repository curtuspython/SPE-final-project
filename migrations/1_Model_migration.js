const Model = artifacts.require("Model");

module.exports = function (deployer) {
    deployer.deploy(Model);
};