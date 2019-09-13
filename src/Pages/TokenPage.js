import React, { useEffect } from 'react';
import { fetchPosts, storeAuth } from '../Store/actions/index'
import { connect } from 'react-redux';
const TokenPage = props => {
    useEffect(() => {
        props.fetchPosts(2).then(res => {
            console.log("res", res);
        });
        props.setTokenandClientHandler(props.match.params.token, props.match.params.clientId);
        props.history.push('/mobileverify');
    }, [props])
    return (
        <div>
            <h1>{JSON.stringify(props.match.params.clientId)}</h1>
        </div>
    );  
};
const mapDispatchToProps = dispatch => {
    return {
        setTokenandClientHandler: (token, clientId) => dispatch(storeAuth(token, clientId)),
        fetchPosts: (id) => dispatch(fetchPosts(id))
    }
}
export default connect(null, mapDispatchToProps)(TokenPage);