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
