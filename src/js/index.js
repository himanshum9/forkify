import Search from './models/Search';
const search = new Search('pizza');
const recipe = search.getResults();
console.log(recipe);
console.log(search);