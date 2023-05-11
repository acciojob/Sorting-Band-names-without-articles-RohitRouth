//your code here
let bandNames = ['The Beatles', 'Aerosmith', 'Led Zeppelin', 'The Who', 'Nirvana', 'Rolling Stones', 'Pink Floyd'];

// Remove articles from band names
let regex = /^(a |an |the )/i;
let sortedBands = bandNames.map(band => band.replace(regex, '').trim()).sort();

// Get ul element and add li elements for each band name
let ul = document.getElementById('band');
sortedBands.forEach(band => {
  let li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});

