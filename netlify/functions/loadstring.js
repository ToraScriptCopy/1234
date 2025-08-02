exports.handler = async function(event, context) {
  const { url } = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({ load: `loadstring(game:HttpGet("${url}", true))()` }),
  };
};
