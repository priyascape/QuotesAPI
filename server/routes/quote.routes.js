// const UserController = require('../controllers/user.controller');

const QuoteController = require("../controllers/quote.controller");

module.exports = app=>{
    app.get("/api/quotes", QuoteController.findAllQuotes)
    app.post("/api/quotes/create", QuoteController.createQuote)
    app.get("/api/quotes/:id", QuoteController.findOneQuote)
    app.put("/api/quotes/update/:id", QuoteController.updateOneQuote)
    app.delete("/api/quotes/delete/:id", QuoteController.deleteQuote)
}


// module.exports = app => {
//     app.get('/api/users', UserController.findAllUsers);
//     app.get('/api/users/:id', UserController.findOneSingleUser);
//     app.put('/api/users/:id', UserController.updateExistingUser);
//     app.post('/api/users', UserController.createNewUser);
//     app.delete('/api/users/:id', UserController.deleteAnExistingUser);
// }
