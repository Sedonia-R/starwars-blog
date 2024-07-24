const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			people: [],
			vehicles: [],
			favorites: [],
			person: [],
			planet: [],
			vehicle: [],
		},
		actions: {
			getPlanets: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/planets");
					if(!resp.ok) {
						throw Error(resp.statusText)
					} 
					const planetList = await resp.json();

					for(let body of planetList.results) {
						const bodyDeets = await fetch(body.url);
						const bodyResults = await bodyDeets.json();
						setStore({
							planets: [...getStore().planets, bodyResults.result]
						})
					}
				} catch (error) {
					console.log(error)
				}
			},

			setPlanet: (id) => {
				try {
					for(let planet of getStore().planets) {
						if(id == planet.uid){
							setStore({
								planet: planet
							}) 
						}
					}
					console.log(getStore().planet)
				} catch (error) {
					console.log(error)
				}
			},

			getPeople: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/people");
					if(!resp.ok) {
						throw Error(resp.statusText)
					} 
					const peopleList = await resp.json();

					for(let body of peopleList.results) {
						const bodyDeets = await fetch(body.url);
						const bodyResults = await bodyDeets.json();
						setStore({
							people: [...getStore().people, bodyResults.result]
						})
					}
				} catch (error) {
					console.log(error)
				}
			},

			setPerson: (id) => {
				try {
					for(let person of getStore().people) {
						if(id == person.uid){
							setStore({
								person: person
							}) 
						}
					}
					console.log(getStore().person)
				} catch (error) {
					console.log(error)
				}
			},

			getVehicles: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/vehicles");
					if(!resp.ok) {
						throw Error(resp.statusText)
					} 
					const vehicleList = await resp.json();

					for(let body of vehicleList.results) {
						const bodyDeets = await fetch(body.url);
						const bodyResults = await bodyDeets.json();
						setStore({
							vehicles: [...getStore().vehicles, bodyResults.result]
						})
					}
				} catch (error) {
					console.log(error)
				}
			},
		}
	};
};

export default getState;
