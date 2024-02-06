import React, {useEffect, useState} from 'react';
import {Launch} from "./Launches/Launch"
import css from "./SpaceX.module.css"

const SpaceX = () => {
    const [launches, setLaunches] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/').then(value => value.json()).then(value => setLaunches(value));
    }, []);

    const filteredLaunches = launches.filter(el => el.launch_year !== '2020');
    return (
        <div className={css.SpaceX}>
            {filteredLaunches.map(launch => <Launch launch={launch} key={launch.flight_number}/>)}
        </div>
    );
};

export default SpaceX;