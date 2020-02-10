const Helper = require('./helper')
const chalk = require('chalk');
const yargs = require('yargs');


const addOptions = {
    command: "add",
    description: "add notes",
    builder: {
        body: {describe: "body", type: "string"},
        title: {describe: "title", type: "string"}
    },
    handler(argv) {
        Helper.addNotes(argv.title, argv.body)
    }
};
yargs.command(addOptions)


const removeOptions = {
    command: "remove",
    description: "remove notes",
    builder: {
        title: {describe: "title", type: "string"}
    },
    handler(argv) {
        console.log(argv)
    }
};
yargs.command(removeOptions);


const listOptions = {
    command: "list",
    description: "list notes",
    handler(argv) {
        console.log(argv)
    }
}
yargs.command(listOptions);


const readOptions = {
    command: "read",
    description: "read notes",
    builder: {
        title: {describe: "title", type: "string"}
    },
    handler(argv) {
        console.log(argv)
    }
}
yargs.command(readOptions);


yargs.parse();

