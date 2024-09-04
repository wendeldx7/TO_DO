
const formZodError = (error) =>{
    const formattedError = {}

    error.errors.forEach(err => {
        const path = err.path[0]
        if(!formattedError[path]){
            formattedError[path] = []
        }
        formattedError[path].push(err.message)
    })

    return formattedError

}
export default formZodError