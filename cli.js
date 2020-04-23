#!/usr/bin/env node

const { download } = require('.');

const email = process.env.FEEDLY_EMAIL;
const password = process.env.FEEDLY_PASSWORD;
if (!email || !password) {
  console.log('FEEDLY_EMAIL and FEEDLY_PASSWORD environment variables must be set.');
  process.exit(1);
}

if (process.argv.length !== 2) {
  console.log('Usage: exporteer_feedly');
  process.exit(1);
}

download(email, password)
  .then(data => process.stdout.write(data),
    err => {
      console.error(err);
      process.exit(2);
    });
