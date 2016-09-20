app.controller('GitHubController', ['$scope', 'GitHub', function($scope, GitHub) {


	$scope.repos;
	$scope.data;
	$scope.avatar;
	$scope.repoCount;
	$scope.followers;
	$scope.following;
	$scope.chartData;
	$scope.updatedAt;
	$scope.myDataSource = {
		chart: {
			caption: "Language breakdown",
			centerLabel: "$label: $value",
			theme: "fint",
			showPercentValues: "1",

		},

		data: [{
			"label": "Ruby",
			"value": 32
		}, {
			"label": "JavaScript",
			"value": 17
		}, {
			"label": "null",
			"value": 10
		}, {
			"label": "Java",
			"value": 1
		}, {
			"label": "C#",
			"value": 1
		}]




	};







	$scope.propertyName = 'watchers_count';
	$scope.reverse = true;

	$scope.sortBy = function(propertyName) {
		$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
		$scope.propertyName = propertyName;
	};


	GitHub.getUserInfo()
		.then(function(response) {
			_getAccountInfo(response);

		});

	// GitHub.getRepos().then(function(response){
	//   $scope.repos = response;
	//   return response
	// });

	GitHub.getRepos().then(function(response) {
			$scope.repos = response;

			return response;
		})
		.then(function(response) {
			return (_getLanguageCount(response));
		})
		.then(function(response) {


			$scope.chartData = _countLanguages(response)


		})

	// $scope.myDataSource = {
	//                 chart: {
	//                     caption: "Language breakdown",
	//                     centerLabel: "$label: $value",
	//                     theme: "fint",
	//                     showPercentValues: "1",
	//
	//                 },
	//
	//                 data: $scope.chartData
	//
	// };



	function _getAccountInfo(response) {
		$scope.avatar = response.avatar_url;
		$scope.repoCount = response.public_repos;
		$scope.followers = response.followers;
		$scope.following = response.following;
		$scope.updatedAt = response.updated_at;
	}


	function _getLanguageCount(response) {
		var language = [];
		for (var repo in response) {
			language.push(response[repo].language);
		}
		return language;
	}

	function _countLanguages(array) {
		var count = {};
		var data = [];
		for (var language in array) {
			count[array[language]] = (count[array[language]] || 0) + 1;
		}
		for (language in count) {
			var item = count[language];
			data.push({
				"label": language,
				"value": item
			});
		}
		return data;
	}



	function _generateDataTable(hash) {
		var data = []
		for (language in hash) {
			var item = hash[language];
			data.push({
				"label": language,
				"value": item
			});
		}
		return data;
	}

}]);
