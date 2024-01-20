import { createClient } from "@sanity/client";
// import type { Project } from "../types/Project";
import groq from "groq";
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import type { PortableTextBlock } from "sanity";

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
      excerpt
  }`
  );
}
export async function getProject(slug:string): Promise<Project> {
  return await client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      'image':image.asset->url,
        stack,
        excerpt,
        body, 
        url,
        gitHub,
        name,
        _id
      
    }`,{slug}
  );
}

export type Project = {
  name: string;
  image: string;
  excerpt:string;
  stack:[],
 _id: string;
 _createdAt: Date;
 slug: string;
 url: string;
 gitHub?: string;
 body: PortableTextBlock[];
};
