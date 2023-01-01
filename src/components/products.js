import { useState, useEffect } from "react";
import { listProducts, updateOrders } from "../managers/apiManager";

const Products = () => {

    useEffect(() => {
        loadProducts();
    }, []);


    const loadProducts = async () => {
        let products = await listProducts();
        console.log(products, "products");
    }


    const updateOrder = async () => {
        let order = await updateOrders();
        console.log(order, "products");
    }


    return (
        <div>
            <h1>Productos</h1>
        </div>
    );

}

export default Products