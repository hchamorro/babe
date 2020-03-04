import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/GridIE";
import ProdCard from '../components/ProductCard';
import API from '../utils/API';


function Products(props) {
    const [products, setProducts] = useState({})
      
    // When this component mounts, grab the product with the _id of props.match.params.id
    // e.g. http://localhost:3000/products/5e5185556eae2c3520e303e1
    const {id} = useParams(props)
    useEffect(() => {
        API.getProductsAPI(id)
        .then(res => setProducts(res.data))
        .catch(err => console.log(err));
}, [])


    return(
        <div>
            Hello You Are Here
            {products.title}
            {console.log('************************************Load Products by ID Here*********************************')}
        </div>
    );
}

export default Products; 

