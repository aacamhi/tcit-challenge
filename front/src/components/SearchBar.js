import { useDispatch, useSelector } from "react-redux";
import { change } from "../features/posts/filterSlice";

function SearchBar() {
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    return (
        <div className="search-bar-container">
            <div className="search-bar-title">Buscar por nombre: </div>
            <input
                className="search-bar"
                type="text"
                value={filter.value}
                onChange={(e) => dispatch(change(e.target.value))}
                placeholder="Buscar por nombre de la publicación"
            />
        </div>
    )
}

export default SearchBar;