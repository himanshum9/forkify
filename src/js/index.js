import Search from './models/Search';
import Recipe from './models/Recipe'
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
elements.searchResPag.addEventListener('click', e=>{
	const button = e.target.closest('.btn-inline');
	if (button) {
		const page = parseInt(button.dataset.goto,10);
		searchView.clearResult();
		searchView.renderResults(state.search.recipe,page);
	}
});
// const search = new Search('pizza');
// const recipe = search.getResults();
// console.log(recipe);
// console.log(search);