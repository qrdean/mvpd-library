export class User {
  static setLocalStorage(user: any) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  static getUser() {
    let user = localStorage.getItem('user')
    if (user) {
      return JSON.parse(user).user
    }
    return null
  }
}

export default User

