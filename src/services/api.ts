const DEV_ENDPOINT = 'http://localhost:8000/'

export class Apis {
  constructor() {}

  static async getAllMaster(): Promise<any> {
    const url = `${DEV_ENDPOINT}book/masterBookList`
    console.log(url)
    const response = await fetch(url, {
    })
    if (response.status !== 200) {
      const json = await response.json()
      console.log(json.message)
      return false
    }
    return response.json()
  }

  static async getAllBooks(): Promise<any> {
    const url = `${DEV_ENDPOINT}book/all`
    console.log(url)
    const response = await fetch(url, {
      method: 'GET',
    })
    if (response.status !== 200) {
      const json = await response.json()
      console.log(json.message)
      return { success: false, message: json.message }
    }
    const json = await response.json()
    return { success: true, message: json.message, data: json.books }
  }

  static async createBook(data: any): Promise<any> {
    /*
    const token = User.getUser()?.token
    console.log(User.getUser())
    console.log(token)
    if (!token)
      return false
      */

    console.log(data)
    console.log(JSON.stringify(data))
    const url = `${DEV_ENDPOINT}book/addMaster`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (response.status !== 200) {
      const json = await response.json()
      console.log(json.message)
      return false
    }

    const json = await response.json()
    return { success: true, message: json.message, data: json.books }
  }

  static async getLocations(): Promise<any> {
    const url = `${DEV_ENDPOINT}book/getInventoryLocations`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (response.status !== 200) {
      const json = await response.json()
      console.log(json.message)
      return { message: json.message, success: false }
    }

    const json = await response.json()
    return { message: json.message, success: true, data: json.inventoryLocations }
  }

  static async editBookLocation(data: any): Promise<any> {
    const url = `${DEV_ENDPOINT}book/editBookInventoryLocation`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (response.status !== 200) {
      const json = await response.json()
      console.log(json.message)
      return { message: json.message, success: false }
    }

    const json = await response.json()
    return { message: json.message, success: true }
  }

  static async addInventoryLocation(data: any): Promise<any> {
    const url = `${DEV_ENDPOINT}book/addInventoryLocation`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (response.status !== 200) {
      const json = await response.json()
      console.log(json.message)
      return { message: json.message, success: false }
    }

    const json = await response.json()
    return { message: json.message, success: true }
  }

  static async editInventoryLocation(data: any): Promise<any> {
    const url = `${DEV_ENDPOINT}book/editInventoryLocation`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (response.status !== 200) {
      const json = await response.json()
      console.log(json.message)
      return { message: json.message, success: false }
    }

    const json = await response.json()
    return { message: json.message, success: true }
  }

  static async register(data: any): Promise<any> {
    console.log(data)
    console.log(JSON.stringify(data))
    const url = `${DEV_ENDPOINT}user/register`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (response.status !== 200) {
      const json = await response.json()
      console.log(json.message)
      return false
    }
    return response.json()
  }

  static async login(data: any): Promise<any> {
    console.log(data)
    const url = `${DEV_ENDPOINT}user/loginWithPassport`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (response.status !== 200) {
      const json = await response.json()
      console.log(json.message)
      return false
    }
    return response.json()
  }
}

export default Apis
