import Head from 'next/head'
import { request } from "../lib/datocms";
import { Image } from 'react-datocms';
import { Navbar } from './navbar';
import Link from 'next/link';
import dynamic from 'next/dynamic';



export async function getStaticProps(context) {
  const data = await request({
    query: HOMEPAGE_QUERY,
    preview: context.preview,
  });
  return {
    props: { data },
  };
}

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
      responsiveImage {
        width
        webpSrcSet
        title
        srcSet
        src
        sizes
        height
        bgColor
        base64
        aspectRatio
        alt
      }
    }
    slug
  }
}
`;

export default function Blog(props) {
  const { data } = props;
  const posts = data.allProducts;
  return (
      <div> 
        <h1>Products</h1>
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
    <div style={{ maxWidth: "200px", marginBottom: "50px" }}>
      <Image
        data={data.mainImage.responsiveImage}
      />
      <div>
        <p>{data.id}</p>
        <div>{data.name}</div>
        <div>{data.price}</div>
      </div>
    </div>
  );
};