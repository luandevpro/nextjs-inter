import React from 'react';
import { useSelector } from 'react-redux';
import { withRedux } from '../lib/withRedux';
import * as actions from '../actions';

function Posts() {
	const posts = useSelector((state) => state.posts);
	return (
		<div>
			<ul>
				{posts.map((post) => {
					return <li key={post.id}>{post.title}</li>;
				})}
			</ul>
		</div>
	);
}

Posts.getInitialProps = async (ctx) => {
	await ctx.reduxStore.dispatch(actions.getPostsMid());
};

export default withRedux(Posts);
