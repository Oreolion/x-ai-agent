import { generateTweet } from './aiAgent.js';
import { postTweet } from './poster.js';

async function main() {
  const tweet = await generateTweet();
  await postTweet(tweet);
}

main();
