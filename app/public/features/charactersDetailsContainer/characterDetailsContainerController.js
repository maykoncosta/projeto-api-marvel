angular.module('app').controller("CharactersDetailsController", ["$stateParams", "CharactersService",CharactersDetailsController]);

function CharactersDetailsController($stateParams, charactersService) {
    const vm = this;
    vm.characterId = $stateParams.characterId;
    vm.charactersDetails =[];
    vm.characterComicsItems = [];
    vm.characterSeriesItems = [];
    vm.characterStoriesItems = [];
    vm.apiKey = charactersService.apikeyExport();

    vm.getDetails = (characterId) => {
        charactersService
        .getCharacterDetails(characterId)
        .then((response) => {
          vm.charactersDetails = response.data.data.results[0];
          vm.characterComicsItems = vm.charactersDetails.comics.items;
          vm.characterSeriesItems = vm.charactersDetails.series.items;
          vm.characterStoriesItems = vm.charactersDetails.stories.items;
          console.log(vm.apiKey);
          console.log(vm.charactersDetails.thumbnail.path);
        })
        .catch((error) => {
          console.log(error);
        });
      };

      vm.getDetails(vm.characterId);
}