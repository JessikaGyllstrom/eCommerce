import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { request } from "../lib/datocms";
import { Image } from "react-datocms";

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allProducts(first: $limit) {
    id
  }
}`;

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
    <div className={styles.container}>
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
      <p>{data.id}</p>
    </div>
  );
};