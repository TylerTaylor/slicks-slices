// aws lambda
exports.handler = async (event, context) => {
  console.log(event)
  return {
    statusCode: 200,
    body: 'Hello!!!1'
  }
}