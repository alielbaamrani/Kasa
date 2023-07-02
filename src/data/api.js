import axios from "axios"
const url = './data.json'

const getAllData = async () => {
    
    const response = await axios.get(url)
    console.log(response)
    return response
}

export default getAllData
