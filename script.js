const bandNames = ['The Beatles', 'Led Zeppelin', 'The Rolling Stones', 'Aerosmith', 'Nirvana'];

function stripArticle(name) {
  // Regular expression to match articles at the beginning of a string
  const articleRegex = /^(a|an|the)\s/i;
  return name.replace(articleRegex, '').trim();
}

const sortedBands = bandNames.sort((a, b) => {
  if (stripArticle(a) > stripArticle(b)) {
    return 1;
  } else {
    return -1;
  }
});

const ul = document.querySelector('#bands');
sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});
