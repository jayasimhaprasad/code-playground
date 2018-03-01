

export const LOGN_IN_PROGRESS="LOGIN_IN_PROGRESS"

export const LOGIN_SUCCESSFUL="Login sucessful"

export const LOGIN_FAILED="Login failed"



const loginInProgress=()=>{
    return {
        type:LOGN_IN_PROGRESS
    }
}

const loginSuccessful=(user)=>{
    return {
        type:LOGIN_SUCCESSFUL,
        data:user
    }
}

const loginFailed=()=>{
    return {
        type:LOGIN_FAILED
    }

}