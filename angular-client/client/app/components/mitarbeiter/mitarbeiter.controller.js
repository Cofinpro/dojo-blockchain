export default class MitarbeiterController {
  constructor($scope, MultichainService) {
    this.MultichainService = MultichainService;
    this.$scope = $scope;
    this.$scope.adress = '18gKNFFDuJMbSjD6WTRNqiJbSQnf4A7Fd135C7';
  }

  getInfo(){
    this.MultichainService.getInfo().then((info) => {this.$scope.info = info;});
  }

  loadUserData(address){
     this.getBalances(address);
     this. getTransactions(address);
  }

  getBalances(address){
    this.MultichainService.getBalances(address).then((info) => {this.$scope.balance = info;});
    this.$scope.name = 'Max Mustermann';
    this.$scope.rights = 'Aktien kaufen, Aktien verkaufen';
  }

  getTransactions(address) {
    this.MultichainService.getTransactions(address).then((info) => {this.$scope.transactions = info;});
  }

  sendAssetFrom(requestData) {
    var requestData = {
      from: this.$scope.fromAddress,
      to: this.$scope.toAddress,
      asset: this.$scope.name,
      qty: this.$scope.amount
    };

    this.MultichainService.sendAssetFrom(requestData).then((resp) => {
      this.$scope.responseString = resp;
    });
  }

}

MitarbeiterController.$inject = ['$scope', 'MultichainService'];
