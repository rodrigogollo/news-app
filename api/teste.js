const { open } = require('node:fs/promises');

const file = await open("./example.md");

for await (const line of file.readLines()) {
    console.log(line);
}
