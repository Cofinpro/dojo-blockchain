let multichain = require('multichain-node')({
  port: 8080,
  host: '127.0.0.1',
  user: "multichainrpc",
  pass: "cofinpro"
});

class MultiChainService {

  constructor($q) {
    this.$q = $q;
  }

  getInfo() {
    return this.wrap(multichain.getInfo, {});
  }

  getBalances(address) {
    return this.wrap(multichain.getAddressBalances, {address: address});
  }

  wrap(fnct, params) {
    var defer = this.$q.defer();
    fnct(params, (err, payload) => {
      if (err) {
        defer.reject(err);
      }
      defer.resolve(payload);
    });
    return defer.promise;
  }
}

MultiChainService.$inject = ['$q'];
export default MultiChainService;
