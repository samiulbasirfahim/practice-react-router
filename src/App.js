import { Route, Routes } from "react-router-dom"
import "./App.css"
import About from "./components/about/About"
import Details from "./components/Details/Details"
import Header from "./components/Header/Header"
import NotFound from "./components/PageNotFound/NotFound"
import Products from "./components/Products/Products"
import User from "./components/user/User"
import Users from "./components/Users/Users"

function App() {
	return (
		<div className="sm:mx-4 md:mx-12 lg:mx-20">
			<Header></Header>
			<Routes>
				<Route path="/" element={<Products></Products>}></Route>
				<Route path="about" element={<About />}></Route>
				<Route path="/sports/:sportId" element={<Details />}></Route>
				<Route path="/users" element={<Users></Users> }>
					<Route path=":userId" element={<User></User>}></Route>
				</Route>
				<Route path="*" element={<NotFound></NotFound>}></Route>
			</Routes>
		</div>
	)
}

export default App
