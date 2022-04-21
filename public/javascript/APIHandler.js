class APIHandler {

  constructor(baseURL) {
    this.axiosApp = axios.create({ baseURL })
  }

  getFullList() {
    return this.axiosApp.get('/characters')
  }

  getOneRegister(charactersId) {
    return this.axiosApp.get(`/characters/${charactersId}`)
  }

  createOneRegister(charactersInfo) {
    return this.axiosApp.post(`/characters`, charactersInfo)
  }

  updateOneRegister(charactersId, charactersInfo) {
    return this.axiosApp.put(`/characters/${charactersId}`, charactersInfo)
  }

  deleteOneRegister(charactersId) {
    return this.axiosApp.delete(`/characters/${charactersId}`)
  }
}
