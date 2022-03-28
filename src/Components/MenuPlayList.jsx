import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { BsMusicNoteList, BsTrash } from 'react-icons/bs'
import { PlayList } from './PlayList'

function MenuPlayList() {
    return (
        <div className='playListContainer'>
            <div className="nameContainer">
                <p>PlayList</p>
                <i>
                    <FaPlus />
                </i>
            </div>
            <div className="playListScroll">
                {
                    PlayList && PlayList.map((play) => (
                        <div className='playList' key={play.id}>
                            <i className='list'>
                                <BsMusicNoteList />
                            </i>
                            <p>{play.name}</p>
                            <i className='trash'>
                                <BsTrash />
                            </i>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export { MenuPlayList }