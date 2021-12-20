let focusIdxOnPage = 0;
let searchResultArray = Array.prototype.slice.call(document.getElementById("rso").querySelectorAll(".g")).map(e => e.querySelector("a"));

searchResultArray[focusIdxOnPage].focus();  
                                                        
document.addEventListener('keydown', (e)=>{
  if (e.code == 'Tab'){
    e.preventDefault();
    if (event.shiftKey){
      if (focusIdxOnPage > 0){
        focusIdxOnPage -= 1;
        searchResultArray[focusIdxOnPage].focus();
      }
    } else {
      if (focusIdxOnPage < searchResultArray.length - 1){
        focusIdxOnPage += 1;
        searchResultArray[focusIdxOnPage].focus();
      }
    }
  }
  console.log(searchResultArray[focusIdxOnPage].href);
});