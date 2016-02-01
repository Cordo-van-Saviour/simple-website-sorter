websiteSorter.controller('HomeCtrl', ['$scope', '$modal',

function($scope, $modal) {
  $scope.groupName = '';
  $scope.siteName = '';
  $scope.siteColor = '';
  $scope.siteGroups = [];

  $scope.selectedGroup = '';
  $scope.groups = [
    'horror', 'action', 'comedy'
  ];

  $scope.colors = [
    'red', 'green', 'blue', 'yellow', 'turquoise'
  ];

  $scope.sites = [];
  console.log($scope.groups);

  $scope.addGroup = function () {

    $scope.groups.push($scope.groupName)
    $scope.groupName = ''

  };

  $scope.addSite = function () {

    $scope.sites.push({
      'id': generateID(),
      'name': $scope.siteName,
      'color': $scope.siteColor,
      'groups': angular.copy($scope.siteGroups)
    })
  };

  $scope.toggleSelection = function toggleSelection(group) {
    var idx = $scope.siteGroups.indexOf(group);

    if (idx > -1) {
      $scope.siteGroups.splice(idx, 1)
    }
    else {
      $scope.siteGroups.push(group)
    }
  };

  $scope.selectGroup = function (group) {
    $scope.selectedGroup = group;
    console.log($scope.sites)
  };

  function generateID() {

    if (typeof $scope.sites.last() == 'undefined') {
      return 1
    }

    return parseInt($scope.sites.last().id) + 1
  }

  Array.prototype.last = function () {
    return this[this.length - 1]
  };

  $scope.filterByGroup = function (element) {

    if ($scope.selectedGroup == '') {
      return true
    }

    return element.groups.indexOf($scope.selectedGroup) != -1

  };

  $scope.deleteSite = function (site) {
    var index = $scope.sites.indexOf(site);
    if (index != -1) {
      $scope.sites.splice(index, 1)
    }
  };

  $scope.deleteGroup = function (group) {
    var index = $scope.groups.indexOf(group);
    if (index != -1) {
      $scope.groups.splice(index, 1)
    }
  };


  $scope.openSite = function () {
    var modalInstance = $modal.open({
      templateUrl: 'app/popup.html',
      controller: 'HomeCtrl'
    });
  };
  $scope.openGroup = function () {
    var modalInstance = $modal.open({
      templateUrl: 'app/popup-group.html',
      controller: 'HomeCtrl'
    });
  };



//  $scope.close = function () {
//    var modalInstance = $modal.close();
//  };
}
]
);

