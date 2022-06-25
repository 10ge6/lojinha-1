const express = require('express');
const app = express();
app.use('/', express.static('../frontend/dist'));
app.use('/404', express.static('../frontend/dist'));
app.use('/announce', express.static('../frontend/dist'));
app.use('/products', express.static('../frontend/dist'));
app.use('/search', express.static('../frontend/dist'));
app.use('/shopping', express.static('../frontend/dist'));

const morgan = require('morgan');

// setup de body
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// logs
app.use(morgan('dev'));

// CORS
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
		);
	
	if(req.method == 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
		return res.status(200).send({});
	}
	
	next();

});

// rotas
const storefrontController = require('./routes/storefront/controller');
const cartController = require('./routes/cart/controller');

// endpoints
app.use('/storefront', storefrontController);
app.use('/cart', cartController);

// fallback
app.use('*', express.static('../frontend/dist'));

app.use((error, res) => {
    res.status(500);
    return res.send({
        error:{
            message: error.message
        }
    });
});


module.exports = app;