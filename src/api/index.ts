import axios from 'axios';
const url = "https://64446bb1914c816083b9cbe5.mockapi.io/names";

async function getNames() {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.log(JSON.stringify(error))
    }
}

async function addName(name:any) {
    try {
        const { data } = await axios.post(url,{name});
        return data;
    } catch (error) {
        console.log(JSON.stringify(error))
    }
}

export const api = { getNames, addName };