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

const getPostsData = (fileName: string) => {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  //removes the file extension(from .md to '')
  const postSlug = fileName.replace(/\.md$/, "");

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
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postfile) => {
    return getPostsData(postfile);
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
