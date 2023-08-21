import selectFilteredPosts from "../selectors/selectFilteredPosts";
import { useSelector } from "react-redux";
import axios from 'axios';

function PostsList() {
    const filterText = useSelector((state) => state.filter)
    const filteredPosts = useSelector((state) =>
        selectFilteredPosts(state, filterText.value)
    );
    const deletePost = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/posts/${id}`);
            window.location.reload();
        } catch (error) {
            alert('No se pudo eliminar el mensaje.')
        }
    }
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPosts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.name}</td>
                            <td>{post.description}</td>
                            <td>
                                <button
                                    className="delete"
                                    onClick={() => deletePost(post.id)}
                                >
                                    <img src='/borrar.png' alt="delete" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PostsList;