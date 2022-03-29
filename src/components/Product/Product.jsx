import React from "react"
import { Link, useNavigate } from "react-router-dom"

const Product = ({
	product: { idSport: id, strSport: name, strSportThumb, strSportIconGreen },
}) => {

    const navigate = useNavigate()

    const showDetails = () => {
        navigate(`/sports/${id}`)
    }

	const thumb = strSportThumb
		? strSportThumb
		: "https://pngset.com/images/image-holder-ulysses-communications-charing-cross-tube-station-stencil-symbol-recycling-symbol-transparent-png-2524379.png"

	return (
		<div className="justify-center flex ">
			<div className="border rounded-lg w-[300px] flex flex-col justify-center relative">
				<img
					className="absolute top-0 left-0 w-8"
					src={strSportIconGreen}
					alt=""
				/>
				<p className="text-center font-bold text-2xl">Name: {name}</p>
				<img src={thumb} alt="" />
                <button onClick={showDetails}>Show details </button>
			</div>
		</div>
	)
}

export default Product
