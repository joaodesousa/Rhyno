
import { useState, useEffect } from 'react';
import { ApiClient } from 'twitch';
import { ClientCredentialsAuthProvider } from 'twitch-auth';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


export default function Twitch() {

    const authProvider = new ClientCredentialsAuthProvider(process.env.CLIENT_ID, process.env.CLIENT_SECRET);
    const apiClient = new ApiClient({ authProvider });

    const [team, setTeam] = useState([]);
    const [streams, setStreams] = useState([]);
    
    useEffect(() => {
        apiClient.helix.teams.getTeamByName('rhynoesports').then(res => {
            setTeam(res._data.users);
            //console.log(res._data.users);
        }
        );
    }, []);


    useEffect(() => {
        apiClient.helix.streams.getStreams({ userId: team.map(user => user.user_id) }).then(res => {
            setStreams(res);
           console.log(res);
        }
        );
    }, []);

    return (
        <div className="p-8 pt-48 transform skew-y-3 bg-black mt-20 h-screen">
            <div className="flex  items-center text-white transform -skew-y-3">
              <div className='flex flex-wrap space-x-10'>
              </div>
            </div>
        </div> 
    )
}
