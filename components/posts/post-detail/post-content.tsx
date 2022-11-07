import Image from "next/legacy/image";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";

interface PostContentProps {
  post: {
    slug: string;
    title: string;
    image: string;
    date: string;
    content: string;
  };
}

interface CustomRendersProps {
  children?: React.ReactNode;
  paragraph: React.FC<{ node: any }>;
  node: { children: any[] };
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  // const customRenders = {
  //   image(image: { alt: string; src: string }) {
  //     return (
  //       <Image
  //         src={`/images/posts/${post.slug}/${image.src}`}
  //         alt={image.alt}
  //         width={600}
  //         height={300}
  //       />
  //     );
  //   },
  // };

  const customRenders: { [nodeType: string]: React.FC<CustomRendersProps> } = {
    //getting all the paragraphs
    p(paragraph) {
      const { node } = paragraph;
      //if we do render an image inside a paragraph
      //we will overwrite the image
      if (node.children[0].tagName === "img") {
        const image = node.children[0].properties;
        // console.log(image);

        return (
          <div className={classes.image}>
            <Image
              src={`${image.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      //if the paragraph is not an image, return the paragraph
      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenders}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
