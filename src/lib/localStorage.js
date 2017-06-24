const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}
const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  } catch (err) {
    console.error(err)
  }
}
const deleteState = (key) => {
  try {
    localStorage.removeItem(key)
  } catch (err) {
    console.error(err)
  }
}

export {
  saveState,
  loadState,
  deleteState,
}