(function () {
    'use strict';

    angular
        .module('elogbooks.job')
        .controller('JobListController', ['jobCollectionResponse', JobListController]);

    function JobListController(jobCollectionResponse) {
        var vm = this;
        vm.jobCollection = jobCollectionResponse;
        // Create an array of the name values of the status ID's
        // Then in the template apply the ID to the array to get the text values
        // Better way of doing this would be to convert the int to a string value in the API
        // I looked into to this found some one on StackOver flow suggesting creating a static method in the 
        // Entity , but not Documenation to back this up.
        // With more time I would research a way of applying this.
        vm.stautsNames = [ 'Open', 'Progress' , 'Closed'];
    }
})();
