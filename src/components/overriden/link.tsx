import NextLink, { LinkProps } from "next/link";
import { PropsWithChildren, DetailedHTMLProps, AnchorHTMLAttributes } from "react";

const Link = (props: PropsWithChildren<LinkProps & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>>) => {
    const { children, ...rest } = props
    return <NextLink {...rest} className={`text-hyperlink mt-4 inline-block ${rest?.className}`}>{children}</NextLink>
}
export default Link;