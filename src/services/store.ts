export const store = {
  state: {
    location: [],
    books: [],
  },
  setLocationAction(newValue: any) {
    this.state.location = newValue
  },
  clearLocationAction() {
    this.state.location = []
  },
  setBooksAction(newValue: any) {
    this.state.books = newValue
  },
  setBookAction(newValue: any) {
    const index = this.state.books.findIndex((item: any) => item.id === newValue.id)
    this.state.books[index] = newValue
  },
  clearBooksAction() {
    this.state.books = []
  },
}
