// poster.js
import { config } from "dotenv";
import { TwitterApi } from "twitter-api-v2";

config(); // Load .env

const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

export async function postTweet(content) {
  try {
    const { data } = await twitterClient.v2.tweet(content);
    console.log("✅ Tweet posted with ID:", data.id);
  } catch (error) {
    console.error("❌ Error posting tweet:", error);
  }
}
