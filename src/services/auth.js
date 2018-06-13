function login(username, password) {
  localStorage.setItem('user', JSON.stringify(username))
  return username
}

function logout() {
  localStorage.removeItem('user')
}

export const userServices = {
  login,
  logout
}
