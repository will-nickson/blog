export function Blockquote({ children }) {
    return (
        <blockquote className="my-5 text-gray-500 pl-3 border-l-4 dark:border-gray-600 dark:text-gray-400">
            {children}
        </blockquote>
    );
}
