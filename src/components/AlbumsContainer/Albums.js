import {Album} from "./Album";

const Albums = ({albums}) => {
    return (
        <div>
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};