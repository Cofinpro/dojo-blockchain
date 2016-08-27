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

  getTransactions(address) {
    return this.wrap(multichain.listAddressTransactions, {address: address});
  }

  getAddresses() {
    return this.wrap(multichain.getAddresses);
  }

  sendAssetFrom(requestData) {
    return this.wrap(multichain.sendAssetFrom, requestData);
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
