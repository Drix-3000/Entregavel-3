const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("Servidor Online");
});

app.use(express.json());

app.use(express.static(__dirname + "/public")); // Permite a vizualização do index.html

app.use(express.urlencoded({ extended: true })); // Recebe os dados do html

app.post('/api/post-ex', (req, res) => {
    const data = req.body;
    console.log("Dados recebidos", data);
    res.send('Req POST recebida');
});