import getFormattedDate from "@/libs/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/libs/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
    const posts = getSortedPostsData();

    return posts.map((post) => ({
        postId: post.id,
    }));
}

// TODO: add more metadata from nextjs docs for better SEO
export function generateMetadata({ params }) {
    const posts = getSortedPostsData();
    const { postId } = params;

    const post = posts.find((post) => post.id === postId);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
    };
}

export default async function Post({ params }) {
    const posts = getSortedPostsData();
    const { postId } = params;

    if (!posts.find((post) => post.id === postId)) notFound();

    const { title, date, contentHtml } = await getPostData(postId);

    const pubDate = getFormattedDate(date);

    return (
        <main className="px-6 prose prose-xl prose-slate mx-auto">
            <h1 className="text-3xl mt-4 mb-0">{title}</h1>
            <p className="mt-0">{pubDate}</p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p>
                    <Link href="/">← Back to home</Link>
                </p>
            </article>
        </main>
    );
}
