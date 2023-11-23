import NextImage from "next/image";

export function Image(props) {
    return (
        <span>
            <NextImage {...props} />
        </span>
    );
}
