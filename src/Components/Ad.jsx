import Link from "./Link";

//делаем обвертку для ссылок ззаголовка новостей
export default function Ad({children, href}) {
    return <div className="ad-block">
        <Link href={href}>{children}</Link>
    </div>
}