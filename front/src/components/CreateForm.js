import { useDispatch, useSelector } from "react-redux";
import { setDescription, setName } from "../features/posts/newPostSlice";
import axios from 'axios';
import urls from "../constants/urls";

function CreateForm() {
    const newPost = useSelector((state) => state.newPost)
    const dispatch = useDispatch()
    const createPost = async (e) => {
        e.preventDefault();
        if (newPost.value.name && newPost.value.description) {
            try {
                await axios.post(`${urls.POSTS_BACKEND_URL}/posts`, newPost.value);
                dispatch(setName(''));
                dispatch(setDescription(''));
                window.location.reload();
            } catch (error) {
                alert('Hubo un error al crear la publicación. Por favor intentalo nuevamente.')
            }

        }
    }
    return (
        <div>
            <div className="new-post-title">Nueva publicación</div>
            <form onSubmit={createPost}>
                <input
                    placeholder="Nombre"
                    className="name"
                    value={newPost.value.name}
                    onChange={(e) => dispatch(setName(e.target.value))}
                />
                <input
                    placeholder="Descripción"
                    className="description"
                    value={newPost.value.description}
                    onChange={(e) => dispatch(setDescription(e.target.value))}
                />
                <button>Crear</button>
            </form>
        </div>
    )
}

export default CreateForm;