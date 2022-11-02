import Head from 'next/head'
import Image from 'next/image'
import { request } from "../lib/datocms";

const HOMEPAGE_QUERY = `
query MyQuery {
  allProducts {
    id
    name
    price
    description {
      value
    }
    mainImage {
      url
    }
  }
}
`;

export async function getStaticProps(context) {
  const data = await request({
    query: HOMEPAGE_QUERY,
    preview: context.preview,
  });
  return {
    props: { data },
  };
}

export default function Home(props) {
  const { data } = props;
  const posts = data.allProducts;
  console.log(data);
  return (
    <div>
      <Head>
        <title>eCommerce</title>
      </Head>
      <div>
        <h1>Shop</h1>
      </div>
      <div>
        {posts.map((p) => (
          <BlogPostPreview key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
}

const BlogPostPreview = (props) => {
  const { data } = props;
  return (
    <div style={{ maxWidth: "400px", marginBottom: "50px" }}>
    <Image
        src={data.mainImage.url}
        alt={data.title}
        width={3840}
        height={2160}
        layout={"responsive"} // intrinsic|fixed|responsive|fill allowed
        // ...
      />      <p>{data.excerpt}</p>
      <div>{data.name}</div>
      <div>{data.price}</div>

    </div>
  );
};