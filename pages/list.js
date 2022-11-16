import { request } from "../lib/datocms";
import SmartTable from "../components/SmartTable";

const HOMEPAGE_QUERY = `query  {
  allProducts {
    id
    price
    name
    quantity
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
  const headCells = [
    {
      id: 'id',
      numeric: false,
      label: 'ArticleNumber',
      width: 200,
    },
    {
      id: 'name',
      numeric: false,
      label: 'Name',
      width: 200,
    },
    {
      id: 'price',
      numeric: false,
      label: 'Price',
      width: 200,
    },
    {
      id: 'quantity',
      numeric: false,
      label: 'Quantity',
      width: 200,
    },
  ];  
  const { data } = props;
  const posts = data.allProducts;
  {posts.map((p) => (
    <SmartTable key={p.id} data={p} headCells={headCells} />   
  ))}
  return (  
    <div>
        <SmartTable data={posts} headCells={headCells} />   
    </div>
  );
}






