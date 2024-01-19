#!/usr/bin/env node
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';


yargs(hideBin(process.argv))
  .command('new <note>', 'Create a new Note', (yargs) => {
    // console.log(process.argv);
    return yargs
      .positional('note', {
        type : 'string',
        description: 'The content of the note to create',
        
      })
  }, (argv) => {
  
    console.log(argv.note)

  })
  .demandCommand(1)
  .parse()