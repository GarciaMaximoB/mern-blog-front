import { useEffect, useState } from "react";
import Post from "../components/Post";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://mern-blog-back-33ik.onrender.com/post").then((res) => {
      res.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return <>{posts.length > 0 && posts.map((post) => 
   <Post {...post}/>
  )
  }
  </>;
}
