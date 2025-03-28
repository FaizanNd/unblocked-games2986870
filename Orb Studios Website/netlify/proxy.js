// netlify/functions/proxy.js

const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const { url } = event.queryStringParameters;

  if (!url) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'URL parameter is required' }),
    };
  }

  try {
    // Fetch the content from the URL passed in the query parameter
    const response = await fetch(url);
    const body = await response.text();

    return {
      statusCode: 200,
      body,
      headers: {
        'Content-Type': 'text/html',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch the URL' }),
    };
  }
};
