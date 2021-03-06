export default class MitarbeiterController {
  constructor($scope, MultichainService, $uibModal) {
    this.MultichainService = MultichainService;
    this.$scope = $scope;
      this.$scope.adress = '1Z8mBjdtUQ2VYj9ohMBLVEnWN7aiiM8ba2e7hL';
    this.$scope.transaction = {};
    this.$uibModal = $uibModal;
  }

  getInfo() {
    this.MultichainService.getInfo().then((info) => {
      this.$scope.info = info;
    });
  }

  loadUserData(address) {
    this.getBalances(address);
    this.getTransactions(address);
  }

  getBalances(address) {
    this.MultichainService.getBalances(address).then((info) => {
      this.$scope.balance = info.find(b => {
        return b.name === 'Cofinpro AG'
      });
    });
  }

  getTransactions(address) {
    this.MultichainService.getTransactions(address).then((info) => {
      this.$scope.transactions = info;
    });
  }

  showSellDialog() {
    var MultichainService = this.MultichainService;
    var $scope = this.$scope;
    var modalInstance = this.$uibModal.open({
      template: require('./verkaufenDialog.html'),
    });
    modalInstance.result.then(function (transaction) {
        var requestData = {
          address: transaction.target,
          asset: "Cofinpro AG",
          qty: transaction.amount
        };
        MultichainService.sendAssetFrom(requestData).then((resp) => {
          this.$scope.responseString = resp;
        });
      }, function () {
      }
    );
  }

}

MitarbeiterController.$inject = ['$scope', 'MultichainService', '$uibModal'];
