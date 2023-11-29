import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Contacts from './components/Contacts';
import NewContact from './components/NewContact';
import EditContactList from './components/EditContact';


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Contacts />} />
					<Route path='/contact' element={<NewContact />} />
					<Route path='/edit' element={<EditContactList />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
