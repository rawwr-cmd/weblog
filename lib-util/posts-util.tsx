import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

interface PostData {
  slug: string;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  isFeatured: boolean;
  content: string;
}

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier: string) => {
  //removes the file extension(from .md to '')
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData: PostData = {
    slug: postSlug,
    //spread operator to save all the key value pairs of data
    // ...data,
    title: data.title,
    date: data.date,
    image: data.image,
    excerpt: data.excerpt,
    isFeatured: data.isFeatured,
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postfile) => {
    return getPostData(postfile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
};
