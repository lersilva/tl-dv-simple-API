const routes = require('express').Router();
const VideoController = require('../controller/VideoController')

routes.get('/videos/:page/:isPrivate', VideoController.getAll);
routes.get('/videos/42', VideoController.getViewsGreaterOrEqual42);
routes.get('/videos/:id', VideoController.getVideoById);
routes.post('/videos',VideoController.create);
routes.put('/videos/:id', VideoController.updateVideoById);
routes.delete('/videos/:id', VideoController.deleteVideoById);

module.exports = routes