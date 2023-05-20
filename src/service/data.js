import myFetch from './myFetch'

const fetchOptions = async () => {
    try {
        const url = '/options.json'
        return await myFetch({ url })
    } catch (error) {
        console.log('error', error)
        throw error
    }
}

export {
    fetchOptions
}