import postsData from "./posts.json";
import redis from "./redis";
import commaNumber from "comma-number";

export const getPosts = async () => {
    const allViews = await redis.hgetall("views");

    const posts = postsData.posts.map((post) => {
        const views = Number(allViews?.[post.id] ?? 0);
        return {
            ...post,
            views,
            viewsFormatted: commaNumber(views),
        };
    });

    return posts;
};
