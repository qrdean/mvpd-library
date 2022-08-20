const DOCKER_DEV_ENDPOINT = 'http://localhost:8080/'
// const DEV_ENDPOINT = 'http://localhost:8000/'
const DEV_ENDPOINT = process.env.PRODUCTION_ENDPOINT || DOCKER_DEV_ENDPOINT
const GO_DEV_ENDPOINT = 'http://localhost:8080/'
export class Apis {
  constructor() {}

  static async getAllMaster(): Promise<any> {
    const url = `${DEV_ENDPOINT}book/masterBookList`
    const response = await fetch(url, {
    })
    if (response.status !== 200) {
      const json = await response.json()
      return false
    }
    return response.json()
  }

  static async getAllBooks(): Promise<any> {
    const url = `${DEV_ENDPOINT}book/all`
    const response = await fetch(url, {
      method: 'GET',
    })
    if (response.status !== 200) {
      const json = await response.json()
      return { success: false, message: json.message }
    }
    const json = await response.json()
    return { success: true, message: json.message, data: json.books }
  }

  static async getBookById(data: any): Promise<any> {
    const url = `${DEV_ENDPOINT}book/id`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (response.status !== 200) {
      const json = await response.json()
      return { success: false, message: json.message }
    }
    const json = await response.json()
    return { success: true, message: json.message, data: json.book }
  }

  static async createBook(data: any): Promise<any> {
    /*
    const token = User.getUser()?.token
    if (!token)
      return false
      */

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
      return { success: false, message: json.message }
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
      return { message: json.message, success: false }
    }

    const json = await response.json()
    return { message: json.message, success: true }
  }

  static async deleteInventoryLocation(data: any): Promise<any> {
    const url = `${DEV_ENDPOINT}book/deleteInventoryLocation`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (response.status !== 200) {
      const json = await response.json()
      return { message: json.message, success: false }
    }

    const json = await response.json()
    return { message: json.message, success: true }
  }

  static async uploadFile(data: FormData): Promise<any> {
    const url = `${GO_DEV_ENDPOINT}upload`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: data,
    })
    if (response.status !== 200) {
      const json = await response.json()
      return { message: json.message, success: false }
    }
    const json = await response.json()
    return { message: json.message, success: true }
  }

  static async register(data: any): Promise<any> {
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
      return false
    }
    return response.json()
  }

  static async login(data: any): Promise<any> {
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
      return false
    }
    return response.json()
  }
}
