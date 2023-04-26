const express = require('express');
const app = express();

const cors=require('cors');

const corsOptions={
    origin: 'http://localhost:3000',
}


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors(corsOptions));


app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);


app.listen(5000, () => {
    console.log('Server running on port 5000');
    }
);