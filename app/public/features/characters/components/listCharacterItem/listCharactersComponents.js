angular.module('app').component("listCharacterItem", {
    bindings: {
        character: "<",
        seeDetails:"&",
    },
    templateUrl: "public/features/characters/components/listCharacterItem/listCharacters.html",
    controller: function(){
        this.name = "Maykon";
    },
    controllerAs: "ctrl"                           
})