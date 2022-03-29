import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Details = () => {
	const param = useParams()
	const [products, setProducts] = useState([])
	useEffect(() => {
		fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
			.then((res) => res.json())
			.then((data) => setProducts(data.sports))
	}, [])
	const [selectedProduct, setSelectedProduct] = useState({})
	useEffect(() => {
		if (products) {
			const selected = products.find(
				(product) => product.idSport == param.sportId
			)
			setSelectedProduct(selected)
		}
	}, [products])

	useEffect(() => {
		console.log(selectedProduct)
	}, [selectedProduct])

	return (
		<div className="flex flex-col items-center">
			<h2
				className="
            text-4xl 
            font-bold 
            text-zinc-700 
            text-center"
			>
				{" "}
				Sports Name: {selectedProduct?.strSport}
			</h2>
			<br />
			<h2
				className="
            text-xl 
            font-semibold 
            text-red-800 
            text-center"
			>
				{" "}
				Sports Format: {selectedProduct?.strFormat}
			</h2>
			<br />
			<br />
			<br />
			<h2 className="text-justify text-xl font-semibold w-2/4">
				{" "}
				sports details:{selectedProduct?.strSportDescription}
			</h2>
            <br />
            <br />
            <br />
            <img className="rounded-lg w-[460px]" src={selectedProduct?.strSportThumb} alt="" />
		</div>
	)
}

export default Details
