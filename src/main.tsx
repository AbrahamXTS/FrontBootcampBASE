import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Layout } from "./Layout.tsx";

import "./index.css";
import { Client, Clients, Currencies, Dashboard } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Dashboard />,
			},
			{
				path: "clients",
				element: <Clients />,
			},
			{
				path: "clients/:id",
				element: <Client />,
			},
			{
				path: "currencies",
				element: <Currencies />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
