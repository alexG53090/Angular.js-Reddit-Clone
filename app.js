angular.module("babysFirst", [])
  .controller("babysFirstController", function($scope, $http){
    var newPost = {};
    	$scope.addPost = function (postData) {
        postData.date = Date.now();
        postData.votes = 0;
        postData.comments = [];
        $scope.posts.push(angular.copy(postData));
        $scope.postData = {};
        $scope.newpost = false;
     	};
    // freakin data, mang!
    $scope.posts = [
      {
        "title": "Sweet post 1",
        "author": "Sweet Author 1",
        "image": "http://www.preview-art.com/previews/06-2012/bg/Whatcom_Turner-Populat2-300.jpg",
        "description": "Sweet description 1",
        "votes": 10,
        "comments": ['apple', 'banana', 'orange'],
      },
      {
        "title": "Sweet post 2",
        "author": "Sweet Author 1",
        "image": "https://s-media-cache-ak0.pinimg.com/736x/32/2c/5e/322c5e47f5171151c78f7d9e1ad1353c.jpg",
        "description": "Sweet description 1",
        "votes": 10,
        "comments": ['apple', 'banana', 'orange'],
      },
      {
        "title": "Sweet post 3",
        "author": "Sweet Author 1",
        "image": "http://www.preview-art.com/previews/06-2012/bg/Whatcom_Turner-Populat2-300.jpg",
        "description": "Sweet description 1",
        "votes": 10,
        "comments": ['apple', 'banana', 'orange'],
      },
      {
        "title": "Sweet post 2",
        "author": "Sweet Author 1",
        "image": "https://s-media-cache-ak0.pinimg.com/736x/32/2c/5e/322c5e47f5171151c78f7d9e1ad1353c.jpg",
        "description": "Sweet description 1",
        "votes": 10,
        "comments": ['apple', 'banana', 'orange'],
      },
      {
        "title": "Sweet post 3",
        "author": "Sweet Author 1",
        "image": "http://www.preview-art.com/previews/06-2012/bg/Whatcom_Turner-Populat2-300.jpg",
        "description": "Sweet description 1",
        "votes": 10,
        "comments": ['apple', 'banana', 'orange'],
      },
    ]
  })
