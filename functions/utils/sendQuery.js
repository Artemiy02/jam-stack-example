const axios = require('axios');
// const fetch = require('node-fetch');

module.exports = async (query, variables) => {
  const {
    data: { data, errors },
  } = await axios({
    url: 'https://graphql.fauna.com/graphql',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
    },
    data: {
      query,
      variables,
    },
  });

  // Realization with fetch

  // const res = await fetch('https://graphql.fauna.com/graphql', {
  //   method: 'POST',
  //   headers: {
  //     Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
  //   },
  //   body: JSON.stringify({
  //     query,
  //     variables,
  //   }),
  // });
  // const  { data, errors } = await res.json();
  if (errors) {
    console.error(errors);
    throw new Error('Something went wrong');
  }
  return data;
};
