import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../../components/Product/Product';
import * as productActions from '../../actions/ProductActions';


class ProductContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            products: props.products,
            fetching: props.productFetching,
            error: props.productError
        }
    }

    componentDidMount() {
        this.props.ProductRequest(this.props.user.token)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.products !== prevState.products){
            return { products: nextProps.products };
        } else if(nextProps.productFetching !== prevState.fetching) {
            return { fetching: nextProps.productFetching }
        } else if(nextProps.productError !== prevState.error) {
            return { error: nextProps.error }
        }
        else return null;
    }
     
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.productFetching !== this.props.productFetching){
            this.setState({fetching: this.props.productFetching});
        }
        if(prevProps.productError !== this.props.productError) {
            this.setState({ error: this.props.productError })
        }
    }

    render() {
        return (
            <Product 
                products={this.state.products} 
                fetching={this.state.fetching}
                error={this.state.error}
            />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ProductRequest: (token) => {
            dispatch(productActions.ProductRequest(token))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: { ...state.user },
        products: [ ...state.product.products ],
        productFetching: state.product.productFetching,
        productError: state.product.error
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContainer);
