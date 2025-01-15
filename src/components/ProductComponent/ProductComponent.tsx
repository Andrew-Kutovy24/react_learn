import {IProduct} from "../../models/IProduct.ts";
import {FC} from "react";

type Props = {
    product: IProduct
}

const ProductComponent:FC<Props> = ({product}) => {
    return (
        <div>
            <h4>{product.title}</h4>
            <img src={product.thumbnail} alt={product.title}/>
        </div>
    );
};

export default ProductComponent;