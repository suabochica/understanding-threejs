const express = require ('express');

const app = express();

app.use(express.static(`${__dirname}/public`));

app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/public/index.html`);
});

app.listen(3000, () => {
    console.log('server running on port', 3000);
});
