const fetch = require('node-fetch');
const f = require('faunadb'),
  q = f.query;

const { Call } = q;

exports.handler = async (event) => {
  let { description, url } = JSON.parse(event.body).payload.data;

  return await createStream(description, url);
};

const createStream = async (description, url) => {
  const adminkey = process.env.FAUNA_ADMIN_KEY
  
  client = new f.Client({ secret: adminkey }, { headers: { 'X-Fauna-Source': 'my-stream-is-average' } })

  
  try {
    const result = await client.query(
      Call(
        "CreateStream",
        [description, url]
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