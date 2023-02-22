angular.module('learndigest', []);

angular.module('learndigest').controller('PlaygroundCtrl', function($scope) {//CRIANDO UM MODULO JA COM CONTROLLER
    $scope.welcome = "Welcome to my page"

    $scope.resetNumber = function(){
        $scope.number_choice = 0;
    }
});

angular.module('learndigest').controller('InternalCtrl', function($scope) {
    $scope.variables = "SCOPE LOCAL " + $scope.welcome
});