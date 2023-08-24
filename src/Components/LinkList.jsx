import Link from "./Link";

//группа ссылок с произвольным содержанием
export default function ({list}) {
    return list.map(link => {
        return <li key={link.href}>
            <Link href={link.href}>{link.content}</Link>
        </li>
    });
}