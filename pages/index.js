import { useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";
import Image from "next/image";
import leaves from "../assets/leaves.jpg"

const HOMEPAGE_QUERY =  `query  {
  startpage {
    title
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
export default function Index(props) {
  const { data } = props;
  const posts = data.startpage;

  return (
    <div className="homecontainer">
      <h1>{posts.title}!</h1>
    </div>
  )
}