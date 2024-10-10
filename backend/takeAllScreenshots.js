const fs = require('fs');
const { screenshot } = require('./screenshotter');

(function main() {
  const data = fs.readFileSync('urls.json', 'utf8');
  const websites = JSON.parse(data);
  screenshot(websites.map((website) => website.url))
})()