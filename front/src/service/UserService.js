import http from "./Http";

const path = '/users'

export const getAll = () => {
    return http.get(path)
        .then(res => res.data)
        .catch(err => console.error(err));
}

export const getUserById = async (id) => {
    try {
        return (await http.get(this.path + '/' + id)).data;
    } catch (error) {
        // dispatch(setError(error));
    }
}

export const getFriends = (userId) => {

}