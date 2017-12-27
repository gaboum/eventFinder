/**
 * Created by HP on 20-Dec-17.
 */
const AuthController = require('../controllers/authController');
const passportService = require('./services/passport');
const passport = require('passport');

// this is ready to use auth middleware for authentication using jwt and mail
const requireAuthMiddleware = passport.authenticate('jwt', {session : false});
const requireSigninMiddleware = passport.authenticate('local', {session : false});


module.exports = function (app) {
    app.get('/', requireAuthMiddleware, function (req, res) {
        res.send({message : 'Hi there'})
    });
    app.post('/signup', AuthController.signUp);
    app.post('/signin', requireSigninMiddleware, AuthController.signIn);
};