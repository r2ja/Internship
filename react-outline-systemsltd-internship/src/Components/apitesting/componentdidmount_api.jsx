import axios from 'axios'
import { useState } from 'react'

const PostList = () => {
    const [posts, setPosts] = useState([])

    function ComponentDidMount() {
        const fetchPosts = async () => {
            const data = await axios.get('https://dummyjson.com/products')
            setPosts(response.data.products);
            console.log(response.data.products);
        }
    }

    return (
        <div><h2> Posts </h2>
            <ul>
                {posts.map(products => (
                    <li key={products.id}>{products.title}</li>
                ))}
            </ul>
        </div>

    );
};

export default PostList;