import styled from "styled-components";
import { Product } from "../interfaces/Product.ts";

// Flexbox styling from Lec-2
const AllProductsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #f0f8ff;
`;

const SingleProductDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: white;
    color: black;
    border: 3px darkblue solid;
    text-align: center;
`;

export default function ProductList(props: { data: Product[] }) {
    return (
        <AllProductsDiv>
            {
                // Mapping over the array as taught in Lec-6
                props.data.map((product: Product) => (
                    <SingleProductDiv key={product.id}>
                        <h3>{product.title}</h3>
                        <p>ID: {product.id}</p>
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price}</p>
                        <img
                            src={product.image}
                            alt={product.title}
                            style={{ maxWidth: "100px", margin: "auto" }}
                        />
                    </SingleProductDiv>
                ))
            }
        </AllProductsDiv>
    );
}