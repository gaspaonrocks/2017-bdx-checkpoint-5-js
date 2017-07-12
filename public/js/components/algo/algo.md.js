'use strict';

import algo1 from './algo1/algo1';

let algoModule = angular.module('app.algo', [])
    .component('algo1', algo1)
    .config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        /*
          Define a state with name 'blog' this state is abstract and url is empty (root of application)
          template is ui-view it's used to display nested views
        */
        $stateProvider
            .state('algo', {
                url: '/algo',
                abstract: true,
                templateUrl: 'js/components/algo/algo.md.html'
            })
            .state('algo.algo1', {
                url: '/algo1',
                template: '<algo1></algo1>'
            })
    }])
    .name

export default algoModule