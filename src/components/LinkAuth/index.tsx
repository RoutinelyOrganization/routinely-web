import { LinkAuthStyle } from "./LinkAuthStyles";

interface LinkAuthProps {
    children: string,
    path: string,
    linkText: string
}

export default function LinkAuthComponent({ children, path, linkText }: LinkAuthProps) {
    return (
        <LinkAuthStyle>
            {children}
            <a href={path}>{linkText}</a>
        </LinkAuthStyle>
    )
}