const axios = require('axios');
const crypto = require('crypto')
const videoService = require('../../src/services/videosService')
const assert = require('assert').strict;

const generate = function () {
    return crypto.randomBytes(3).toString('hex');
}

test('Should insert a new Video', async function () {
    const _name = 'a'.repeat(255)
    const [name] = await videoService.saveVideo({ name: _name, url: generate(), thumbnailUrl: generate(), isPrivate: true, timesViewed: 42 });
    assert.equal(name, _name);
})

test('Should get the new Video', async function () {
    const [newVideo] = await videoService.getVideoById(1001);
    assert.equal(1001, newVideo.id);
})

test('Should update the new Video', async function () {
    const _name = 'b'.repeat(10)
    const [updatedName] = await videoService.updatedVideo(1001, { name: _name });
    assert.equal(updatedName, _name);
})

test('Should delete the new Video', async function () {
    const [deletedId] = await videoService.deleteVideoById(1001);
    assert.equal(deletedId, 1001);
})