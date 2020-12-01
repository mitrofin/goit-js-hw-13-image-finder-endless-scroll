import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';
export default function onClickImg({ target: { dataset } }) {
    basicLightbox
        .create(
            `<img width="" height="" src="${dataset.sourse}">`,
        ).show();
}