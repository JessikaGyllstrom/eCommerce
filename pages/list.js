import { request } from "../lib/datocms";

const HOMEPAGE_QUERY = `query  {
  allProducts {
    quantity
    price
    id
    name
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
export default function Products (props) {
  const { data } = props;
  console.log(data);
  const posts = data.allProducts;
  return (
    <div>
      <div>
      {posts.map((p) => (
          <ProductTable key={p.id} data={p} />        
        ))}
      </div>
    </div>
  );
}
const ProductTable = (props) => {
  const {data} = props;
 return (
  <div style={{ display: "flex", justifyContent: "center", padding: "0.2rem", alignItems: "center"}}>
      <div style={{ width: "50%"}}>
        <div className="row">
        <div className="col">
        Item: {data.id} 
        </div>
        <div className="col">
        Name: {data.quantity}
        </div>
        <div className="col">
        Price: {data.price}
        </div>
        <div className="col">
        Quantity: {data.quantity}
        </div>
      </div>
      </div>
    </div>
 )
}  
