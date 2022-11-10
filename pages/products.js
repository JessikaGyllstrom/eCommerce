import { request } from "../lib/datocms";
import Image from "next/image";

const HOMEPAGE_QUERY = `query  {
  allProducts {
    id
    price
    name
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
export default function Items(props) {
  const { data } = props;
  const posts = data.allProducts;
  return (
    <div>
      <div>
        {posts.map((p) => (
          <Itemtable key={p.id} data={p} />        
        ))}
      </div>
    </div>
  );
}
const loaderProp =({ src }) => {
  return `${src}`;
}
const Itemtable = (props) => {
const { data } = props;
return (
  <div >
    <div style={{ display: "flex", justifyContent: "center", width: "100%"}}>
      <div style={{ width: "40%"}}>
        <div class="col">
        </div>
      <div >
      <Image style={{ layout: "fill"}}
          src={data.mainImage.responsiveImage.src}
          alt={data.mainImage.responsiveImage.src} 
          height={300}   
          width={300}  
          loader={loaderProp}/>
      </div>
      <div class="col">
      <div>
        <p className="card-text">{data.name}</p><span></span>
        <p className="card-text">Price: {data.price}</p>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}
