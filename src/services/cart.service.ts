

const API_URL = 'https://64f6f6249d7754084952ddc5.mockapi.io'

export const CartServices = {
    async getAll() {
        const data = await fetch(`${API_URL}/carts`, {
            next: {revalidate: 10}
            // cache: 'no-store'
          })
          if(!data.ok) {
            throw new Error('err')
          }
        return data.json()
    },
    
    async getById(id: string) {
        const data = await fetch(`${API_URL}/carts/${id}`, {
            next: {revalidate: 10},
          })
          if(!data.ok) {
            throw new Error('err')
          }
        return data.json()
    }
}