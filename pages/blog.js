import { request } from "../lib/datocms";

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
    const author = data.author;

    //console.log(posts)
    console.log(data.author);

    return (
      <div className="blogcontainer">
    {posts.map((post, key) => (
            <div key={data.id} >
      <h2>{post.title}</h2>
      <p>{post.article}</p>
      <p>Created at: {post._createdAt}</p>
      <p>Author: {JSON.stringify(author.name).replace(/"/g,"")}</p>
      <a href="#" className="btn btn-dark">Read More</a>
      </div>
      
)
)
}


</div>
    )
}