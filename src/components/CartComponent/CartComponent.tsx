import { useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {apiService} from "../../services/api.service.ts";
import {IProduct} from "../../models/IProduct.ts";
import ProductComponent from "../ProductComponent/ProductComponent.tsx";

const CartComponent = () => {
    const {userId} = useParams();
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        if (userId) {
            apiService.getCart(+userId).then((value) => setProducts(value.products))
        }
    }, [userId]);
    return (
        <div>
            {products.map(product => <ProductComponent key={product.id} product={product}/>)}
        </div>
    );
};

export default CartComponent;