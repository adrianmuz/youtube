var youtubeapp = angular.module('frameYoutube', []);

youtubeapp.controller('videoController', function($scope){
  $scope.youtubeLink = '';
  $scope.youtubeIframe = '';

  $scope.playVideo = function(){
    $scope.youtubeIframe = "https://www.youtube.com/embed/"+parseYouTubeId($scope.youtubeLink)+"?autoplay=true";
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