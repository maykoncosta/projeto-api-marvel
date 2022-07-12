angular.module('app').controller("CharactersDetailsController", ["$stateParams", "CharactersService",CharactersDetailsController]);

function CharactersDetailsController($stateParams, charactersService) {
    const vm = this;
    vm.characterId = $stateParams.characterId;
    vm.charactersDetails =[];
    vm.characterComicsCount = [];
    vm.characterSeriesCount = [];
    vm.characterStoriesCount = [];
    vm.characterItems = [];
    vm.apiKey = charactersService.apikeyExport();

    vm.getDetails = (characterId) => {
        charactersService
        .getCharacterDetails(characterId)
        .then((response) => {
          vm.charactersDetails = response.data.data.results[0];
          vm.characterComicsCount = vm.charactersDetails.comics.items;
          vm.characterSeriesCount = vm.charactersDetails.series.items;
          vm.characterStoriesCount = vm.charactersDetails.stories.items;
        })
        .catch((error) => {
          console.log(error);
        });
      };

      vm.getComicsByCharacter = (characterId) => {
        charactersService
        .getCharacterComics(characterId)
        .then((response) => {
          vm.characterItems = response.data.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
      };

      vm.getStoriesByCharacter = (characterId) => {
        charactersService
        .getCharacterStories(characterId)
        .then((response) => {
          vm.characterItems = response.data.data.results;

        })
        .catch((error) => {
          console.log(error);
        });
      };

      vm.getSeriesByCharacter = (characterId) => {
        charactersService
        .getCharacterSeries(characterId)
        .then((response) => {
          vm.characterItems = response.data.data.results;

        })
        .catch((error) => {
          console.log(error);
        });
      };

      vm.getDetails(vm.characterId);
}