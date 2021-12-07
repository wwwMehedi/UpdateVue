import axios from 'axios';

const API_URL = ' https://vrent.techvill.org/vrentapi/api/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'login', {
                email: user.email,
                password: user.password
            })
            .then(this.handleResponse)
            .then(response => {
                if (response.data.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data.data));
                }

                return response.data.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'register', {
            first_name: user.first_name,
            last_name: user.last_name,
            birthday_month: user.birthday_month,
            birthday_day: user.birthday_day,
            birthday_year: user.birthday_year,
            email: user.email,
            password: user.password
        });
    }

    handleResponse(response) {
        if (response.status === 401) {
            this.logout();
            location.reload(true);

            const error = response.data && response.data.message;
            return Promise.reject(error);
        }

        return Promise.resolve(response);
    }
}

export default new AuthService();