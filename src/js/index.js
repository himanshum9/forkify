import Search from './models/Search';
import {elements,renderLoader,clearLoader} from './views/base';
import * as searchView from './views/searchView';

/** Global State of the app
*Search Object
*Current Recipe Object
*Shopping list Object
*Liked Recipe
*/
const state = {};
const controlSearch = async() => {
	const query = searchView.getInput();
	if (query) {
	state.search = new Search(query);
	searchView.clearInput();
	searchView.clearResult();
	renderLoader(elements.searcResDiv);

	state.search.recipe = await state.search.getResults();
	clearLoader();
	searchView.renderResults(state.search.recipe);
	}
}
elements.searchForm.addEventListener('submit', e=>{
	e.preventDefault();
	controlSearch();
});
// const search = new Search('pizza');
// const recipe = search.getResults();
// console.log(recipe);
// console.log(search);