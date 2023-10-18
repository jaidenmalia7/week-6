let express = require('express');
let app = express();

app.get('/', (request, response)=> {
    response.send('Jaiden Malia');

})

app.get('/about', (request, response)=> {
    response.send('Jaiden Malia is a Filipino-American creative from the Bay Area. She graduated with a BA in Visual Arts Media from the University of California San Diego and his working towards her masters at New York University. She works in various mediums from visual illustrations to video productions. Her work explores a broad range of topics from the Gen Z pop culture to the satirical horrors of femininity, often rejecting and reshaping the established traditional narratives revolving around race and gender. ');
})

app.get('/projects', (request, response)=> {
    response.send('Film - Mango Cherry Webseries (2022 - ), Glimpse (2022), Rochelle, Rochelle (2022), Dawnbreaker (2021)');
})

app.listen(3001, () => {
    console.log('app is listening at http://localhost:3001');

})

