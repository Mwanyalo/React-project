import { apiWrapper } from './ApiFunctions'

class UsersApi {

  static getUsers() {
    const url = 'https://ti-react-test.herokuapp.com/users';
    return apiWrapper('GET', url, {})
  }

  static updateUser(user) {
    const url = `https://ti-react-test.herokuapp.com/users/${user.id}`;
    return apiWrapper('PUT', url, user)
  }
}

export default UsersApi;
