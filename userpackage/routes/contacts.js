var express = require('express');
var router = express.Router();
var fs = require('fs');
var mflogger;

// Kony logger to capture application logs to display using logging service
try {
  mflogger = require(process.env.KONY_LOGIC_LOGGER);
} catch(e) {
  mflogger = console;
} 


/**
 * @swagger
 * /api/v1/contact:
 *   post:
 *     tags:
 *       - Contacts
 *     description: Contact Details 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Details
 *         description: Contact Details
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact Details'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/api/v1/contact', function(req, res, next){
    console.log(req.body);
	mflogger.info('Request for create contact in progress..');
    var response = {};
    response["status"] = 200;
    response["description"] = "Successfully created";
    res.send(response, 200);
});


/**
 * @swagger
 * /api/v1/contact/:
 *   get:
 *     tags:
 *       - Contacts
 *     description: Returns a Single Person Details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Register id
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Person Contact Details
 *         schema:
 *           $ref: ''
 */
router.get('/api/v1/contact', function(req, res, next){
    console.log(req.body);
	mflogger.info('Request for fetch contact in progress..');
    var response = {};
    response["status"] = 200;
    response["description"] = "Contact details";
    res.send(response, 200);
});


/**
 * @swagger
 * /api/v1/contact/:
 *   delete:
 *     tags:
 *       - Contacts
 *     description: Delete Contact Details object
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Register id
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 *         schema:
 *           $ref: ''
 */
router.delete('/api/v1/contact', function(req, res, next){
    console.log(req.body);
	mflogger.info('Request for delete contact in progress..');
    var response = {};
    response["status"] = 200;
    response["description"] = "Contact deleted successfully";
    res.send(response, 200);
});


/**
 * @swagger
 * /api/v1/updatecontact/:
 *   put:
 *     tags:
 *       - Contacts
 *     description: Contact Details object
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Register id
 *         in: query
 *         required: true
 *         type: string
 *       - name: Details
 *         description: Contact Details
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact Details'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.put('/api/v1/contact', function(req, res, next){
    console.log(req.body);
	mflogger.info('Request for update contact in progress..');
	var response = {};
    response["status"] = 200;
    response["description"] = "Contact updated successfully";
    res.send(response, 200);
});


module.exports = router;
