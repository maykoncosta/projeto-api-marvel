angular.module('app').component("searchCharacter", {
    bindings: {
        search: "&",
        searchName: "="
    },
    templateUrl: "public/features/characters/components/seachCharacter/searchCharacter.html",
    controller: function(){
    },
    controllerAs: "ctrl"                           
})