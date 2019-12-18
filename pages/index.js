import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import Link from '../src/Link';
import styled from 'styled-components';
import { withRedux } from '../lib/withRedux';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions';

function Index() {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	const inCre = () => {
		dispatch(actions.inCre());
	};
	const deCre = () => {
		dispatch(actions.deCre());
	};
	return (
		<Container maxWidth="sm">
			<Button onClick={inCre}>+</Button>
			<h1>{counter}</h1>
			<Button onClick={deCre}>-</Button>
			<Title>Home Page Title with styled-components</Title>
			<Box my={4}>
				<Typography variant="h4" component="h1" gutterBottom>
					Next.js v4-beta example
				</Typography>
				<Link href="/about" color="secondary">
					Go to the about page
				</Link>
			</Box>
		</Container>
	);
}

export default withRedux(Index);

const Button = styled.button`
	color: white;
	background: blue;
	width: 100px;
	height: 50px;
	border: none;
	border-radius: 4px;
	&:focus {
		outline: 0;
	}
`;

const Title = styled.h1`
	color: red;
	font-size: 50px;
`;
