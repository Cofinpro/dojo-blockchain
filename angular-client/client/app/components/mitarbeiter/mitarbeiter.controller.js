export default class MitarbeiterController {
  constructor($scope, MultichainService) {
    this.MultichainService = MultichainService;
    this.$scope = $scope;
    $scope.getInfo = this.getInfo;
  }

  getInfo(){
    return this.MultichainService.getInfo();
  }

}

MitarbeiterController.$inject = ['$scope', 'MultichainService'];
