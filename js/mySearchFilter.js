// ====================================================================
// Try #1: Using the geeksforgeeks.org approach: 
// https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/
// Failed due to Uncaught TypeError: Cannot read property 'includes' of undefined in line 10
// I sadly don't understand how about 50% of this works and I don't have enough time to go in and find out about every single detail.

// function search_photo() {
//     let input = document.getElementById('searchbar').value
//     input=input.toLowerCase();
//     let x = document.getElementsByTagName('A')[0].getAttribute('data-caption');

//     for (let i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.includes(input)) {
//             x[i].style.display="none";
//         } else {
//             x[i].style.display="list-item";
//         }
//     }
// }
// For re-activation: Add "onkeyup="search_photo()"" to the <input>

// ====================================================================
// Try #2: Using The approach from Amber: 
// https://treehouse-fewd-102.slack.com/archives/CBPTF1WJK/p1616695567056100
// Also doesn't work :/


const search = document.querySelector('#searchbar');
const boxTexts = document.getElementsByTagName("a")[0].getAttribute("data-caption");

const handleSearch = event => {
  const searchTerm = event.target.value.toLowerCase();
  
  boxTexts.forEach(boxText => {
    const text = boxText.textContent.toLowerCase();
    const box = boxText.parentElement;
    
   // if(text.indexOf(searchTerm) > -1) {
    if(text.includes(searchTerm)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";  
    }
  });

};

search.addEventListener('keyup', handleSearch);

// :'(