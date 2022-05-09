
import { useState, useEffect } from 'react';
import { ApiClient } from 'twitch';
import { ClientCredentialsAuthProvider } from 'twitch-auth';

export default function Twitch() {

    const clientId = 'skui3lyhw0mn8jsxv5mf5qmydg2vzo';
    const clientSecret = '1lrfxl7frwoo3m2j5lasq3fonjhtfl';
    const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);
    const apiClient = new ApiClient({ authProvider });

    const [streams, setStreams] = useState([]);
    const [users, setUsers] = useState([]);


        useEffect(() => {
            apiClient.helix.teams.getTeamByName('rhynoesports').then(res => {
                setUsers(res._data.users);
            }
            );
        }, []);


        useEffect(() => {
            users.forEach(user => {
                apiClient.helix.users.getUserById(user.user_id).then(res => {
                    setStreams(streams.concat(res._data));
                }
                );
            }
            );
        }, []);

        console.log(streams);


    return (
        <div className="p-8 pt-20 transform skew-y-3 bg-black mt-20 h-screen">
            <div className="flex  items-center text-white transform -skew-y-3">
              <div className=' flex flex-wrap space-x-10'>
                {streams.map(stream => (
                    <div className='flex' key={stream.id}>
                        <div className='flex items-center space-y-24 '>
                            <img src={stream.profile_image_url} alt='profile' className='h-24 w-24 rounded-full' />
                            <div className='flex items-center'>
                                <h1 className='text-2xl font-bold'>{stream.display_name}</h1>
                            </div>
                        </div>
                    </div> 
                ))}
              </div>
            </div>
        </div> 
    )
}