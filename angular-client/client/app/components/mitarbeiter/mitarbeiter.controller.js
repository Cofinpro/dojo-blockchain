export default class MitarbeiterController {
  constructor($scope, MultichainService) {
    this.MultichainService = MultichainService;
    this.$scope = $scope;
  }

  getInfo(){
    this.MultichainService.getInfo().then((info) => {this.$scope.info = info;});
  }

  getBalances(address){
    this.MultichainService.getBalances(address).then((info) => {this.$scope.balance = info;});
  }

}

MitarbeiterController.$inject = ['$scope', 'MultichainService'];
