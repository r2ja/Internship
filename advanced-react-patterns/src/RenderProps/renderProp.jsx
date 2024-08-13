import React, { Component } from 'react';
import DataFetcher from './Fetch';

function Fetcher() {
    return (
        <>
            <h1> Data Fetcher Render Prop: </h1>
            <DataFetcher url="https://jsonplaceholder.typicode.com/todos">
                {(data, loading, error) => (
                    <div>
                        {loading ? (
                            <p> Loading data... </p>
                        ) : error ? (
                            <p> Error:, {error.message} </p>
                        ) : (
                            <div>
                                <h2> Data: </h2>
                                <p>{JSON.stringify(data, null, 2)}</p>
                            </div>
                        )}
                    </div>
                )}
            </DataFetcher>

        </>
    );
}

export default Fetcher;