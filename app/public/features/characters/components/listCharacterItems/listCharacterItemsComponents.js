angular.module('app').component("listCharacterItems", {
    bindings: {
        characterItem: "<",
        getComicsByCharacter:"&",
    },
    templateUrl: "public/features/characters/components/listCharacterItems/listCharacterItems.html",
    controller: function(){
        this.name = "Maykon";
    },
    controllerAs: "ctrl"                           
})