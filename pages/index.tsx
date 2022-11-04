import { Fragment } from "react";
import Hero from "../components/homepage/hero";
import FeaturedPosts from "../components/homepage/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "nextjs.png",
    excerpt:
      "NextJs is a the React Framework for Production. NextJs adds some amazing features to React, some of which we will explore in this post.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting Started with NextJS",
    image: "nextjs.png",
    excerpt:
      "NextJs is a the React Framework for Production. NextJs adds some amazing features to React, some of which we will explore in this post.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJS",
    image: "nextjs.png",
    excerpt:
      "NextJs is a the React Framework for Production. NextJs adds some amazing features to React, some of which we will explore in this post.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJS",
    image: "nextjs.png",
    excerpt:
      "NextJs is a the React Framework for Production. NextJs adds some amazing features to React, some of which we will explore in this post.",
    date: "2022-02-10",
  },
];
const Homepage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default Homepage;
