/*
This file define controller for Post, this class extend from Controller class.
With this extended class, this class obtain all methodd from parent class
*/
'use strict'
// Require parent class
let Controller = require('./Controller');
// Require model (schema) use with this controller
let Post = require('../models/post')

class PostsController extends Controller {

    constructor() {
        super(Post)
    }

    find(req, res, next) {
        // Get all documents and filter with queries string (req.query : ex. http://domain.ext/api/?query=string)
        this.model.find(req.query, (err, documents) => {
            let filteredData = [];
            for (let i = 0, len = documents.length; i < len; i++) {
                if (documents[i].published == true) {
                    filteredData.push(documents[i]);
                }
            }
            res.json(filteredData);
        })
    }

}

module.exports = PostsController