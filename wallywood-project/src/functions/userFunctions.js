

export const SaveUser = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData))
    console.log(JSON.parse(localStorage.getItem('user')))
    location.reload()
}


export const logout = () => {
    localStorage.removeItem('user')
    location.reload()
}