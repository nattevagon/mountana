const login = ({username, password}, cb) => {
    let success = username+'-'+password

    cb && cb (success)
}

export { login }