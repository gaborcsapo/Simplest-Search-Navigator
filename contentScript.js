let focusIdxOnPage = 0;
let searchResultArray = Array.prototype.slice.call(document.getElementById("rso").children).filter(block => block.className == "g").map(e => e.getElementsByClassName("r")[0].children[0]);

searchResultArray[0].focus();                                                          
                                                        
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