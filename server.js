const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

const products = [
    {
        name: 'Apple iPhone 11, 64GB, Blue',
        price: 400,
        quantity: 2,
    },
    {
        name: 'Smart TV (Sony) - Model C',
        price: 500,
        quantity: 1,
    },
];

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/cart', (req, res) => {
    res.render('cart', { products });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

// Example of product details route
app.get('/productDetails', (req, res) => {
    const productDetails = {
        name: 'Apple iPhone 11, 64GB, Blue',
        description: 'A powerful smartphone with a dual-camera system and a sleek design.',
        price: 400,
        features: [
            '6.1-inch Liquid Retina HD display',
            'A13 Bionic chip',
            'Dual 12MP Ultra Wide and Wide cameras',
            'Face ID for secure authentication'
        ]
    };
    res.render('productDetails', { product: productDetails });
});

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    res.redirect('/login');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
