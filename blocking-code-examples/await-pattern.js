// promise will be use to execute multiple useActionState, ex, reading 2 files and writing...
const fs = require("fs").promises;
const util = require("util");
const readFilePromise = util.promisify(fs.readFile)
const writeFilePromise = util.promisify(fs.writeFile)

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, "utf-8", (err, content) => {
//             if (err) {
//                 reject(err)
//                 // return;
//             } else {
//                 resolve(content)
//                 // console.log(content);
//             }
//         });

//     })
// }

// getText("./content/first").then((result)=>{console.log(result)}).catch((err)=>console.log(err))
// getText("./content/second").then((result)=>{console.log(result)}).catch((err)=>console.log(err))

const start = async () => {
    try {
        const first = await readFilePromise('../content/first',"utf8") //once the promise is resolved we'll get our reposnse
        const second = await readFilePromise('../content/second',"utf8") //once the promise is resolved we'll get our reposnse
        // await writeFilePromise("../content/result-mind-grenade.xtx","This is awesome"+first +second)
        await fs.writeFile("../content/result-mind-grenade.xtx","This is awesome"+first +second,{flag:"a"})
        
        // const first = await getText('./content/first') //once the promise is resolved we'll get our reposnse
        // const second = await getText('./content/second') //once the promise is resolved we'll get our reposnse
    
    } catch (error) {
        console.log(error);
    }
}

start();