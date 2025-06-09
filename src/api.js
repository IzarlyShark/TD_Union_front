class Api {
    headers = {
        'Content-Type': 'application/json',
    }

    url = 'https://td-union-back.onrender.com'
    // url = 'http://localhost:4000'

    validityResponse (response) {
        try{
            if (response.status === 200) {
                return response.json()
            }
        } catch (error) {
            return error
        }
    }

    async login (values) {
        const response = await fetch(`${this.url}/login`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(values)
        })
        return this.validityResponse(response)
    }

    async createOrder (values) {
        const response = await fetch(`${this.url}/order`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(values)
        })
        return this.validityResponse(response)
    }
}


export const api = new Api()