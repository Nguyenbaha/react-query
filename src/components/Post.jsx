import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

const hostAPI = process.env.REACT_APP_API_CALL;

const Post = () => {
	const fetchApi = async () => {
		const response = await axios.get(`${hostAPI}`);
		return response.data;
	};

	const { isError, isLoading, data } = useQuery({queryKey: ['post'], queryFn: fetchApi, retry: 1});

	// useEffect(() => {
	// 	fetchApi();
	// }, []);
	if (isLoading) {
		return <h1> loading.... </h1>;
	}

	if (isError) {
		return <h1> error.... </h1>;
	}

	return (
		<div>
			{data?.map((ele) => {
				return <h1 key={ele.id}><span style={{color: "red"}}> TITLE</span> :  {ele.title} </h1>
			})}
		</div>
	);
};

export default Post;
