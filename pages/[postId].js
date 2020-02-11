import React from "react";
import fetch from "isomorphic-unfetch";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import img from  "../public/back1.png";

const BlogPost = ({ post }) => (
  <body>
    <div className="container">
      <Nav />   
      <div className="blog">
        <h2 className="blog-title">
          <Link href="/test">
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2>
        <div className="blog-text">
          <ReactMarkdown source={post.details} />
        </div>
        <div className="blog-date">{post.date}</div>
      </div>
      <Footer/> 
    </div>
      <style jsx>{`
      body{
        background-image:url(${img}) ;
        background-repeat:no-repeat;
        background-size:cover;
        background-attachment: fixed;
      }
        body .container {
          max-width: 1050px;
          width: 100%;
          margin: 0 auto;
        }
        body .container .blog{
          font-size: 20px;
          border-radius: 15px 15px 15px 15px;
          background-color:#ffffe8;
        }
        body .container .blog .blog-title {
          font-size: 26px;
          margin:20px;
        }
        body .container .blog .blog-text{
          margin:20px;
        }
        body .container .blog .blog-date {
          text-align: right;
          color: #7f7f7f;
          margin: 12px 0 48px 0;
        }
        a {
          color: #35459e;
          text-decoration: none;
        }
      `}</style>
    
  </body>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://zisankarsatar.herokuapp/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
