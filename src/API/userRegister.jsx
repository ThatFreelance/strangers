import { API_URL } from "./Api.jsx";

export const userRegister = async (username, password) => {
    console.log(`username: ${username}, password: ${password}`)

    const response = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password,
            }
        })
    });
    const result = await response.json();
    console.table(result)
    return result;
}