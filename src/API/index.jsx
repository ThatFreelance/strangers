const COHORT_NAME = "2302-acc-ct-web-pt-a"
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
// const token = localStorage.getItem("token")


export const allPosts = async () => {

    const response = await fetch(`${API_URL}/posts`);
    const result = await response.json();
    console.log(result);
    return result.data.posts;

}

export default API_URL;