//форма поиска
export default function SearchInput({logo, callbalck}) {
    return <div className="search-block">
        <div className="logo">
            <img src={logo} />
        </div>
        <form onSubmit={ e => callbalck(e)}>
            <input name="search" type="text" />
            <button>Найти</button>
        </form>
    </div>
}