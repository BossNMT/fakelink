require('dotenv').config();
const path = require('path')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 1473;
const router = require('./router');
const handlebars = require('express-handlebars');
const cors = require('cors')

const methodOverride = require('method-override');
// const cookieParser = require('cookie-parser');
const http = require("http");

var server = http.createServer(app);

var request = require('request');

// Connect MongoDB
const mongoose = require('mongoose')
const mongoDB = 'mongodb+srv://ngothuan:Ngominhthuan1473@rutngon.5o5fz.mongodb.net/rutngon?retryWrites=true&w=majority'
mongoose.connect(mongoDB)
    .then(() => {
        console.log('Connect Thanh Cong');
    })

    .catch((err) => {
        console.log(err);
    })

//Cấu hình phương thức GET, POST, PUT, PATCH
app.use(methodOverride('_method'))

//Cấu hình CORS
app.use(cors())

//Cấu hình handlebars
app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        
    },
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Xử lý khi đường dẫn là file tĩnh thì sẽ lao vào public
app.use(express.static(path.join(__dirname, 'public')));

//Lấy dữ liệu từ POST
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());

//Lấy dữ liệu từ Cookie
// app.use(cookieParser())

//Router init
router(app);


//Localhost 3000
app.listen(PORT, console.log(`Localhost: ${PORT}`));