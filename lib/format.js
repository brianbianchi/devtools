const formatJsonFailed = "Couldn't parse JSON.";

function formatJson(jsonstr) {
  try {
    formatted = jsonstr.replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2": ');
    const json = JSON.parse(formatted);
    console.log(JSON.stringify(json, null, 4));
  } catch {
    console.log(formatJsonFailed);
  }
}

module.exports = {
  formatJson,
  formatJsonFailed
}