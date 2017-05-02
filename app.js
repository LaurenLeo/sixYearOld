(function() {
var app = angular.module('myApp', []);

    app.controller('ourController', function($scope){

    $scope.wordList = [];
    $scope.phraseList = [];

    $scope.addWord = function(){
      var item = $scope.words[Math.floor(Math.random()*$scope.words.length)];
      $scope.wordList.push( item );
      }


// need to change this function to pull more words out of array
      $scope.addWordMore = function(){
        var item = $scope.words[Math.floor(Math.random()*$scope.words.length)];
        $scope.phraseList.push( item );
        }



      $scope.words = [{text: 'yuck!'},
              {text: 'mommy!'},
              {text: 'daddy!'},
              {text: 'are we there yet?'},
              {text: 'why?'},
              {text: 'he hit me'},
              {text: 'ouch!'}
            ];
})
})();
