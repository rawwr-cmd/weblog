import { Fragment } from "react";
import Hero from "../components/homepage/hero";
import FeaturedPosts from "../components/homepage/featured-posts";
import { getFeaturedPosts } from "../lib-util/posts-util";

interface HomepageProps {
  posts: {
    slug: string;
    title: string;
    image: string;
    date: string;
    excerpt: string;
  }[];
}

const Homepage: React.FC<HomepageProps> = ({ posts }) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  console.log("hi");
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default Homepage;
