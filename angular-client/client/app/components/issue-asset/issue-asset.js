import angular from 'angular';
import uiRouter from 'angular-ui-router';
import issueAssetComponent from './issue-asset.component';

let issueAssetModule = angular.module('issue-asset', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('issue-asset', {
      url: '/issue-asset',
      component: 'issueAsset'
    });
})

.component('issueAsset', issueAssetComponent)

.name;

export default issueAssetModule;
