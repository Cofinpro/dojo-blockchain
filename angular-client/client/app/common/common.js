import angular from 'angular';
import Multichain from './multichain/multichain'

let commonModule = angular.module('app.common', [
  Multichain
])
.name;

export default commonModule;
