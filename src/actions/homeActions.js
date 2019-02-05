import * as TYPES from '../constants/Types'
import * as Images from '../Themes/Images'

export const getCarouselImages = () => dispatch => {
    let images = [
        {
            text: "Yeet",
            image: "https://cdn.discordapp.com/attachments/399718184300576769/542424534607724548/1549394434123.jpg"
        },
        {
            text: "Okay",
            image: "https://cdn.discordapp.com/attachments/399718184300576769/542424549296439306/1549394428592.jpg"
        }
    ]
    dispatch({
        type: TYPES.GET_CAROUSEL_IMAGES,
        payload: images
    })
}