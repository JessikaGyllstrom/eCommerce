import { request } from "../lib/datocms";
import Image from "next/image";

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
  });
  return {
      props: { data },
  };
}

export default function Blog(props) {
  const { data } = props;
  const posts = data.allProducts;
  const loaderProp =({ src, width, quality}) => {
  return `${src}?w=${width}&q=${quality || 75}`
}
  return (  
    <div className="gallery">
    {posts.map((data, key) => (
        
        <div key={data.id} className="cardcontainer">
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
            <h6>Price: {data.price}$<span>
            <button
                    className="snipcart-add-item"
                    data-item-id={data.id}
                    data-item-image={data.mainImage.responsiveImage.src}
                    data-item-name={data.name}
                    data-item-url="/"
                    data-item-price={data.price}
                >
                    Add to Cart
            </button>
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







