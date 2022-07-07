#!/usr/bin/env node

const { Command } = require('commander');
const { decodeJwt } = require('./lib/jwt');
const { formatJson } = require('./lib/format');

const program = new Command();

program.command("format")
  .description("Format JSON string.")
  .argument('<json>')
  .action((json) => {
    formatJson(json);
  });

program.command("decode")
  .description("Decodes a JWT token.")
  .argument('<token>')
  .action((token) => {
    decodeJwt(token);
  });

program.parse();