
const yargs=require('yargs')
const Helpers = require ('./helpers')
const {addNotes} = require('./helpers')
const fs= require('fs')
const read = {
    command: 'read',
    describe: 'Reads notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        Helpers.readNotes(argv.title)
    }
}
const remove = {
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        Helpers.removeNotes(argv.title)
    }
}
const create = {
    command: 'create',
    describe: 'Creates a note',
    builder: {
        body: {
            describe: 'body',
            type: 'string'
        },
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        addNotes(argv.title,argv.body)
    }
}
const list = {
    command: 'list',
    describe: 'List of notes',
    builder: {
    },
    handler(argv) {
        Helpers.listNotes()
    }
}

yargs.command(remove)
yargs.command(read)
yargs.command(create)
yargs.command(list)
yargs.parse()

