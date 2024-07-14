import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const posts = await getCollection('articles');
	return rss({
		title: "CodeTricks",
		description: "CodeTricks is a blog about web development, programming, and technology.",
		site: "https://codetricks.xyz",
		items: posts.map((post) => ({
			...post.data,
			link: `/article/${post.slug}/`,
		})),
	});
}
