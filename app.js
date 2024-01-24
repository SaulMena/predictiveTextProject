
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak']

function search(str) {
  let results = [];

  // Filter the fruit list based on user input
  results = fruit.filter(fruit => fruit.toLowerCase().includes(str.toLowerCase()));

  return results;
}

function searchHandler(e) {
  const inputVal = e.target.value.trim();
  const results = search(inputVal);

  // Show the suggestions in the dropdown
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = '';

  if (results.length > 0) {
    results.forEach(result => {
      const li = document.createElement('li');
      li.textContent = result;
      suggestions.appendChild(li);
    });

    suggestions.classList.add('has-suggestions');
  } else {
    suggestions.classList.remove('has-suggestions');
  }
}

function useSuggestion(e) {
  if (e.target.tagName === 'LI') {
    input.value = e.target.textContent;
    suggestions.classList.remove('has-suggestions');
  }
}

function highlightSuggestion(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.add('highlighted');
  }
}

function removeHighlight() {
  const highlighted = document.querySelector('.highlighted');
  if (highlighted) {
    highlighted.classList.remove('highlighted');
  }
}

input.addEventListener('input', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mouseover', highlightSuggestion);
suggestions.addEventListener('mouseout', removeHighlight);
