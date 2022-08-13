import axios from 'axios';


export const getData = () => {
    console.log("action method is working");
    return (dispatch) => {

        return axios.get('db.json')

            .then(response => {
                
                dispatch({

                    type: 'TEXT_FIELD',

                    payload: response.data
                    
                })
                console.log(response.data);
            })
            .catch(error => console.log(error))

    }





} 
