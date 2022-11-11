import ReactMarkdown from "react-markdown";
import Image from "next/legacy/image";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

// SyntaxHighlighter.registerLanguage("js", js);
// SyntaxHighlighter.registerLanguage("css", css);
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
  children: string | string[];
  paragraph: React.FC<{ node: any }>;
  node: { children: any[] };
  className: string;
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

    code(code) {
      // console.log(code);

      const { children, className } = code;
      const language = className.split("-")[1]; //// className is something like language-js => We need the "js" part here
      // console.log(children);

      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
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
