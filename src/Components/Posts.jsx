import { useState, useEffect } from "react";
import { allPosts } from "../API";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const posts = await allPosts();
        setPosts(posts);
        console.table(posts);
        console.log(posts);
      } catch (error) {
        console.error("something went wrong");
        console.log(error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <section>
      <h2> All Posts</h2>
      {posts.map((obj) => {
        return (
          <div key={obj.id} className="info">
            <p> Message: {obj.messages}</p>
            <p> Author ID: {obj.author.id}</p>
            <p> Username: {obj.author.username}</p>
            <h3> {obj.title}</h3>
            <h3>Condition: {obj.condition}</h3>
            <h3>Location: {obj.location}</h3>
            <p>Image: {obj.image}</p>
            <p>Price: {obj.price}</p>
            <p>Will Deliver: {obj.willDeliver}</p>
            <h3> Description: {obj.description}</h3>
            <p>Created At: {obj.createdAt}</p>
            <p>Updated At: {obj.updatedAt}</p>
            <p>Is Active: {obj.active}</p>
          </div>
        );
      })}
    </section>
  );
}
