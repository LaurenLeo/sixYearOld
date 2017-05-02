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
        var item = $scope.sentences[Math.floor(Math.random()*$scope.sentences.length)];
        $scope.phraseList.push( item );
        }
      $scope.sentences = [{text: 'are we there yet?'},
                          {text: 'he hit me'},
                          {text: 'I do not want to'},
                          {text: 'She hit me'},
                          {text: 'I think its dead'},
                          {text: 'I pooped'},
                          {text: 'I am not tired'},
                          {text: 'What is that?'}
                          ]


      $scope.words = [{text: 'yuck!'},
              {text: 'mommy!'},
              {text: 'daddy!'},
              {text: 'why?'},
              {text: 'ouch!'},
              {text: 'wah!'},
              {text: 'No!'},
              {text: 'Yay'},
              {text: 'Poop'}
            ];
})
})();
