import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/homepage/all-posts";
import { getAllPosts } from "../../lib-util/posts-util";

interface AllPostsPageProps {
  posts: {
    slug: string;
    title: string;
    image: string;
    date: string;
    excerpt: string;
  }[];
}

const AllPostsPage: React.FC<AllPostsPageProps> = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all my posts" />
      </Head>
      <AllPosts posts={posts} />;
    </Fragment>
  );
};

export const getStaticProps = () => {
  const allPostsData = getAllPosts();

  return {
    props: {
      posts: allPostsData,
    },
  };
};

export default AllPostsPage;
