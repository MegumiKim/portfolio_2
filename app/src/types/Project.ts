import type { PortableTextBlock } from "sanity";

export type Project = {
  name: string;
  image: string;
  excerpt:string;
  stack:[],
 _id: string;
 _createdAt: Date;
 slug: string;
 url: string;
 body: PortableTextBlock[];
};
