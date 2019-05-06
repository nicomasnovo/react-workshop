const api = {
    url: 'https://jsonplaceholder.typicode.com/comments'
};

const method = { method: 'GET'};

const reqOptions = {
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
    }
};

class PostsService {

    static getPosts() {
        return fetch(`${api.url}`, method)
            .then(results => results.json())
            .then(posts => {
                return posts
            })
            .catch(error => console.log(error));
    }

}

export default PostsService;
