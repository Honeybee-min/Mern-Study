export default class TweetService {

  constructor(baseURL) {
    console.log(baseURL);
    this.baseURL = baseURL;
  }

  async getTweets(username) {
    const query = username ? `?username=${username}` : "";
    const response = await fetch(`${this.baseURL}/tweets${query}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    console.log("====================== All Get data ======================");
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  }

  async postTweet(text) {
    //const text = await text;
    const response = await fetch(`${this.baseURL}/tweets`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text,
        username: "super",
        name: 'Super'
      })
    });

    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  }

  async deleteTweet(tweetId) {
    const response = await fetch(`${this.baseURL}/tweets/${tweetId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    if (response.status !== 204) {
      throw new Error(data.message);
    }


  }

  async updateTweet(tweetId, text) {
    //const text = await text;
    const response = await fetch(`${this.baseURL}/tweets/${tweetId}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text
      })
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  }
}