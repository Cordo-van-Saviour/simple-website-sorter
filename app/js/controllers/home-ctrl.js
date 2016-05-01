websiteSorter.controller('HomeCtrl', ['$scope',
      function($scope) {
        $scope.groupName = '';
        $scope.siteName = '';
        $scope.siteColor = '';
        $scope.siteGroups = ['all'];

        $scope.selectedGroup = '';
        $scope.groups = [
          'unsorted', 'search engine', 'social'
        ];

        $scope.colors = [
          'red', 'green', 'blue', 'yellow', 'turquoise'
        ];

        $scope.sites = [];

        $scope.popupShowingSite = false;

        $scope.showPopupSite = function showPopupSite () {
          $scope.popupShowingSite = true;
        };

        $scope.hidePopupSite = function hidePopupSite() {
          $scope.popupShowingSite = false;
        };

        $scope.popupShowingGroup = false;

        $scope.showPopupGroup = function showPopupGroup () {
          $scope.popupShowingGroup = true;
        };

        $scope.hidePopupGroup = function hidePopupGroup() {
          $scope.popupShowingGroup = false;
        };


        $scope.addGroup = function () {

          if ($scope.groupName != '') {
            $scope.groups.push($scope.groupName);
            //alert('Group "' + $scope.groupName + '" saved successfully!');
            $scope.groupName = '';
            $scope.popupShowingGroup = false;
          } else {
            //alert('You need to add group name!');
          }
        };

        $scope.addSite = function () {
          if ($scope.siteName != '') {
            if ($scope.siteGroups == 'all') {
              $scope.siteGroups = ['all', 'unsorted']
            }
            $scope.sites.push({
              'id': generateID(),
              'name': $scope.siteName,
              'color': $scope.siteColor,
              'groups': angular.copy($scope.siteGroups)
            });
            //alert('Website "' + $scope.siteName + '" saved successfully!');
            $scope.popupShowingSite = false;
          } else {
            //alert('You need to add website name!');
          }
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
      }
    ]
);

websiteSorter.controller('ChildCtrl', ["$scope",
  function($scope) {
   $scope.render = function render() {
     //var exportJSON = JSON.stringify($scope.sites);
     document.getElementById("showJSON").innerHTML = JSON.stringify($scope.sites);
   };
  }
]);

