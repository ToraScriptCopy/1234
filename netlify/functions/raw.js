exports.handler = async function(event, context) {
  // Here you'd implement storing script and returning a raw URL
  return {
    statusCode: 200,
    body: JSON.stringify({ url: "https://example.com/raw/12345" }),
  };
};
