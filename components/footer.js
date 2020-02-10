import React from 'react'
import Link from 'next/link'


const Footer =() =>(
    <div className="container">
       <h4> Next.js ile oluşturulmuş basit Blog sayfasıdır. </h4>
       <h5> 09.02.2020 </h5>
      <style jsx>{`
      .container{
        max-width: 1050px;
        width: 100%;
        color:black;
        border-radius: 10px 10px 0px 0px;
        background-color:#ffffe8;
        font-size: 20px;
        text-align:center;
      }
      .container h4{
        margin: 20px;
      }
      
      `}</style>
    </div>
  );
  export default Footer