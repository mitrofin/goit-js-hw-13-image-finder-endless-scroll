import './styles.css';
import apiService from './js/apiService.js';
import "material-design-icons/iconfont/material-icons.css";
import getRefs from './js/getRefs';
import onScroll from './js/scroll';
import clearResult from './js/clearResult';
import clearPage from './js/clearPage';
import showInfo from './js/showInfo';
import onLoadMore from './js/onLoadMore';
import onFetchError from './js/onFetchError';
import renderCard from './js/renderCard';
import onClickImg from './js/modalImg';
import intersectionObserver from './js/intersectionObserver';

const debounce = require('debounce');
const api = new apiService();
const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onSearch, 500));
/* refs.clickButton.addEventListener('click', onLoadMore); */
refs.containerList.addEventListener('click', onClickImg);


function onSearch(event) {
    event.preventDefault();
    clearPage()
    clearResult();
    api.resetPage();
    api.img = event.target.value;
    if (api.img.length === 0 || api.img === " ") {
        clearResult();
        showInfo();
        return;
    }
    
    try {
    /* api.fetchApi().then(renderCard) */
        onLoadMore()
        /* intersectionObserver()  */ 
    } catch (error) {
        onFetchError()
    }
}


const onEntry = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && api.img !== "") {
            onLoadMore();
        }

    });
};
const option = {
    rootMargin:'100px',
};

const observer = new IntersectionObserver(onEntry, option);

observer.observe(refs.pointForDownloadNextImages);


