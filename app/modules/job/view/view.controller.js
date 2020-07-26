(function () {
    'use strict';

    angular
        .module('elogbooks.job')
        .controller('JobViewController', ['jobResponse','$http', '$state', JobViewController]);

    function JobViewController(jobResponse, $http, $state) {
        var vm = this;
        vm.job = jobResponse;
        vm.stautsNames = [ 'Open', 'Progress' , 'Closed'];

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
                alert('Job updated');
            }, function () {
                console.log('Request Failed');
            });
        }
    };
})();
