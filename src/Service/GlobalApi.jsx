import axios from "axios";

const key="55d80053d19c4494b56dc80abb3a9272"
const axiosCreate=axios.create({
    baseUrl:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres'+key);
export default{
    getGenreList
}