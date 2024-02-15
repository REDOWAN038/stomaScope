const {spawn} = require("child_process");
const { imageProcessPath, modelPath } = require("../src/secret");

const process = (imagePath)=>{
        return new Promise((resolve, reject) => {
            let dataBuffer = ''; // Buffer to accumulate data from stdout

            const pythonProcess = spawn('python', [imageProcessPath, imagePath, modelPath]);

            pythonProcess.stdout.on('data', (data) => {
                dataBuffer += data.toString(); // Append data to buffer
            });

            pythonProcess.stderr.on('data', (data) => {
                console.error(`stderr: ${data}`);
                reject(data.toString());
            });

            pythonProcess.on('close', (code) => {
                console.log(`Python script exited with code ${code}`);
                if (code === 0) {
                    resolve(dataBuffer); // Resolve with accumulated data
                } else {
                    reject(`Python script exited with non-zero code ${code}`);
                }
            });
        });
}

module.exports = {process}