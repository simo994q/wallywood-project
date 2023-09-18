

export const addToCart = (id, quantity) => {

    const userToken = JSON.parse(localStorage.getItem('user')).access_token

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${userToken}`
        },
        body: new URLSearchParams({
            poster_id: id,
            quantity: quantity
        })
    };

    fetch('http://localhost:4000/cart', options)
        .then(response => response.json())
        .then(data => setCartItems(data));
}