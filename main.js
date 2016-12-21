var youtubeapp = angular.module('frameYoutube', []);

youtubeapp.controller('videoController', function($scope){
  $scope.youtubeLink = 'j';
  $scope.youtubeId = '';

  $scope.playVideo = function(){
    $scope.youtubeId = "https://www.youtube.com/embed/"+parseYouTubeId($scope.youtubeLink)+"?autoplay=true";
  }

});

youtubeapp.filter('trustUrl', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });

function parseYouTubeId(url) {
    var regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    return (url.match(regex)) ? RegExp.$2 : url;
}