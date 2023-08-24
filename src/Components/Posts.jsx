import { useState, useEffect } from "react";
import { allPosts } from "../API";


export default function Posts(){
    const [posts, setPosts] = useState([])
    useEffect (() => {
        async function fetchPosts(){
            try{
                const posts = await allPosts();
                setPosts(posts);
                console.table(posts);
                console.log(posts);
            } catch (error){
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
        <div key={obj.id} className='message' >

                <p> Message: {obj.messages}</p>
                <p> Author ID: {obj.author.id}</p>
                <p> Username: {obj.author.username}</p>
                <p> Title: {obj.title}</p>
                <p> Description: {obj.description}</p>
                <p>Price: {obj.price}</p>
                <h4 className='location'>{obj.location}</h4>
            </div>
        );
    
    })}
    </section>
    )
}

