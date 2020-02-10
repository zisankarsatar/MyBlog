import React from 'react'
import Link from 'next/link'
import Head from "next/head";
import img from "../public/profil.jpg";

const Nav =() =>(
  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/public/favicon.ico" />
    </Head>
    <div className="hero"> 
      <div className="resim"><img src={img} /></div>  
      <h2 className="hero-title">Zişan KARSATAR</h2>
      <h4>Manisa Celal Bayar Üniversitesi</h4>
      <h5>Yazılım Mühendisliği</h5>
      <div className="hero-social-links">
        <Link href="/">
          <a className="social-link">Anasayfa &emsp;</a>
        </Link>
        <Link href="https://github.com/zisankarsatar">
          <a className="social-link">Github &emsp;</a>
        </Link>
        <Link href="https://twitter.com/ZKarsatar">
          <a className="social-link">Twitter &emsp;</a>
        </Link>
        <Link href="https://www.linkedin.com/in/zi%C5%9Fan-karsatar-b0a93a165/">
          <a className="social-link">LinkedIn</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
    .container{
      max-width: 650px;
      width: 100%;
      margin: 0 auto;
      color:#ffff;
      border-radius: 10px 10px 10px 10px;
    },
    .container .resim{
      
    }
    .container img{
      width:300px;
      aligin:right;
      box-shadow: 3px 2px 5px 1px #7f7f7f;
    }
    h2,h4,h5,h6{
      text-align:center;
      color: grey;
      font-size: 20px;
    },
    .container .hero {
      text-align: center;
      margin-top:20px;
      margin-bottom:30px;
    }
    .container .hero .hero-title{
      font-size: 38px;
      text-aligin:center;
      color:#007f00;
      margin-top:0;
    },
    .container .hero .social-link {
      margin-right: 8px;
      font-size:22px;
      margin-bottom:15px;
    }
    a {
      color: #35459e;
      text-decoration: none;
    }
    `}</style>
  </div>
);
export default Nav

/*
const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)
*/
