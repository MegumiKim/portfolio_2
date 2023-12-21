import { createClient } from "@sanity/client";
import type { Project } from "../types/Project";
import groq from "groq";
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-03-20' // date of setup
});


export async function getProjects(): Promise<Project[]> {
  return await client.fetch(
    groq`*[_type == 'project']{
      _id,
      _createdAt,
      name,
      "slug":slug.current,
      'image':image.asset->url,
      url,   
      stack,
      body
  }`
  );
}

// groq`*[_type == 'project']{
//   _id,
//   _createdAt,
//   title,
//   "slug":slug.current,
//   'image':image.asset->url,
//   url,
//   content
// }`