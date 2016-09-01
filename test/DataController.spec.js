descibe('app', function(){
  beforeEach(module('app'));
  beforeEach(inject(function($controller){
    ctrl = $controller('controller');
  }));
  describe('#languageCounter', function(){
    it('counts the amount of languages from json file',function(){
      expect(ctrl.languageCounter()).toEqual(1)
    });
  });
})
