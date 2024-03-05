import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	scroll-behavior: smooth;
}

* body {
	font-family: "Roboto", sans-serif;
	color: #18191a;
	line-height: 1.6;
	font-size: 16px;
}

ul {
	list-style-type: none;
}

h1,
h2,
h3 {
	font-weight: 500;
	line-height: 1.2;
	margin: 10px 0;
}

p {
	margin: 10px 0;
}

a {
	color: #333;
	text-decoration: none;
	font-size: 16px;
}

ul {
	list-style: none;
}

img {
	width: 100%;
}
`;

export default GlobalStyle;
