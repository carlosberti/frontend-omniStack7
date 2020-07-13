import React from 'react';
import s from './styles';
import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';
import api from '../../services/api';
import { uuid } from 'uuidv4';
import io from 'socket.io-client';

interface IFeed {
    likes?: number;
    author?: string;
    description?: string;
    hashtags?: string;
    place?: string;
    image?: string;
    _id: string;
}

const Feed: React.FC = () => {

    const [feed, setFeed] = React.useState<IFeed[]>([])

    const getFeed = async () => {
        const response = await api.get('posts');

        setFeed(response.data);
    }

    const registerToSocket = () => {
        const socket = io('https://instacloneca.herokuapp.com');

        socket.on('post', (newPost: IFeed) => {
            setFeed( oldValue => [newPost, ...oldValue]);
        })

        socket.on('like', (likedPost: IFeed) => {
            setFeed(oldValue => oldValue.map(post => post._id === likedPost._id ? likedPost : post));
        })
    }

    React.useEffect(() => {
        getFeed();
        registerToSocket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleLike = (id: string) => {
        api.post(`/posts/${id}/like`)
    }
    
    return (
        <s.Container>
            {feed.map(post => (
                <article key={uuid()}>
                    <header>
                        <s.UserInfo>
                            <span>{post.author}</span>
                            <span>{post.place}</span>
                        </s.UserInfo>
                        <img src={more} alt="Mais" />
                    </header>
                    <img src={`https://instacloneca.herokuapp.com/files/${post.image}`} alt="" />
                    <footer>
                        <s.Actions>
                            <button type="button" onClick={() => handleLike(post._id)}>
                                <img src={like} alt="Like" />
                            </button>
                            <img src={comment} alt="Comentários" />
                            <img src={send} alt="Enviar" />
                        </s.Actions>
                        <strong>{post.likes} curtidas</strong>
                        <p>
                            {post.description}
                            <span>{post.hashtags}</span>
                        </p>
                    </footer>
                </article>
            ))}
            
        </s.Container>
    )
}

export default Feed;