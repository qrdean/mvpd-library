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
  clearBooksAction() {
    this.state.books = []
  },
}
