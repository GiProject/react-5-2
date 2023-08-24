import Link from "./Link";

//баннер с картинкой
export default function Banner({img, href}) {
    return <Link href={href}>
        <img src={img.src} />
    </Link>
}