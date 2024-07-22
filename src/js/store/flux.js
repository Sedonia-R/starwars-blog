const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			planet: [],
			people: [],
			person: [],
			species: [],
			oneSpecies: [],
			vehicles: [],
			vehicle: [],
			starships: [],
			starship: [],
		},
		actions: {
			getPeople: async () => {
				const response = await fetch
					('https://www.swapi.tech/people/', {
						method: 'GET'
					})
				const body = await response.json()
				setStore({
					people: body.people
				})
				console.log(people)
			},
			getPerson: async (id) => {
				const response = await fetch
					(`https://www.swapi.tech/people/${id}`, {
						method: 'GET'
					})
				const body = await response.json()
				setStore({
					people: body.people
				})
				console.log(people)
			},
		}
	};
};

// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.error(err))

export default getState;
