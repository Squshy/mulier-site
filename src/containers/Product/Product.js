import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../../components/Product/Product';
import * as productActions from '../../actions/ProductActions';


class ProductContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: props.products
        }
    }

    componentDidMount() {
        this.props.ProductRequest(this.props.user.token)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.products !== prevState.products){
            return { products: nextProps.products};
        }
        else return null;
    }
     
    // componentDidUpdate(prevProps, prevState) {
    //     if(prevProps.someValue!==this.props.someValue){
    //         //Perform some operation here
    //         this.setState({someState: someValue});
    //         this.classMethod();
    //     }
    // }

    render() {
        return (
            <Product products={this.state.products} />
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
        products: [ ...state.product.products ]
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContainer);
