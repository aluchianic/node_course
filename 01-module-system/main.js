const help = require('./helper')
const a = help.getNotes()
const chalk = require('chalk');
const yargs = require('yargs')
const addOption1= {
    command: "add",
    description: " add Note ",
    builder: {
        body: {
            describe: 'body',
            type: 'string'
        },
        title: {
            describe: 'title',
            type: 'string'
        }
    },
    handler(args) {
        help.addNotes(args.title,args.body)

    }
}
const addOption2= {
    command: "remove",
    description: " remove Note ",
    builder: {
        title: {
            describe: 'title',
            type: 'string'
        }
    },
    handler(args) {
        console.log(args)
    }
}
const addOption3={
            command: "list",
            description: " list ",
            builder: {

            },
            handler(args) {
                console.log(args)
            }
};
const addOption4={
    command: "read",
    description: " read Note ",
    builder: {
        title: {
            describe: 'title',
            type: 'string'
        }
    },
    handler(args) {
        console.log(args)
    }
}
yargs.command(addOption1)
yargs.command(addOption2)
yargs.command(addOption3)
yargs.command(addOption4)
yargs.parse()


