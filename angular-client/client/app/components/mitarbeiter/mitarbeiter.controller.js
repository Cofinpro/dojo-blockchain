export default class MitarbeiterController {
  constructor($scope, MultichainService) {
    this.MultichainService = MultichainService;
    this.$scope = $scope;
    this.$scope.adress = '18gKNFFDuJMbSjD6WTRNqiJbSQnf4A7Fd135C7';
  }

  getInfo(){
    this.MultichainService.getInfo().then((info) => {this.$scope.info = info;});
  }

  getBalances(address){
    this.MultichainService.getBalances(address).then((info) => {this.$scope.balance = info;});
    this.$scope.name = 'Max Mustermann';
    this.$scope.rights = 'Aktien kaufen, Aktien verkaufen';
  }

}

MitarbeiterController.$inject = ['$scope', 'MultichainService'];
