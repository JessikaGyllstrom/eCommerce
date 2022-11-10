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
const loaderProp =({ src}) => {
  return `${src}`;
}
const Itemtable = (props) => {
const { data } = props;
console.log(data.mainImage.responsiveImage.src)
return (
  <div >
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div class="row">
        <div class="col">
        </div>
      <div className="card">
      <Image
          src={data.mainImage.responsiveImage.src}
          alt={data.mainImage.responsiveImage.src} 
          height={200}   
          width={200}  
          loader={loaderProp}/>
      </div>
      <div class="col">
      <div class="card-body">
        <p className="card-text">{data.name}</p><span></span>
        <p className="card-text">{data.price}</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
