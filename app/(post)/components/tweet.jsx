import { Suspense } from "react";
import { getTweet } from "react-tweet/api";
import { EmbeddedTweet, TweetNotFound, TweetSkeleton } from "react-tweet";
import redis from "@/app/redis";
import { Caption } from "./caption";
import "./tweet.css";

async function getAndCacheTweet(id) {
    try {
        const tweet = await getTweet(id);

        if (tweet) {
            await redis.set(`tweet:${id}`, JSON.stringify(tweet));
            return tweet;
        } else {
            return (await redis.get(`tweet:${id}`)) ?? undefined;
        }
    } catch (error) {
        return (await redis.get(`tweet:${id}`)) ?? undefined;
    }
}

const TweetContent = async ({ id, components, onError }) => {
    let error;
    const tweet = id
        ? await getAndCacheTweet(id).catch((err) => {
              if (onError) {
                  error = onError(err);
              } else {
                  console.error(err);
                  error = err;
              }
          })
        : undefined;

    if (!tweet) {
        const NotFound = components?.TweetNotFound || TweetNotFound;
        return <NotFound error={error} />;
    }

    return <EmbeddedTweet tweet={tweet} components={components} />;
};

export const ReactTweet = (props) => (
    <Suspense fallback={<TweetSkeleton />}>
        {/* @ts-ignore: Async components are valid in the app directory */}
        <TweetContent {...props} />
    </Suspense>
);

export async function Tweet({ id, caption }) {
    return (
        <div className="tweet my-6">
            <div className={`flex justify-center`}>
                <ReactTweet id={id} />
            </div>
            {caption && <Caption>{caption}</Caption>}
        </div>
    );
}
