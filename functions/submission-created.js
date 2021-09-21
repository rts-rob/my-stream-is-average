const fetch = require('node-fetch');
const f = require('faunadb'),
  q = f.query;

const { Call } = q;

exports.handler = async (event) => {
  let { description, url } = JSON.parse(event.body).payload.data;

  await createStream(description, url);

  return {
    statusCode: 200,
    body: `Stream created: ${description}, ${url}`,
  };
};

const createStream = async (description, url) => {
  const adminkey = process.env.FAUNA_ADMIN_KEY
  
  client = new f.Client({ secret: adminkey }, { headers: { 'X-Fauna-Source': 'my-stream-is-average' } })

  let results = await client.query(
    Call(
      "CreateStream",
      [description, url]
    )
  );
};