import { open } from 'node:fs/promises';

const file = await open("./example.md");

let header = {}
let isHeader = false;
for await (const line of file.readLines()) {
  //console.log(line);

  if (line == "```") {
    isHeader = !isHeader
    continue;
  }

  if (isHeader) {
    let key = line.split(": ")[0];
    let value = line.split(": ")[1];
    if (value.includes("[")) {
      header[key] = value.slice(1, -1).split(',').map(item => item.trim());
    } else {
      header[key] = value;
    }
  }
}

console.log("header", header);
