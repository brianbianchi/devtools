#!/usr/bin/env node

const { Command } = require('commander');
const jwt = require('./lib/jwt');
const format = require('./lib/format');

const program = new Command();

program.command("format")
  .description("Format JSON string.")
  .argument('<json>')
  .action((json) => {
    format.formatJson(json);
  });

program.command("decode")
  .description("Decodes a JWT token.")
  .argument('<token>')
  .action((token) => {
    jwt.decodeJwt(token);
  });

program.parse();