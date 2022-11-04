import Postsgrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";
import { Post } from "../modals/post.modal";

interface FeaturedPostsProps {
  posts: Post[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <Postsgrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
