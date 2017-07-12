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

    findById(req, res, next) {
        // check if accessed post is published
        // if (req.body.published === true) {
            super.findById(req, res, next)
        // } else {
        //     return res.status("401").send("Article Not Published Yet !")
        // }
    }

}

module.exports = PostsController