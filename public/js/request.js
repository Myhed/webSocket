const request = {
    getRequestFor: (name) => {
        return new Promise((resolve,reject) => {
            const req = new XMLHttpRequest();
            req.open('GET',`http://localhost:8080/${name}`, true)
            req.onload = () => resolve(req.responseText)
            req.onerror = () => reject(xhr.statusText);
            req.send(null)
        })
    },
}