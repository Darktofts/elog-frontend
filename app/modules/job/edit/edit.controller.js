(function () {
    'use strict';

    angular
        .module('elogbooks.job')
        .controller('JobEditController', ['jobEditResponse','$http', '$state', JobEditController]);

    function JobEditController(jobResponse, $http, $state) {
        var vm = this;
        vm.job = jobResponse;
        vm.stautsNames = [
            {
                id:0,
                name:'Open'
            },
            {
                id:1,
                name:'Progress'
            },
            {
                id:2,
                name:'Closed'
            }];
        vm.update = update;
 
        function update() {

            vm.result = {
                description : vm.job.description,
                status : vm.job.status
            };
           
            $http.put( 
                'http://localhost:8001/job/'+ vm.job.id,
                vm.result
                
            ).then(function (response) {
                $state.go('jobs.view', {id:vm.job.id});
            }, function () {
                console.log('Request Failed');
            });
        }
    };
})();
