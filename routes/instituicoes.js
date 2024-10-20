var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Instituicao = require('../models/Instituicao.js');

/* GET ALL */
router.get('/', function(req, res, next) {
  Instituicao.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* GET SINGLE BY ID */
router.get('/:id', function(req, res, next) {
  Instituicao.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* CREATE */
router.post('/', function(req, res, next) {
  Instituicao.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE */
router.put('/:id', function(req, res, next) {
  Instituicao.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE */
router.delete('/:id', function(req, res, next) {
  Instituicao.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;