const net = require("net");
const client = new net.Socket();
const host = "localhost";
const port = 2077;

client.connect(port, host, onConnect);

function onConnect() {
    var standardInput = process.stdin;
    standardInput.setEncoding('utf-8');

    standardInput.on('data', function (data) {
        if (data == 'exit\r\n') {
            console.log("User input complete, program exit.");
            client.end();
        } else {
            client.write(data);
          }});
    
    client.on("data", data=>{
        console.log(data.toString());
    })
}

client.on("end", () => {
    console.log("finished");
    
});