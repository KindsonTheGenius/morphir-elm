
import cli from './cli'
import {Command} from "commander";
import path from "path";

const program = new Command()
program
    .name('morphir values-gen')
    .description('Generate values analysis code from Morphir IR')
    .option('-i, --input <path>', 'Source location where the Morphir IR will be loaded from.', 'morphir-ir.json')
    .option('-o, --output <path>', 'Target location where the generated code will be saved.', './dist')
    .option('-t, --target <type>', 'What to Generate.', 'ValuesData')
    .parse(process.argv)

cli.gen(program.opts().input, path.resolve(program.opts().output), program.opts())
    .then(() =>{
        console.log("Done")
    })
    .catch((err) =>{
        console.log(err)
        process.exit(1)
    })