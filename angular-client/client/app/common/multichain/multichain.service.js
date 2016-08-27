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
    var defer = this.$q.defer();
    multichain.getInfo((err, info) => {
      if (err) {
        defer.reject(err);
      }
      defer.resolve(info);
    });
    return defer.promise;
  }

  getBalances(address) {
    var defer = this.$q.defer();
    multichain.getAddressBalances({address:address}, ((err, balance) => {
      if (err) {
        defer.reject(err);
      }
      defer.resolve(balance);
    }));
    return defer.promise;
  }
}
MultiChainService.$inject = ['$q'];
export default MultiChainService;
