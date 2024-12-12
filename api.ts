import { APIFY_API_KEY } from '@config/env';
import { FetcherService } from '@services/fetcher';
import dotenv from 'dotenv';
import tweets from "./output1.json";

dotenv.config();

(async () => {
    // Run the Actor and wait for it to finish
    console.log(await FetcherService.Fetch("elonmusk", true));
})();

// const ExtractProfileInfoToSendForUser = () => {
//     const user = tweets[0].user;

//     const objForPrediction = {
//         //Number of posts
//         pos: user.statuses_count,
//         //Number of followers
//         flw: user.followers_count,
//         //Number of followings
//         flg: user.friends_count,
//         //Biography Length
//         bl: user.description.length ?? 0,
//         //Profile Picture Present
//         pic: Boolean(user.profile_image_url_https) ? 1 : 0,
//         //Links Present
//         lin: user.entities.description.urls.length > 0 ? 1 : 0,
//         // Average caption length
//         cl: (tweets.map(tweet => tweet.full_text.length).reduce((a, b) => a + b, 0)) / 10,
//         //Percentage of tweets with captions less than 3 characters
//         cz: tweets.filter(tweet => tweet.full_text.length <= 3).length / 10,
//         //Percentage of tweets without media
//         ni: tweets.filter(tweet => !tweet.entities.media || tweet.entities.media.length === 0).length / 10,
//         //Engagement Rate
//         erl: ((tweets.reduce((a, b) => a + b.favorite_count, 0) / 10) / user.followers_count),
//         //Engagement Rate For Comments
//         erc: ((tweets.reduce((a, b) => a + b.reply_count, 0) / 10) / user.followers_count),
//         //Hashtags Average Count
//         hc: tweets.reduce((a, b) => a + b.entities.hashtags.length, 0) / 10,
//     }

//     console.log(JSON.parse(JSON.stringify(objForPrediction)));
// };

// ExtractProfileInfoToSendForUser();

