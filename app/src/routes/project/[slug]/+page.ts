import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getProject } from '../../../sanity/sanity-utils';

// export const ssr = false;

export const load = (async ({ params }) => {
	const data = await getProject(params.slug);
	// console.log(project);
	if (data) return data;

	throw error(404, 'Not found');
}) satisfies PageLoad;
