import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const User = () => {
	const param = useParams()
	const [user, setUser] = useState({})
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/" + param.userId)
			.then((r) => r.json())
			.then((data) => setUser(data))
	}, [param.userId])
	return (
		<div>
            <br />
            <br />
            <br />
            <br />
            <br />
			<h1
				className="
            text-4xl 
            font-bold 
            text-zinc-700 
            text-center"
			>{user?.name}
			</h1>
            <h2
				className="
            text-xl 
            font-semibold 
            text-red-800 
            text-center"
			>
				{" "}
				 {user?.username}
			</h2>
            <h2 className="text-center text-xl font-semibold">
				{" "}
				{user.email}
			</h2>
		</div>
	)
}

export default User
