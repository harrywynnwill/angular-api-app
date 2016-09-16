describe('CodeWarsApiService', function(){
  beforeEach(module('app'));

  var CodeWarsApiService, httpBackEnd;
  var codeWarsData = {test_data};
  beforeEach(inject(function(_CodeWarsApiService_, $httpBackend){
    CodeWarsApiService = _CodeWarsApiService_;
    httpBackend = $httpBackend;
  }));

  it('fetches codewars data', function(){
    httpBackend.expectGET("https://www.codewars.com/api/v1/users/harrywynnwill").respond(codeWarsData);
    expect(codeWarsData).toEqual(codeWarsData)

  });


});
