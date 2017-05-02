(function() {
var app = angular.module('myApp', []);

    app.controller('ourController', function($scope){

    $scope.wordList = [];
    $scope.phraseList = [];

    $scope.classColor = ['fancy', 'fancier'];

// add style one word
    $scope.addWordDec = function(){
      var item = $scope.words[Math.floor(Math.random()*$scope.words.length)];
      var style = $scope.classColor[Math.floor(Math.random()*$scope.classColor.length)];
      var obj = {name: item, cls: style};
      $scope.wordList.push(obj);

      }

//  one word
      $scope.addWord = function(){
        var item = $scope.words[Math.floor(Math.random()*$scope.words.length)];
        var obj = {name: item};
        $scope.wordList.push(obj);
        }


// more words
      $scope.addWordMore = function(){
        var item = $scope.sentences[Math.floor(Math.random()*$scope.sentences.length)];
        var obj = {name: item};
        $scope.phraseList.push( obj );
        }
//style and more words
          $scope.addWordMoreDec = function(){
            var item = $scope.sentences[Math.floor(Math.random()*$scope.sentences.length)];
            var style = $scope.classColor[Math.floor(Math.random()*$scope.classColor.length)];
            var obj = {name: item, cls: style};
            $scope.phraseList.push( obj );
            }



      $scope.sentences = ['are we there yet?',
                          'he hit me',
                          'I do not want to',
                          'She hit me',
                          'I think its dead',
                          'I pooped',
                          'I am not tired',
                          'What is that?'
                          ]


      $scope.words = ['yuck!',
            'mommy!',
            'daddy!',
            'why?',
            'ouch!',
            'wah!',
            'No!',
            'Yay',
            'Poop'
            ];



})
})();
