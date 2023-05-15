import React from "react";

//import AppoloClient from 'apollo-boost';
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloClient } from "@apollo/client";

const httpLink = new createHttpLink({
    uri:"https://48p1r2roz4.sse.codesandbox.io"
});
const client = new ApolloClient({
   link:httpLink,
   cache: new InMemoryCache()
});

function ExcangeRates() {
    const { loading, error, data} = useQuery(gql`
        {
            rates(currency: "EUR"){
                currency
                rate
            }
        }
        `);
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: </p>;

        return data.rates.map(({ currency, rate}) => (
            <div key={currency}>
                <p>
                    {currency}: {rate}
                </p>
            </div> 
        ));
}

const AppGraphQl =() =>(
    <ApolloProvider client={client}>
        <div>
            <h2>Upit serveru:</h2>
            <h2>https://api.coninbase.com/v2/exchange-rates?currency=USD</h2>
            <ExcangeRates/>
        </div>
    </ApolloProvider>
);

export default AppGraphQl;