var inputSearch = document.querySelector('.header-search input')
var searchWrap = document.querySelector('.search-wrap')
var closeBtn = document.querySelector('.search-container_closebtn');
var inputSearchMain = document.querySelector('.search-content_input input')
inputSearch.addEventListener('focus', function () {
    searchWrap.style.display ='block'
    inputSearchMain.focus()
})

closeBtn.addEventListener('click', function () {
    searchWrap.style.display = 'none'
})

searchWrap.addEventListener('click', function(e) {

    searchWrap.style.display = 'none'
})