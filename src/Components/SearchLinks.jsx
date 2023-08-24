import LinkList from "./LinkList";

//делаем обвертку для ссылок над строкой поиска
export default function LinkNewHead({linkList}) {
    return <div className="search-links">
        <LinkList 
            list={linkList}
        />
    </div>
}