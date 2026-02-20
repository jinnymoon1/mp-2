import ProductList from "./components/ProductList.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
// ADDED the 'type' keyword here:
import type { Product } from "./interfaces/Product.ts";

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkblue solid;
`;

export default function App() {
    // useState Hook to store Data (Lec-7)
    const [data, setData] = useState<Product[]>([]);

    // useEffect Hook for error handling and re-rendering (Lec-7)
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response: Response) => {
                // Using .status for error handling as taught in Lec-4
                if (response.status !== 200) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
                return response.json();
            })
            .then((responseData: Product[]) => {
                setData(responseData);
                console.log("Data fetched successfully");
            })
            .catch((e: Error) => {
                console.log("There was the error: " + e);
            });
    }, [data.length]);

    return (
        <ParentDiv>
            <ProductList data={data} />
        </ParentDiv>
    );
}