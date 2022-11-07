import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib-util/posts-util";
interface PostDetailPageProps {
  post: {
    slug: string;
    title: string;
    image: string;
    date: string;
    content: string;
  };
}

const PostDetailPage: React.FC<PostDetailPageProps> = ({ post }) => {
  return <PostContent post={post} />;
};

export const getStaticProps = async (context: { params: any }) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
