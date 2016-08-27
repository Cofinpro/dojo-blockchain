let multichain = require('multichain-node')({
  port: 8080,
  host: '127.0.0.1',
  user: "multichainrpc",
  pass: "cofinpro"
});

class MultiChainService {

  getInfo() {
    return multichain.getInfo();
  }
}

export default MultiChainService;
