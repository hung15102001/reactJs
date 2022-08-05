export const authen = (user:{}, next:()=>void)=>{
    try {
     localStorage.setItem('user', JSON.stringify({user})as string);
        next()
    } catch (error) {
        console.log(error);
        
    }
}

export const isAuthenticate = () => {
    const a = JSON.parse(localStorage.getItem('user') as string);
    
    if(!a)return false;

    return a
}

// export const addCart = (proCart, next) => {
//     let cart = []
//     if(localStorage.getItem('cart')){
//     cart = JSON.parse(localStorage.getItem('cart') as string)
// }
//     const exitPro = cart.find(item => item.id === proCart.id)

// }