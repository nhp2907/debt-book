import Axios from "axios";


class UserService {
    url = 'http://localhost:8080';
    path = '/users'
    debtPath = '/debts'

    getAll = () => {
        Axios.get(this.url + this.path, body)
            .then(res => res.data)
            .catch(err => console.error(err));
    }

    getUserById = (id) => {
        Axios.get(this.url + this.path + '/' + id)
            .then(res => res.data)
            .catch(err => console.error(err));
    }

    getDebtByDebtorId = (creditorId, debtorId) => {
        Axios.get(this.url + this.path + `/${creditorId}/${this.debtPath}/${debtorId}`)
        .then(res => res.body)
        .catch(err => console.error(err));
    }

}




export default UserService;