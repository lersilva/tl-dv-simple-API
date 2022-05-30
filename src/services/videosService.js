const db = require("../database/db");

exports.getVideos = async function (page, isPrivate) {

    var query = db.table('Video');

    if (typeof page !== "undefined") {
        query.limit(10).offset((page - 1) * 10)
    }


    if (typeof isPrivate !== "undefined") {
        query.where('isPrivate', isPrivate);
    }

    return query;
}

exports.saveVideo = async function (newVideo) {
    const insert = db('Video').insert(newVideo).returning('name');
    return insert;
}

exports.updatedVideo = async function (id, updatedVideo) {
    const update = db('Video').update(updatedVideo).where('id', id).returning('name');
    return update;
}

exports.getVideoById = async function (id) {
    var query = db.table('Video');
    if (typeof id !== "undefined") {
        query.where('id', id).returning('*');
    }

    return query;
}


exports.getViewsGreaterOrEqual42 = async function () {
    var query = db.table('Video').andWhere('timesViewed', '>', 42);
    return query;
}


exports.deleteVideoById = async function (id) {
    var query = db.table('Video');

    if (typeof id !== "undefined") {
        query.where('id', id).delete().returning('id');
    }

    return query;
}