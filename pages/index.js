import { useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";

const HOMEPAGE_QUERY =  `query  {
        allBlogs {
        title
        id
      }
}` 
export async function getStaticProps() {
  const graphqlRequest = {
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  };
  return {
    props: {
      subscription: {
        ...graphqlRequest,
        initialData: await request(graphqlRequest),
        token: process.env.NEXT_DATOCMS_API_TOKEN,
      },
    },
  };
}
export default function Home({ subscription }) {
  const { data, error, status } = useQuerySubscription(subscription);
  const statusMessage = {
    connecting: 'Connecting to DatoCMS...',
    connected: 'Connected to DatoCMS, receiving live updates!',
    closed: 'Connection closed',
  };
  return (
    <div>
      <p>Connection status: {statusMessage[status]}</p>
      {error && (
        <div>
          <h1>Error: {error.code}</h1>
          <div>{error.message}</div>
          {error.response && (
            <pre>{JSON.stringify(error.response, null, 2)}</pre>
          )}
        </div>
      )}
    </div>
  )
 } 

