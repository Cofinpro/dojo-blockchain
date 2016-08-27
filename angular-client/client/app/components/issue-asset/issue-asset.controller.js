export default class IssueAssetController {
  constructor($scope, MultichainService) {
    this.MultichainService = MultichainService;
    this.$scope = $scope;

    $scope.name = "Cofinpro AG";
    $scope.amount = 100;
    $scope.address = '1GVPjCUqBzT1P6xSHx3kSiP8qWGEtwYZuWXMFw';
  }

  getInfo() {
    this.MultichainService.getInfo().then((info) => {
      this.$scope.info = info;
    });
  }

  getBalances(address) {
    this.MultichainService.getBalances(address).then((info) => {
      this.$scope.balance = info;
    });
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

  issueAsset() {

    var requestData = {
      address: this.$scope.address,
      asset: this.$scope.name,
      qty: this.$scope.amount,
      units: 0.01,
      open: true,
      details: {
        IssueMessage: "Neue Cofinpro Aktien"
      }
    };

    this.MultichainService.issueAsset(requestData).then((resp) => {
      this.$scope.responseString = resp;
    });
  }

  issueMoreAssets() {

    var requestData = {
      address: this.$scope.address,
      asset: this.$scope.name,
      qty: this.$scope.amount,
      details: {
        IssueMessage: "Cofinpro CAPS 2016"
      }
    };

    this.MultichainService.issueMoreAssets(requestData).then((resp) => {
      this.$scope.responseString = resp;
    });
  }

}

IssueAssetController.$inject = ['$scope', 'MultichainService'];
