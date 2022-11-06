import AllPosts from "../../components/homepage/all-posts";
import { getAllPosts } from "../../lib/posts-util";

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
  return <AllPosts posts={posts} />;
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
