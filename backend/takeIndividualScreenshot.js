const { screenshot } = require('./screenshotter');

(function main() {
  screenshot(process.argv[2])
})()