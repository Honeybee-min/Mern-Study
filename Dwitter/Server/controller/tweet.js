import * as tweetRepository from "../data/tweet.js"

export function getTweets(req, res, next) {
    const username = req.query.username;
    const data = username ? tweetRepository.getAllByusername(username) : tweetRepository.getAll();
    res.status(200).send(data);
}

export function getTweet(req, res, next) {
    const id = req.params.id;
    const data = tweetRepository.getById(id);
    if (data) {
        res.status(200).send(data)
    } else {
        res.status(204).json({
            message: `not found id : ${id}`
        });
    }
}

export function createTweet(req, res, next) {
    const {
        text,
        username,
        name
    } = req.body;
    const tweet = tweetRepository.create(text, name, username);
    res.status(201).send(tweet);

}

export function updateTweet(req, res, next) {
    const id = req.params.id;
    const {
        text
    } = req.body;
    const tweet = tweetRepository.update(id, text);
    if (tweet) {
        res.status(200).send(tweet);
    } else {
        res.status(404).json({
            message: `not found id : ${id}`
        });
    }
}

export function deleteTweet(req, res, next) {
    const id = req.params.id;
    const tweets = tweetRepository.remove(id);
    res.status(200).send(tweets);

}