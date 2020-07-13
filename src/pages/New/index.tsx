import React from 'react';
import s from './styles';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

interface IPost {
    likes?: number;
    author?: string;
    description?: string;
    hashtags?: string;
    place?: string;
    image?: File | null;
}

const New: React.FC = () => {
    
    const [post, setPost] = React.useState<IPost>({
        image: null,
        author: '',
        description: '',
        hashtags: '',
        place: '',
    })

    const history = useHistory();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData();

        data.append('image', post.image!);
        data.append('author', post.author!);
        data.append('description', post.description!);
        data.append('hashtags', post.hashtags!);
        data.append('place', post.place!);

        await api.post('posts', data);

        history.push('/');
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPost({...post, image: e.target.files![0] });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPost({...post, [e.target.name]: e.target.value });
    }
    
    return (
        <s.Form onSubmit={handleSubmit}>
            <input type="file" onChange={handleImageChange} />
            <input type="text" name="author" placeholder="Autor do post" onChange={handleChange} value={post.author} />
            <input type="text" name="place" placeholder="Local do post" onChange={handleChange} value={post.place} />
            <input type="text" name="description" placeholder="Descrição do post" onChange={handleChange} value={post.description} />
            <input type="text" name="hashtags" placeholder="Hashtags do post" onChange={handleChange} value={post.hashtags} />
            <button type="submit">Enviar</button>
        </s.Form>
    )
}

export default New;