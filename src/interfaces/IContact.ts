export interface IContact {
	email: string;
	id: {
		name: string;
		value: string;
	};
	name: {
		first: string;
		last: string;
		title: string;
	};
	phone: string;
	picture: {
		large: string;
		medium: string;
		thumbnail: string;
	};
}

export interface IFullContact extends IContact {
	cell: string;
	dob: {
		age: number;
		date: string;
	};
	gender: string;
	location: {
		city: string;
		coordinates: {
			latitude: string;
			longitude: string;
		};
		country: string;
		postcode: number | string;
		state: string;
		street: {
			name: string;
			number: number;
		};
		timezone: {
			description: string;
			ofset: string;
		};
	};
	nat: string;
	registered: {
		age: number;
		date: string;
	};
}
