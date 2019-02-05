import * as Types from '../constants/Types';

export default (state = {}, action) => {
    switch(action.type) {
        case Types.GET_CAROUSEL_IMAGES: 
            return {
                carouselImages: action.payload
            }
        default:
            return state
    }
}