async function getTweets(allFollowers, credentials) {

    //Follower { name: 'The Washington Post', id: '2467791' },

    const ta = require("time-ago");

    const Twitter = require('twitter-v2');

    // const credentials = {
    //     consumer_key: `sF1NuA8aYhyJKmrgzHSoLqIFk`,
    //     consumer_secret: `i1mdlM20Xsx9nhKYHE6bI6e6t1rU2qonr7uayfLVD5Z49eXfuD`,
    //     access_token_key: `1390350156726407170-QtPf6zHPPncuKKMNkhkfkGpgbRViko`,
    //     access_token_secret: `K7rnnNmtoeypzWXdluTKY7cVLiAHTiSQ2wmjOMb5CCJK5`
    // }

    const client = new Twitter(credentials);


    let ids = []

    allFollowers.forEach(follower => ids.push(follower));


    console.log(ids)
    //allFollowers.forEach(follower => names.push(follower.name));

    // console.log(names);
    const calcRecency = (creationTimestamp) => {
        const date = new Date(creationTimestamp)

        const seconds = date.getTime() / 1000
        //console.log(seconds)
        //seconds since Jan 1, 1970 from when the tweet was published 
        return Math.round(seconds);
        //bigger the number the more recent the tweet 
    }

    async function getFirstTweetFromAcc(idNumber) {
        //console.log(idNumber)
        //https://api.twitter.com/2/tweets

        const fetchedTweet = await client.get(`users/${idNumber}/tweets`, {
            max_results: 5,
            user: { fields: "username", fields: "profile_image_url" },
            tweet: {
                fields: "created_at",
            },
            expansions: "author_id"



            //expansions: "author_id"


        }) // get first tweet 
            .then(function (tweets) {
                //console.log("STARTING TWEETS for " + idNumber + "--------------------")

                //console.log(tweets.data[0])
                const textAndUTC = tweets.data[0]; //created at, text 
                //console.log(Object.values(tweets.includes)[0][0]) //username, name, img url
                const tweetMetaData = Object.values(tweets.includes)[0][0];

                const allDataForTweet = [textAndUTC, tweetMetaData]
                //const mostRecentTweet = Object.values(tweets)[0][0];
                //console.log(names[followerIndex])
                //[0][0].username //get handle for twitter link in front end 
                //console.log(handle)
                //console.log("______________")

                //add author to most recent tweet obj -- this is not the same as handle



                // if (tweets.includes === undefined) {
                //     console.log("failed to get metadata")
                //     return;
                // } else {
                //     const handle = Object.values(tweets.includes)[0][0].username //get handle for twitter link in front end 
                //     mostRecentTweet.handle = handle;

                // }
                //console.log("2 " + tweets.include)

                //console.log(handle)
                //curl "https://api.twitter.com/2/users/2244994945/tweets?expansions=author_id&tweet.fields=created_at,author_id,conversation_id,public_metrics,context_annotations&user.fields=username&max_results=5" - H "Authorization: Bearer $BEARER_TOKEN"


                //console.log(tweetAuthor);

                // const tweetAuthor = names[followerIndex] // get author

                // if (tweetAuthor === undefined || tweetAuthor === null) {
                //     console.log("failed to get authorName")
                //     return
                // } else {
                //     mostRecentTweet.authorName = tweetAuthor
                // }

                //console.log(mostRecentTweet)

                // const timeStamp = mostRecentTweet.created_at; // get tweet time

                // //seconds since Jan 1, 1970 from when the tweet was published 
                // const recency = calcRecency(mostRecentTweet.created_at)

                // mostRecentTweet.recencyLevel = recency;

                // const timeSince = ta.ago(timeStamp);

                // mostRecentTweet.timeSince = timeSince;
                // //console.log(timeSince);


                return allDataForTweet

            })
            .catch(function (error) {
                console.log(error)
            })

        return await fetchedTweet;
    }






    const promisedTweets = async () => {
        return Promise.all(ids.map(id => getFirstTweetFromAcc(id, ids.indexOf(id)))) //an async function
    }

    const tweets = await promisedTweets().then(data => {

        //console.log("This is data " + data)
        //console.log(typeof data)
        return data;

    })
    //console.log("HERE ARE TWEETS " + tweets)
    return tweets;


}

//const arrOfFollowers = [813286, 29327002, 101885579];

//getTweets(arrOfFollowers);



module.exports = getTweets; 