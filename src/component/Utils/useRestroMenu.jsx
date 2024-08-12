import { Menu_list } from '../Links';
import { useEffect, useState } from 'react';

const userestroMenu = (resID) => {

    const [RestroMenu, setRestroMenu] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(Menu_list + resID)
        const json = await data.json();
        setRestroMenu(json?.data);
        console.log(json);
    };
    return RestroMenu;

};

export default userestroMenu;