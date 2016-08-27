import angular from 'angular';
import MultiChainService from './multichain.service';

let multichainModule = angular.module('multichain', [])
  .service('MultichainService', MultiChainService)
  .name;

export default multichainModule;
