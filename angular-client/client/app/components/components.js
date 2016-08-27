import angular from 'angular';
import Mitarbeiter from './mitarbeiter/mitarbeiter';
import IssueAsset from './issue-asset/issue-asset';

let componentModule = angular.module('app.components', [
    Mitarbeiter, IssueAsset,
])

.name;

export default componentModule;
