import angular from 'angular';
import ngRoute from 'angular-route';

const app = angular.module("app", ["ngRoute"]);

// Set Services
import TestService from './services/testService.js'
app.service('TestService', TestService);

// Set Directive
import lineText from './directives/lineText/lineText.js'
app.directive("lineText", lineText);

// Set Controllers
import HomeController from './partials/Home/HomeController.js'
app.controller("HomeController", HomeController);

// Set Routes
import routing from './routes'
app.config(routing);
