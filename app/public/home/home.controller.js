angular
  .module("app")
  .controller("HomeController", [
    "CharactersService",
    "$state",
    HomeController,
  ]);

function HomeController(charactersService, $state) {
  const vm = this;
  vm.characters = [];
  vm.searchName = "";
  vm.offSet = 0;
  vm.limit = 16;
  vm.totalItens = 0;
  vm.countCharacters = 0;
  vm.characterId = 0;
  
  vm.getCharacters = () => {
    charactersService
    .getAllCharacters(vm.searchName, vm.offSet, vm.limit)
    .then((response) => {
      vm.countCharacters += response.data.data.results.length;
      vm.totalItens = response.data.data.total;
      console.log(vm.characters)
      vm.characters = [];
      vm.characters = response.data.data.results;
      console.log(vm.characters)
    })
    .catch((error) => {
      console.log(error);
    });
  };

  vm.search = ()=>{
    vm.countCharacters = 0;
    vm.offSet = 0;
    if (vm.searchName == "") {
      vm.searchName = "";
    }
    if(!$state.go("home")){
      $state.go("home");

    }
      vm.getCharacters();
  }
  
  vm.nextPage = () =>{
    vm.offSet += vm.limit;
    vm.getCharacters();
  }

  vm.previousPage = () =>{
    if (vm.offSet !=0) {
      vm.countCharacters -= 2*vm.limit;
      console.log(vm.countCharacters);
      vm.offSet -= vm.limit;
      vm.getCharacters();
    }
  }
      
  vm.seeDetails = (character) => {
    vm.characterId = character.id;
    $state.go("details", {characterId: character.id});
  }
  vm.init = ()=>{
    vm.getCharacters();
  }

  vm.init();
}