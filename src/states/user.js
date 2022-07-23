
let currentUser;

const getCurrentUserState = () => {
    return currentUser;
}

const setCurrentUserState = (user) => {
    currentUser = user;
}

export {
    getCurrentUserState,
    setCurrentUserState
}