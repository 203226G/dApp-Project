var ArtRegisterations = artifacts.require("ArtRegisterations");

module.exports = function(deployer){
  deployer.deploy(ArtRegisterations);
}