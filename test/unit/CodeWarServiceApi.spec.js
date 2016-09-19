describe('CodeWarsApiService', function(){
  beforeEach(module('app'));

  var CodeWarsApiService, httpBackend;

  var codeWarsData = {
  	"username": "harrywynnwill",
  	"name": "Harry Wynn Williams",
  	"honor": 110,
  	"clan": "makers academy",
  	"leaderboardPosition": 14514,
  	"skills": [],
  	"ranks": {
  		"overall": {
  			"rank": -6,
  			"name": "6 kyu",
  			"color": "yellow",
  			"score": 195
  		},
  		"languages": {
  			"ruby": {
  				"rank": -6,
  				"name": "6 kyu",
  				"color": "yellow",
  				"score": 174
  			},
  			"javascript": {
  				"rank": -8,
  				"name": "8 kyu",
  				"color": "white",
  				"score": 13
  			},
  			"csharp": {
  				"rank": -8,
  				"name": "8 kyu",
  				"color": "white",
  				"score": 10
  			},
  			"java": {
  				"rank": -8,
  				"name": "8 kyu",
  				"color": "white",
  				"score": 4
  			}
  		}
  	},
  	"codeChallenges": {
  		"totalAuthored": 0,
  		"totalCompleted": 65
  	}
  }
;



  beforeEach(inject(function($httpBackend, _CodeWarsApiService_){
    CodeWarsApiService = _CodeWarsApiService_;
    httpBackend = $httpBackend;
  }));

  it('fetches codewars data', function(){
    httpBackend.expectGET("https://www.codewars.com/api/v1/users/harrywynnwill").respond(codeWarsData);
    expect(codeWarsData).toEqual(codeWarsData)

  });


});
