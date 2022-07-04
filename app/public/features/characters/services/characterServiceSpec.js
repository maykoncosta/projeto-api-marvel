describe('tests', function(){
    var characterTest;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function(CharactersService){
        characterTest = CharactersService;
    }))

    it('Serviço existe?',function(){
        expect(characterTest).toBeDefined();
    })
})