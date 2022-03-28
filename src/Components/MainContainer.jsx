import React, { useEffect } from 'react'
import '../Styles/MainContainer.css'
import { Banner } from './Banner'
import { FaUsers } from 'react-icons/fa'
import { AudioList } from './AudioList'

function MainContainer() {
    useEffect(() => {
        const allLi = document.querySelector('.menuList ul').querySelectorAll('li')

        function changeMenuActive(){
            allLi.forEach((n) => n.classList.remove('active'))
            this.classList.add('active')
        }

        allLi.forEach((n) => n.addEventListener("click", changeMenuActive))
    }, [])
    return (
        <div className='mainContainer'>
            <Banner />

            <div className="menuList">
                <ul>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Album</a></li>
                    <li><a href="#">Canciones</a></li>
                    <li><a href="#">Fans</a></li>
                    <li><a href="#">AcercaDe</a></li>
                </ul>
                <p><i><FaUsers /></i> 12.3M <span>Seguidores</span></p>
            </div>
            <AudioList />
        </div>
    )
}

export { MainContainer }