const db = require("../database/db");
const videoService = require("../services/videosService");

module.exports = {
  async getAll(req, res, next) {
    try {
      const { page , isPrivate } = req.params;

      const results = await videoService.getVideos(page, isPrivate);
      return res.json(results);
    } catch (error) {
      next(error);
    }
  },
  async getViewsGreaterOrEqual42(req, res, next) {
    try {
      const results = await videoService.getViewsGreaterOrEqual42();
      return res.json(results);
    } catch (error) {
      next(error);
    }
  },

  async getVideoById(req, res, next) {
    try {
      const { id } = req.params;

      const results = await videoService.getVideoById(id);
      return res.json(results);
    } catch (error) {
      next(error);
    }
  },
  async deleteVideoById(req, res, next) {
    try {
      const { id } = req.params;

      await videoService.deleteVideoById(id);
      return res.json("Delete has been successfully");
    } catch (error) {
      next(error);
    }
  },
  async updateVideoById(req, res, next) {
    try {
      const { id } = req.params;

      await videoService.updatedVideo(id, req.body);
      return res.json("Updated has been successfully");
    } catch (error) {
      next(error);
    }
  },
  async create(req, res, next) {
    try {
      await videoService.saveVideo(req.body);
      return res.json("Created has been successfully");
    } catch (error) {
      next(error);
    }
  },
};
