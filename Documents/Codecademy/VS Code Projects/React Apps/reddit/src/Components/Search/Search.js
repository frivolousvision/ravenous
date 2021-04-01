import {Results} from '../Results/Results';
import redditLogo from './reddit-logo.png';
import empty from './wow-empty.png';
import './Search.css';


export const Search =(props)=> {

    return (
        <div className="searchResults">
                {!props.results ? <img className="loading" src={redditLogo} alt=""/> :
                props.results.data ? props.results.data.children.map((child, index) => {
                    return (
                        <Results searchResults={child} key={index} />
                    )
                }) :
                <img src={empty} alt="" className="empty-image"/>
                }
                
        </div>

    )
}