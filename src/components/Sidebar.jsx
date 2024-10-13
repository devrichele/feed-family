import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css';

export function Sidebar (){
    return(
        <aside className={styles.sidebar}>
           <img 
           className={styles.cover}src='https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            <div className={styles.profile}>
            <img className={styles.avatar}src="https://media.licdn.com/dms/image/v2/D4D03AQH_z--8pl-nnA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722022791055?e=1734566400&v=beta&t=8MxIeqQftTASwCElqIAG27ZqwLAEeJGQG-20JlLwCMU" alt=""/>
                <strong>Richele </strong>
                <span> Web Developer</span>
            </div>
            <footer>
                <a href='#'>
                <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}