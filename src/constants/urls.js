const baseURL = 'https://jsonplaceholder.typicode.com';

const posts = '/posts';
const comments = '/comments';
const todos = '/todos';
const albums = '/albums';

const urls = {
    posts: {
        base: posts,
        byId: (id)=> `${posts}/${id}`
    },
    comments,
    todos,
    albums
}

export {
    baseURL,
    urls
}