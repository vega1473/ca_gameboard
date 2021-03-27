app.directive('gameScores',function(){
  return {
    restrict: 'E',
    scope: {
      info: "="
    },
    templateUrl: 'js/directives/game.html'
  };
});
