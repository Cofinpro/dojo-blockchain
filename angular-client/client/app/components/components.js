import angular from 'angular';
import Mitarbeiter from './mitarbeiter/mitarbeiter';

let componentModule = angular.module('app.components', [
  Mitarbeiter,
])

.name;

export default componentModule;
