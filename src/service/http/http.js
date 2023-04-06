export async function request(url, requesOptions) {
    const result = await fetch(`http://localhost:3000/${url}`, requesOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response;
        })

    return result.json()
}