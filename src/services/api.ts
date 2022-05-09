const DEV_ENDPOINT = "http://localhost:8000/"
import User from './user'

export class Apis {
  constructor(){}

  static async getAllBooks(): Promise<any> {
    let url = `${DEV_ENDPOINT}book/masterBookList`
    console.log(url)
    let response = await fetch(url, {
    })
    if (response.status != 200) {
      let json = await response.json()
      console.log(json.message)
      return false
    }
    return response.json()
  }

  static async createBook(data: any): Promise<any> {

    let token = User.getUser()?.token
    console.log(User.getUser())
    console.log(token)
    if (!token) {
      return false
    }
    console.log(data)
    console.log(JSON.stringify(data))
    let url = `${DEV_ENDPOINT}book/addMaster`
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      },
      body: JSON.stringify(data)
    })
    if (response.status != 200) {
      let json = await response.json()
      console.log(json.message)
      return false
    }
    return response.json()
  }

  static async register(data: any): Promise<any> {
    console.log(data)
    console.log(JSON.stringify(data))
    let url = `${DEV_ENDPOINT}user/register`
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    if (response.status != 200) {
      let json = await response.json()
      console.log(json.message)
      return false
    }
    return response.json()
  }

  static async login(data: any): Promise<any> {
    console.log(data)
    let url = `${DEV_ENDPOINT}user/loginWithPassport`
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    if (response.status != 200) {
      let json = await response.json()
      console.log(json.message)
      return false
    }
    return response.json()
  }
}


export default Apis
