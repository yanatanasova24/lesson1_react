import React, {useEffect, useState} from 'react';
import {albumService} from "../../services/albumService";
import {Albums} from "./Albums";

const AlbumsContainer = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        albumService.getAll().then(({data})=>setAlbums(data))
    }, []);
    return (
        <div>
            <Albums albums={albums} />
        </div>
    );
};

export {AlbumsContainer};