const fs = require('fs');
const chalk = require('chalk');

const deleteFolderRecursive = (path) => {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file, index){
      const curPath = path + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        console.log(`Deleting file: ${chalk.red(curPath)}`);
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
  else console.log(chalk.yellow(`${path} directory has already been deleted`));
};
const buildDirectory = './build/';
console.log(chalk.green(`Start deleting directory ${chalk.yellow(buildDirectory)}`));
deleteFolderRecursive(buildDirectory);
console.log(chalk.green(`Finished deleting directory ${chalk.yellow(buildDirectory)}`));
