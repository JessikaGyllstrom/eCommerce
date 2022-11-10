import { request } from "../lib/datocms";
import Image from "next/image";

const HOMEPAGE_QUERY = `query  {
    allBlogs {
        article
        title
        _createdAt
      }
      author {
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
export default function Blog(props) {
    const { data } = props;
    const posts = data.allBlogs;
    return (
        <div >
            {posts.map((p) => (
            <BlogPostPreview key={p.id} data={p} />
            ))}
        </div>
    );
}
const BlogPostPreview = (props) => {
  const { data } = props;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "400px", marginBottom: "50px" }}>
        <p>{data.title}</p>
        <p>{data.article}</p>
        <p>{data._createdAt}</p>
        </div>
    </div>
  );
};