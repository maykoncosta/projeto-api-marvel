angular.module('app').service("CharactersService", function($http, env){
    const urlBase = env.apiUrl;
    let params = {
        apikey: "4bd1c1b8e6ca585e6e5e6509febaf4ae",
        hash: "1acfdfa9a86d3e56ac67182a44b5692f",
        ts: 1,
    };
    this.apikeyExport = () =>{
    return `?apikey=${params.apikey}&hash=${params.hash}&ts=${params.ts}`;
    }

    this.getAllCharacters = (name, offset, limit)=> {
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
    this.getCharacterDetails = (characterId) =>{
        return $http.get(`${urlBase}/characters/${characterId}`,{
            params,
        })
    }
})