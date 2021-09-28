import { useEffect, useState } from 'react';

const f = require('faunadb'),
  q = f.query;

const { Call } = q;

const getStreams = async () => {
  const adminkey = process.env.NEXT_PUBLIC_FAUNA_ADMIN_KEY;
  
  let client = new f.Client({ secret: adminkey }, { headers: { 'X-Fauna-Source': 'my-stream-is-average' } })
  
  try {
    const result = await client.query(
      Call(
        "ListStreams",
        []
      )
    )

    return {
      statusCode: 200,
      body: result
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err
    }
  }
};

export default function StreamList() {
  let [streams, setStreams] = useState([]);

  useEffect(() => {
    let streamGrabber = async() => {
      let result = await getStreams();
      setStreams(result.body);
    };   
    streamGrabber();
  }, []);
  
  console.log(streams);
  return(
    <>
      <h1>Streams</h1>
      <h2>{typeof(streams)}</h2>
      <ul>
      {streams.map((stream, index) => {
        return <li key={index}><a href={stream.url}>Link</a> - {stream.description}</li>
      })}
      </ul>
    </>
  )
}