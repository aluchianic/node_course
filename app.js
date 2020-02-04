const Helper = require('./helper.js');
const yargs = require('yargs');

const addOptions = {
    command: "add",
    describe: "add Note",
    builder: {
        body: {
            describe: 'body',
            type: 'string'
        },

        title: {
            describe: 'body',
            type: 'string',
        }
    },
    handler(argv) {
        Helper.addNotes(argv.title, argv.body)
    }
}

const removeOptions = {
    command: "remove",
    describe: "remove Note",
    builder: {
        title: {
            describe: 'title',
            type: 'string'
        }
    },
    handler(argv) {
        Helper.removeNotes(argv.title)
    }
}

const listOptions = {
    command: 'list',
    describe: 'list Note',

    handler(argv) {
        Helper.listNotes()
    }
}

const readOptions = {
    command: 'read',
    describe: 'read Note',
    builder: {
        title: {
            describe: 'title',
            type: 'string'
        }
    },
    handler(argv) {
        Helper.readNotes(argv.title)
    }
}

yargs.command(addOptions)
yargs.command(removeOptions)
yargs.command(listOptions)
yargs.command(readOptions)
yargs.parse();