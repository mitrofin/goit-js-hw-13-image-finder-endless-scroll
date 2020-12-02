import getRefs from './getRefs';
import apiService from './apiService';
import onLoadMore from './onLoadMore';
import renderCard from './renderCard';

const { entries } = require("core-js");

const api = new apiService();
const refs = getRefs();

export default function intersectionObserver() { 
     
    const onEntry = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && api.img !== "") {
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


