export default (context, inject) => {

	const utils = {};

	let formatter = new Intl.NumberFormat("en-IN", {
		// style: "currency",
		// currency: "INR"
	});

	utils.npr = (price) => {
		return formatter.format(price);
	}

	utils.toDateString = (date) => {
		let d = new Date(date);
		const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
		const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
		const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
		return `${month} ${day}, ${year}`;
	}
	utils.flavours = [
		// {
		//   id: 1,
		//   image: "/images/customization/flavors/<type>/001.png",
		//   icon: "/images/customization/flavor_options/001.png",
		//   value: "Top: White/Bottom: White",
		//   rate: 0
		// },
		// {
		//   id: 2,
		//   image: "/images/customization/flavors/<type>/002.png",
		//   icon: "/images/customization/flavor_options/002.png",
		//   value: "Top: Chocolate/Bottom: Chocolate",
		//   rate: 150
		// },
		// {
		//   id: 3,
		//   image: "/images/customization/flavors/<type>/003.png",
		//   icon: "/images/customization/flavor_options/003.png",
		//   value: "Top: White/Bottom: Chocolate"
		// },
		// {
		//   id: 4,
		//   image: "/images/customization/flavors/<type>/004.png",
		//   icon: "/images/customization/flavor_options/004.png",
		//   value: "Top: Chocolate/Bottom: White"
		// },
		{
			id: 5,
			image: "/images/customization/flavors/<type>/005.png",
			icon: "/images/customization/flavor_options/005.png",
			value: "Red Velvet",
			rate: 400,
		},
		{
			id: 6,
			image: "/images/customization/flavors/<type>/006.png",
			icon: "/images/customization/flavor_options/006.png",
			value: "Black Forest",
			rate: 0,
		},
		{
			id: 7,
			image: "/images/customization/flavors/<type>/007.png",
			icon: "/images/customization/flavor_options/007.png",
			value: "Blueberry",
			rate: 100,
		},
		{
			id: 8,
			image: "/images/customization/flavors/<type>/008.png",
			icon: "/images/customization/flavor_options/008.png",
			value: "Butter Scotch",
			rate: 100,
		},
		{
			id: 9,
			image: "/images/customization/flavors/<type>/009.png",
			icon: "/images/customization/flavor_options/009.png",
			value: "Chocolate",
			rate: 150,
		},
		{
			id: 10,
			image: "/images/customization/flavors/<type>/010.png",
			icon: "/images/customization/flavor_options/010.png",
			value: "Chocolate Truffel",
			rate: 400,
		},
		{
			id: 11,
			image: "/images/customization/flavors/<type>/011.png",
			icon: "/images/customization/flavor_options/011.png",
			value: "Mocha",
			rate: 200,
		},
		{
			id: 12,
			image: "/images/customization/flavors/<type>/012.png",
			icon: "/images/customization/flavor_options/012.png",
			value: "Oreo",
			rate: 200,
		},
		{
			id: 13,
			image: "/images/customization/flavors/<type>/013.png",
			icon: "/images/customization/flavor_options/013.png",
			value: "Vanilla",
			rate: 0,
		},
		{
			id: 14,
			image: "/images/customization/flavors/<type>/014.png",
			icon: "/images/customization/flavor_options/014.png",
			value: "White Chocolate",
			rate: 300,
		},
		{
			id: 15,
			image: "/images/customization/flavors/<type>/015.png",
			icon: "/images/customization/flavor_options/015.png",
			value: "White Forest",
			rate: 0,
		},
	];
	inject('utils', utils);
}