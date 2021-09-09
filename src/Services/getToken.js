export const getToken = () => {
    return fetch("http://localhost:3333/login", {
        method: "POST",
        body: JSON.stringify({
            email: "dev@dev.com",
            password: "developer"
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(data => data.json())
        .then(info => {
            return info.accessToken
        })
}



/* .then(localStorage.setItem("ourAccessToken#nibble", accessToken)) */