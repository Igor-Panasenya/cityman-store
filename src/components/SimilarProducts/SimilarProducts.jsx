import React from 'react';
import './similarProducts.css'
import ProductItem from "../productItem/ProductItem";
import {useState} from "react";
import Skeleton from "../Skeleton/Skeleton";

const SimilarProducts = () => {
    const [productsRazors, setproductRazors] = useState([]);
    const [similarList, setSimilarList] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className="similarProducts">
            <h4>Similar Products</h4>

            {
                isLoading
                    ? [...new Array(4)].map((_, index) => <Skeleton key={index}/>)
                    : <div className="productsNet">
                        {productsRazors.map(Product =>
                            <ProductItem Product={Product} key={Product.id}/>
                        )}
                    </div>
            }

            {/*<div className="productsNet">*/}
            {/*    {productsRazors.map(Product =>*/}
            {/*        <ProductItem Product={Product} key={Product.id}/>*/}
            {/*    )}*/}
            {/*</div>*/}

        </div>
    );
};

export default SimilarProducts;