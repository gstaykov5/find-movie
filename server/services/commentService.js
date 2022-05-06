const CommentModel = require('../models/comment');

exports.setComments = (data) => CommentModel.create(data);

exports.getComments = (id) => CommentModel.find({movieId: id})
