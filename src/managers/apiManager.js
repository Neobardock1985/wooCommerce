import axios from './axios.js';


export async function listProducts() {

    const response = await axios.get('/wp-json/wc/v3/orders', {
        auth: {
            username: process.env.REACT_APP_WOO_PUBLIC,
            password: process.env.REACT_APP_WOO_SECRET
        },
    }).then(resp => {
        console.log(resp.data, "listProducts resp.data");
    });


    return response;

}

export async function updateOrders() {
    const data = {
        status: "completed"
    };

    const response = await axios.put('/wp-json/wc/v3/orders/5776', data, {
        auth: {
            username: process.env.REACT_APP_WOO_PUBLIC,
            password: process.env.REACT_APP_WOO_SECRET
        },
    }).then(resp => {
        console.log(resp.data, "updateOrders resp.data");
    });


    return response;

}