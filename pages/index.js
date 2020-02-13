import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Nav from "../components/nav"; 
import Footer from "../components/footer";
import img from "../public/back1.png";

const Home = ({posts}) => (
  <body>
    <Nav />
    <div className="container">

      {posts.map(post => (
        <div className="blog">
          <h2 className="blog-title">
            <Link href={post.slug}>
              <a className="blog-title-link">{post.title}</a>
            </Link>
          </h2>
          <div className="blog-text">
            <ReactMarkdown source={post.details} />
          </div>
          <div className="blog-date">{post.date}</div>
        </div>
      ))}
      <Footer />
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
        color: #4c4c4c;
        margin: 12px 0 48px 0;
      }
      a {
        color: #35459e;
      }
    `}</style>
  
</body>
);

Home.getInitialProps = async ({ req ,err}) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  if(err){
    console.log(err)
  }else{
    const res = await fetch(`http://localhost:3000/api/posts`);//veriyi alması gereken yer
    const json = await res.json();
    console.log(json);
    return { posts: json.posts };
  }
};

export default Home 
