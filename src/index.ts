import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res)=> {
    res.send('Hello World, Express and TS working together!');
});

app.listen(port, () => {
    console.log('Server running in port:');
    console.log(port);
})
