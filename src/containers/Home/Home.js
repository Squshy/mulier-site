import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../../components/Home/Home';
import * as homeActions from '../../actions/homeActions';


/*  NOTES
-   Replace getCarouselImages with dynamic call
*/

class HomeContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            carouselImages: []
        }
    }

    componentDidMount() {
        this.props.getCarouselImages();
        console.log('Props:\n' + JSON.stringify(this.props, null, 4))
        this.setState({
            carouselImages: this.props.carouselImages
        });
    }

    render() {
        return (
            <Home carouselImages={this.state.carouselImages}/>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCarouselImages: () => {
            dispatch(homeActions.getCarouselImages())
        }
    }
}

const mapStateToProps = (state) => {
    console.log('State:\n' + JSON.stringify(state, null, 4));
    return {
        carouselImages: state.homeReducer.carouselImages
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
