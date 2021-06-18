export default (context, inject) => {

	const utils = {};

	utils.toDateString = (date) => {
		let d = new Date(date);
		const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
		const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
		const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
		return `${month} ${day}, ${year}`;
	}

	inject('utils', utils);
}