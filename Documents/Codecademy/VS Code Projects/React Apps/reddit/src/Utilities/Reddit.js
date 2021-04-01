import {useSelector} from 'react-redux';
import {selectSubReddit} from "../Features/subRedditSlice";
import store from "../Store/store";
import App from '../App';



const Reddit = {
    

    async populateReddit() {
        //${store.state}
    const data = await fetch(`https://www.reddit.com/.json`);
    const jsonData = data.json();
    return jsonData;
    },

    async searchReddit(subReddit, searchTerm) {
    try {
        //const data = await fetch(`https://www.reddit.com/search.json?q=${term}`);
    const data = await fetch(`https://www.reddit.com/r/${subReddit}/search.json?q=${searchTerm}&restrict_sr=on`);  
    const jsonData = data.json();
    return jsonData;
    } catch(err) {
        const errorMessage = `Oops, that didn't work`
        return errorMessage
    }
}
}

export default Reddit;