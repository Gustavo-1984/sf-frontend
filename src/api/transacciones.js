import axios from '../libs/axios'

export const getTransactions = async () => {
    const res = await axios.get('/ventas')
    return res.data
}