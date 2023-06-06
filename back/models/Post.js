'use strict';

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    postTitle:{
        type: String,
        required: true,
    },
    postMessage: {
        type: String,
        required: true,

    }

})

module.exports = mongoose.model('Post', PostSchema);