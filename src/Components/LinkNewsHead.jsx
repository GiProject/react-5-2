import LinkList from "./LinkList";

export default function LinkNewHead({linkList}) {
    return <div className="head-new-links">
        <LinkList 
            list={linkList}
        />
    </div>
}