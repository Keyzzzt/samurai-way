import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import {PostsType} from '../../../App';

type MyPostsProps = {
    posts: PostsType
}

export const MyPosts = ({posts}: MyPostsProps) => {

    const postComponents = posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>);
    return (
        <div className={s.container}>
            <div className={s.addPost}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                {postComponents}
            </div>
        </div>
    )
}
