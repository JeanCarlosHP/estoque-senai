import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

	html {
		font-size: 62.5%
	}

	body {
		background: #f0f0f5;
	}

	body, input, button {
		font: 16px Roboto, sans-serif;
	}

	button {
		cursor: pointer;
	}
`;