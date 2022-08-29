const data = [
	{
		id: 'Oma',
		mainGender: 'FEMALE',
		mainPartner: 'Opa'
	},
	{
		id: 'Opa',
		mainGender: 'MALE',
		mainPartner: 'Oma'
	},
	{
		id: 'Onkel F',
		parents: ['Opa', 'Oma'],
		mainGender: 'MALE',
		mainPartner: 'Tante M'
	},
	{
		id: 'Tante M',
		mainGender: 'FEMALE',
		mainPartner: 'Onkel F'
	},
	{
		id: 'Cousin J',
		parents: ['Onkel F', 'Tante M'],
		mainGender: 'FEMALE'
	},
	{
		id: 'Tante E',
		parents: ['Opa', 'Oma'],
		mainGender: 'FEMALE',
		mainPartner: 'Fritz'
	},
	{
		id: 'Onkel F',
		mainGender: 'MALE',
		mainPartner: 'Tante E'
	},
	{
		id: 'Cousin F',
		parents: ['Onkel F', 'Tante E'],
		mainGender: 'MALE',
		mainPartner: 'Anna'
	},
	{
		id: 'Cousin Partner A',
		mainGender: 'FEMALE',
		mainPartner: 'Cousin F'
	},
	{
		id: 'Neffe Q',
		parents: ['Cousin F', 'Cousin Partner A'],
		mainGender: 'MALE'
	},
	{
		id: 'Neffe P',
		parents: ['Cousin F', 'Cousin Partner A'],
		mainGender: 'MALE'
	},
	{
		id: 'Neffe A',
		parents: ['Cousin F', 'Cousin Partner A'],
		mainGender: 'MALE'
	},
	{
		id: 'Cousin S',
		parents: ['Onkel F', 'Tante E'],
		mainGender: 'MALE',
		mainPartner: 'Cousin Partner R'
	},
	{
		id: 'Cousin Partner R',
		mainGender: 'FEMALE',
		mainPartner: 'Cousin S'
	},
	{
		id: 'Neffe V',
		parents: ['Cousin S', 'Cousin Partner R'],
		mainGender: 'MALE'
	},
	{
		id: 'Neffe L',
		parents: ['Cousin S', 'Cousin Partner R'],
		mainGender: 'MALE'
	},
	{
		id: 'Nichte L',
		parents: ['Cousin S', 'Cousin Partner R'],
		mainGender: 'FEMALE'
	},
	{
		id: 'Cousine C',
		parents: ['Onkel F', 'Tante E'],
		mainGender: 'FEMALE',
		mainPartner: 'Matthias'
	},
	{
		id: 'Cousine Partner M',
		mainGender: 'MALE',
		mainPartner: 'Cousine C'
	},
	{
		id: 'Neffe Le',
		parents: ['Cousine Partner M', 'Cousine C'],
		mainGender: 'MALE'
	},
	{
		id: 'Papa',
		parents: ['Opa', 'Oma'],
		mainGender: 'MALE',
		mainPartner: 'Stiefm.'
	},
	{
		id: 'Stiefmama',
		mainGender: 'FEMALE',
		mainPartner: 'Papa'
	},
	{
		id: 'Mama',
		mainGender: 'FEMALE',
		mainPartner: 'Stiefpapa'
	},
	{
		id: 'Stiefpapa',
		mainGender: 'MALE',
		mainPartner: 'Mama'
	},
	{
		id: 'Bruder S',
		parents: ['Papa', 'Mama'],
		mainGender: 'MALE',
		mainPartner: 'Bruder Partner S'
	},
	{
		id: 'Bruder Partner S',
		mainGender: 'FEMALE',
		mainPartner: 'Bruder S'
	},
	{
		id: 'Bruder Ex-Partner J',
		mainGender: 'FEMALE'
	},
	{
		id: 'Neffe J',
		parents: ['Bruder S', 'Bruder Ex-Partner J'],
		mainGender: 'MALE'
	},
	{
		id: 'Nichte A',
		parents: ['Bruder S', 'Bruder Partner S'],
		mainGender: 'FEMALE'
	},
	{
		id: 'Ich',
		parents: ['Papa', 'Mama'],
		mainGender: 'MALE',
		mainPartner: 'Cy'
	},
	{
		id: 'Cy',
		mainGender: 'FEMALE',
		mainPartner: 'Ich'
	},
	{
		id: 'Sohn J',
		parents: ['Ich', 'Cy'],
		mainGender: 'MALE'
	},
	{
		id: 'Sohn B',
		parents: ['Ich', 'Cy'],
		mainGender: 'MALE'
	},
	{
		id: 'Sw M',
		parents: ['Papa', 'Stiefmama'],
		mainGender: 'FEMALE'
	},
	{
		id: 'Sw A',
		parents: ['Papa', 'Stiefmama'],
		mainGender: 'FEMALE'
	},
	{
		id: 'Br J',
		parents: ['Papa', 'Stiefmama'],
		mainGender: 'MALE'
	}
];