'use strict';

angular.module('vetDetails', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('vetDetails', {
                parent: 'app',
                url: '/vets/:vetId',
                template: '<vet-details></vet-details>'
            })
    }]);
