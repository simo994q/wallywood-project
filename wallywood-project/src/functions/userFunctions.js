

export const SaveUser = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData))
    location.reload()
}


export const logout = () => {
    localStorage.removeItem('user')
    location.reload()
}