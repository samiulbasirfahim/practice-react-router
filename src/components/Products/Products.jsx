import React, { useEffect, useState } from "react"
import Product from "../Product/Product"

const Products = () => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
			.then((res) => res.json())
			.then((data) => setProducts(data.sports))
	}, [])
	return (
		<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
			{products.map((product) => (
				<Product key={product.idSport} product={product}></Product>
			))}
		</div>
	)
}

export default Products
