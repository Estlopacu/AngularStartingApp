import angular from 'angular';
import ngRoute from 'angular-route';

import HomeController from './partials/Home/HomeController.js'
import routing from './routes'

const app = angular.module("app", ["ngRoute"]);

app.controller("HomeController", HomeController);

app.config(routing);
