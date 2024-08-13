import axios from 'axios'
import { useState, useEffect } from 'react'

const spinner = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
        <path
            d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 
0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 
48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 
0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 
48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>

)

const PostList = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setPosts(response.data.products);
                console.log(response.data.products);

            }
            catch (error) {
                console.error("Error fetching data:", error)
            }
            finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h2>
                Posts
            </h2>
            {
                loading ? (
                    <div className="loadingSpinner">
                        {spinner}
                        <p>Loading...</p>
                    </div>
                ) : (
                    <ul>
                        {posts.map(products => (
                            <li key={products.id}>{products.title}</li>
                        ))}
                    </ul>

                )
            }

        </div>
    );
};

export default PostList;