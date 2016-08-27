let multichain = require('multichain-node')({
  port: 8080,
  host: '192.168.90.215',
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

  getTransactions(address) {
    return this.wrap(multichain.listAddressTransactions, {address: address});
  }

  issueAsset(requestData) {
    return this.wrap(multichain.issue, requestData);
  }

  issueMoreAssets(requestData) {
    return this.wrap(multichain.issueMore, requestData);
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
