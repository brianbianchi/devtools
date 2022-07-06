#!/usr/bin/env node

const { Command } = require('commander');
const jwt = require('./lib/jwt');
const format = require('./lib/format');

const program = new Command();

program.command("format")
  .description("Format JSON string.")
  .argument('<json>')
  .option("-q, --quote")
  .action((json, options) => {
    format.formatJson(json, options.quote);
  });

program.command("decode")
  .description("Decodes a JWT token.")
  .argument('<token>')
  .action((token, options) => {
    jwt.decodeJwt(token);
  });

program.parse();