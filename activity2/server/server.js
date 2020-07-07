const http = require("http");
const app = require("../app");
const config = require("../config/global.config");

const port = parseInt(process.env.port, 10) || config.port;
app.set("port", port),()=>{
    console.log('Server on port',this.app.get('port'));            
};

const server = http.createServer(app);
server.listen(port);
server.setTimeout(config.timeout);
