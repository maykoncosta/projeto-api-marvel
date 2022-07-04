angular.module('app').service("CharactersService", function($http, env){
    const urlBase = env.apiUrl;
    const vm = this;

    let params = {
        apikey: "5a6fb8e8a9f6c2ade1a5c13c01b1ba40",
        hash: "74f3a589a2580a1b87c962f310325afd",
        ts: 1,
    };
    vm.apikeyExport = () =>{
    return `?apikey=${params.apikey}&hash=${params.hash}&ts=${params.ts}`;
    }

    vm.getAllCharacters = (name, offset, limit)=> {
        params["offset"] = offset;
        params["limit"] = limit;
        console.log(params)
        
        delete params.nameStartsWith;

        if (name != null && name != "" && name != undefined) {
            params["nameStartsWith"] = name;
        };
        
        return $http.get(`${urlBase}/characters`,{
            params,
        });
    };
    vm.getCharacterDetails = (characterId) =>{
        return $http.get(`${urlBase}/characters/${characterId}`,{
            params,
        })
    }

    vm.getCharacterComics = (characterId) =>{
        return $http.get(`${urlBase}/characters/${characterId}/comics`,{
            params,
        })
    }

    vm.getCharacterSeries = (characterId) =>{
        return $http.get(`${urlBase}/characters/${characterId}/series`,{
            params,
        })
    }

    vm.getCharacterStories = (characterId) =>{
        return $http.get(`${urlBase}/characters/${characterId}/stories`,{
            params,
        })
    }
})