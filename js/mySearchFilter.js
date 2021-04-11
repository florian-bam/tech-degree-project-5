const search = document.getElementById('searchbar');
const boxTexts = document.querySelectorAll("a");
const handleSearch = event => {
  const searchTerm = event.target.value.toLowerCase();
  console.log(searchTerm);
  boxTexts.forEach(boxText => {
    //get the value text of the attribute for the a elements (const boxTexts = document.querySelectorAll("a");)
    const text = boxText.getAttribute('data-caption');
    //variable that holds the a element that has data-caption text that is in the search 
    const box = boxText;

    
   // if(text.indexOf(searchTerm) > -1) {
    if(text.includes(searchTerm)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";  
    }
  });
};

// search.addEventListener('keyup', handleSearch);

// Thanks to @Sam_Atkinson. Basically all credit goes to her for figuring this out.