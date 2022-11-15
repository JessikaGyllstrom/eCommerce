import { request } from "../lib/datocms";
import Image from "next/image";
import { useState } from "react";

const HOMEPAGE_QUERY = `query  {
  allProducts {
    id
    name
    price
    mainImage {
      responsiveImage {
        src
      }
    }
  }
}`

export async function getStaticProps(context) {
  const data = await request({
      query: HOMEPAGE_QUERY,
      preview: context.preview,
  });
  return {
      props: { data },
  };
}

export default function Blog(props) {
  
  const { data } = props;
  const posts = data.allProducts;
console.log(posts)
const loaderProp =({ src, width, quality}) => {
  return `${src}?w=${width}&q=${quality || 75}`
}
  return (  
    <div className="gallery">
    {posts.map((data, key) => (
       <div key={data.id} className="cardcontainer" >
                <div className="card">
                  <div className="card-top">
      <Image
          src={data.mainImage.responsiveImage.src}
          alt={data.mainImage.responsiveImage.src}
          height={300}
          width={300}
          loader={loaderProp} />
          </div>
          <div className="card-bottom">
          <h4>{data.name}</h4>
          <h6>Price: {data.price}$<span><a href="#" className="btn btn-dark">Add to cart</a>
          </span></h6>
          </div>
          </div>



    </div>
    )


  )
    }
  </div>
)
}






