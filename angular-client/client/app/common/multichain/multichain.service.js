let multichain = require('multichain-node')({
  port: 6814,
  host: '127.0.0.1',
  user: "multichainrpc",
  pass: "cofinpro"
});

let MultiChainService = function () {

  function getInfo() {
    return multichain.getInfo();
  }
};

export default MultiChainService;
