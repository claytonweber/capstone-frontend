const BASE_URL = 'https://localhost:3000/users';

export const register = async (username, password, email) => {
    try {
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                    email: email
                }
            })
        });

        const result = await response.json();

        return result.data;
    } catch(error) {
        console.log(error);
    }
}