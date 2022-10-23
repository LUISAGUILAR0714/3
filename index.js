let app = require('./src/app');
let connection = require('./src/db/connection');

const PORT = 4000;

app.listen( PORT, ()=> {
    console.log("Server ready on port", PORT);
});