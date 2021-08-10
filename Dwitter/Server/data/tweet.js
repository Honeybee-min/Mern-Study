let tweets = [{
        id: "1",
        text: "화이팅 !",
        createdAt: Date.now().toString(),
        name: "BoB",
        username: "bob",
        url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png"
    },
    {
        id: "2",
        text: "안녕 !",
        createdAt: Date.now().toString(),
        name: "Min",
        username: "min",
        url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png"
    }

]

export function getAll() {
    return tweets;
}

export function getAllByusername(username) {
    return tweets.filter(t => t.username === username);
}

export function getById(id) {
    return tweets.find(t => t.id === id);
}

export function create(text, name, username) {
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date().toString(),
        name,
        username,
        url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png"
    }
    console.log(tweet);
    tweets = [tweet, ...tweets];
    return tweet;
}

export function update(id, text) {
    const tweet = tweets.find((t) => t.id === id);
    if (tweet) {
        tweet.text = text;
        return tweet;
    }
    return text;
}

export function remove(id) {
    tweets = tweets.filter((t) => t.id !== id);
    return tweets;
}