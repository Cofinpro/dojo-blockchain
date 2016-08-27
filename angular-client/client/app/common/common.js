import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Multichain from './multichain/multichain'

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  Multichain
])

.name;

export default commonModule;
