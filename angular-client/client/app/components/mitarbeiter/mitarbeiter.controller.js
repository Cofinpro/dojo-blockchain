export default class MitarbeiterController {
  constructor($scope, MultichainService) {
    this.MultichainService = MultichainService;
    this.$scope = $scope;
  }

  getInfo(){
    return this.MultichainService.getInfo()
      .then((info) => {this.info = info;});
  }

}

MitarbeiterController.$inject = ['$scope', 'MultichainService'];
