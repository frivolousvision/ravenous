import { Search } from '../Search/Search'; 
import "./Header.css";
import {useState, useEffect} from 'react';
import Reddit from '../../Utilities/Reddit';
import redditLogo from "./reddit-logo.png";


export const Header =()=> {
    const [searchTerm, setSearchTerm] = useState('');
    const [subReddit, setSubReddit] = useState('');
    const [results, setResults] = useState(null);

    useEffect(()=> {
        Reddit.populateReddit()
        .then( data => setResults(data));
    }, [])

    const handleSearchTerm =(e)=> {
        setSearchTerm(e.target.value)
    }
    
    const handleSubReddit =(e)=> {
        setSubReddit(e.target.value)
    }

    const handleSubmit =()=> {
        const joinedSubReddit = subReddit.split(" ").join("");
        const joinedSearchTerm = searchTerm.split(" ").join("");
        Reddit.searchReddit(joinedSubReddit, joinedSearchTerm)
        .then(data => setResults(data));
        setSearchTerm('');
        setSubReddit('');
    }

    return (
        <div>
        <div className="header">
        <div className="logo">
        <img src={redditLogo} alt="" className="reddit-logo"/>
        <h1>reddit mimic</h1>
        </div>    
            <div className="input-box">
                <input
                type="text"
                placeholder="r/search"
                value={subReddit}
                onChange={handleSubReddit}
                />

                <input
                type="text"
                placeholder="search"
                value={searchTerm}
                onChange={handleSearchTerm}
                />

                <input
                type="submit"
                value="search"
                onClick={handleSubmit}
                />
            </div>
            </div>
            <Search results={results} className="search"/>
        </div>
    )
}