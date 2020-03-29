export const people = [{
		id: 1,
		name: "jeinsong",
		age: 22,
		gender: "male",
	},
	{
		id: 2,
		name: "songjein",
		age: 24,
		gender: "male",
	},
	{
		id: 3,
		name: "jesongin",
		age: 23,
		gender: "female",
	}
];


export const getById = id => {
	const filteredPeople = people.filter(person => person.id === id);
	return filteredPeople[0];
}
