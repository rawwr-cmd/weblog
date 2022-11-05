import AllPosts from "../../components/homepage/all-posts";

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

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
