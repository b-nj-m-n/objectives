var ghpages = require('gh-pages');
var config = require('../../webpack.config');
var fs = require('fs');

fs.writeFileSync(config.output.path + "/CNAME", "objectives.today");

main();

function main() {
  ghpages.publish(config.output.path, console.error.bind(console));
}