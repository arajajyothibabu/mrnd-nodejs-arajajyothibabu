var express = require('express');
var router = express.Router();
var contacts = [];

/* GET contacts */
router.get('/:id', function(req, res, next) {
    res.send(contacts[parseInt(req.params.id)]);
});

router.get('/:id/:msgid', function(req, res, next) {
    res.send(contacts[parseInt(req.params.id)].msg[parseInt(req.params.msgid)]);
});

router.post('/', function(req, res, next) {
    contacts.push(req.body);
    contacts[contacts.length-1].msg = [];
    res.send(""+(contacts.length-1));
});

router.post('/:id', function(req, res, next) {
    contacts[parseInt(req.params.id)].msg.push(req.body);
    res.send(""+(contacts[parseInt(req.params.id)].msg.length-1));
});

router.put('/:id', function(req, res, next) {
    contacts[parseInt(req.params.id)].firstName = req.body.firstName;
    res.send(contacts[parseInt(req.params.id)]);
});

module.exports = router;
