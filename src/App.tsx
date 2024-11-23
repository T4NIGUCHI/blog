import { useState, useEffect } from "react";

type Post ={ 
  id : number;
  title: string;
};

function App() {
  const [posts,setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  },[])

  const fetchPosts = async () => {
    try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const postData = await response.json()
    setPosts(postData);
    } catch(error) {
      console.error("error",error)
    }
  }

  return (
    <>
      <h1 data-testid="blog-title">JSON Placeholder Blog</h1>
      {posts.map((post) => <p data-testid="hoge">{post.title}</p>)}
    </>
  );
}

export default App;