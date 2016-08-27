import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mitarbeiterComponent from './mitarbeiter.component';

let mitarbeiterModule = angular.module('mitarbeiter', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('mitarbeiter', {
      url: '/',
      component: 'mitarbeiter'
    });
})

.component('mitarbeiter', mitarbeiterComponent)

.name;

export default mitarbeiterModule;
