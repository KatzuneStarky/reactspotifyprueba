import { BsFillHouseFill, BsJournalAlbum } from 'react-icons/bs'
import { FaBroadcastTower, FaMicrophoneAlt, FaPodcast } from 'react-icons/fa'
import { BiPulse } from 'react-icons/bi'

const MenuList = [
    {
        id: 1,
        icon: <BsFillHouseFill />,
        name: "Inicio"
    },
    {
        id: 2,
        icon: <BiPulse />,
        name: "Descubre"
    },
    {
        id: 3,
        icon: <FaBroadcastTower />,
        name: "Radio"
    },
    {
        id: 4,
        icon: <FaMicrophoneAlt />,
        name: "Artistas"
    },
    {
        id: 5,
        icon: <BsJournalAlbum />,
        name: "Albums"
    },
    {
        id: 6,
        icon: <FaPodcast />,
        name: "Podcasts"
    }
]

export { MenuList }