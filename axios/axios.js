const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});
instance.get('posts/1', {
    id: 70
})
    .then(data => console.log(data))
    .catch(e => console.log(e))
    .finally(() => console.log("finally"))
