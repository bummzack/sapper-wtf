import posts from './_posts.js';

const data = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug
	};
}));

async function getPosts() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(data);
		}, 5000);
	});
}

export async function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	const contents = await getPosts();

	res.end(contents);
}
