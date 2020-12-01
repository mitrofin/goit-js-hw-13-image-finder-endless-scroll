import getRefs from './getRefs';
import apiService from './apiService';
import onLoadMore from './onLoadMore';
/* const { entries } = require("core-js/fn/array"); */

const api = new apiService();

export default function intersectionObserver(){ 
     
    const refs = getRefs();

    const onEntry = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && api.img !== "") {
            /* onLoadMore(); */
              api.fetchApi().then(renderCard)  
            }

        });
    };
    const option = {
        rootMargin:'200px',
    };

    const observer = new IntersectionObserver(onEntry, option);

    observer.observe(refs.pointForDownloadNextImages);
}


