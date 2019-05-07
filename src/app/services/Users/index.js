const api = {
    url: 'https://jsonplaceholder.typicode.com/users'
};

const method = { method: 'GET'};

const reqOptions = {
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
    }
};

class UsersService {
    static getUsers() {
        return fetch(api.url, method)
            .then(results => results.json())
            .then(users => {
                return users
            })
            .catch(error => console.log(error));
    }
}

export default UsersService;
