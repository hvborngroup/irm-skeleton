import { useEffect, useState } from 'react';
const URL = "https://dummyjson.com/products";

export const getProducts = () => {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        fetch(URL, { cache: 'no-store' }).then(async res => setData(await res.json()));
    }, []);
    return data;
}
export const getProductsDetails = ({ prodId } : { prodId:  any  }) => {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        fetch(URL + "/" + prodId, { cache: 'no-store' }).then(async res => setData(await res.json()));
    }, [prodId]);
    return data;
}