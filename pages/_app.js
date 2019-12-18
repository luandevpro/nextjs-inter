import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Link from 'next/link';

class MyApp extends App {
	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Head>
					<title>My page</title>
				</Head>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<ul>
						<li>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a>About</a>
							</Link>
						</li>
						<li>
							<Link href="/posts">
								<a>Posts</a>
							</Link>
						</li>
					</ul>
					<Component {...pageProps} />
				</ThemeProvider>
			</Container>
		);
	}
}

export default MyApp;
