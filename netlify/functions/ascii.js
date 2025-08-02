exports.handler = async function(event, context) {
  const { script } = JSON.parse(event.body);
  const codes = script.split('').map(c => c.charCodeAt(0));
  return {
    statusCode: 200,
    body: JSON.stringify({ obfuscated: `string.char(${codes.join(',')})` }),
  };
};
