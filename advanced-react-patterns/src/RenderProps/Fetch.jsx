import { Component } from 'react';

class DataFetcher extends Component {
    state = { 
        data: null,
        loading: true,
        error: null
    };

    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({data, loading: false}))
            .catch(error => this.setState({error, loading: false}));
    }

    render() { 
        const { data, loading, error } = this.state;
        return this.props.children(data, loading ,error);
    }
}
 
export default DataFetcher;