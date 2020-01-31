
#Tasks

## 1.

#### Define and use function in a new file:
    - create a new file `helper.js`
    - create function getNotes that returns "Your notes ..."
    - load and call that function printing message to console
#### Install Chalk and color message
    - create file `app.js`
    - install chalk from npm
    - load it in app
    - load function getNotes from `helper.js`
    - add success message in green
    
## 2.

[Example](https://github.com/yargs/yargs/blob/HEAD/docs/examples.md#yargs-is-here-to-help-you),
[One more](https://github.com/yargs/yargs/blob/master/docs/api.md#commandcmd-desc-builder-handler)
#### Parse input arguments 
    - add `yargs` package to project
    - add commands:
        - create [--body] [--title]
        - remove [--body] [--title]
        - list [--body] [--title]
        - read [--body] [--title]
     

#### Create handler functions in `handler.js` for commands created above: 
    - create (title, body) -> message
    - remove (title) -> message
    - list () -> all notes
    - read (title) -> title, body
Use builtin [fs](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options) library
store notes in `notes.json` file:
```json
    [
        {"title": "title", "body": "body"},
        {"title": "title", "body": "body"}
    ]
```


