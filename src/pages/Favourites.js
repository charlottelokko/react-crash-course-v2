import { useContext } from 'react';

import FavouritesContext from '../store/favourites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavouritesPage() {
    const favouritesCtx = useContext(FavouritesContext); //gives current context snapshot

    let content;

    if(favouritesCtx.totalFavourites === 0) {
        content = <p>You got no favourites yet! Try adding some?</p>
    } else {
        content = <MeetupList meetups={favouritesCtx.favourites}/>
    }

    return (
        <section>
            <h1>My Favourites</h1>
            {content}
        </section>
    );
}

export default FavouritesPage;