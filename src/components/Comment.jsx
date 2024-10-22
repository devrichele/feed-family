import { Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return(
        <div className={styles.commnet}>
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQH_z--8pl-nnA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722022791055?e=1734566400&v=beta&t=8MxIeqQftTASwCElqIAG27ZqwLAEeJGQG-20JlLwCMU" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
            
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>
                                Richele B.
                            </strong>
                            <time title="20 de Outubro ás 13h" dateTime="2024-20-10 13:00:10">Cerca de 1h atrás </time>
                         </div>
                        <button title="Detelar Comentário">
                            <Trash size={20}/>
                         </button>
                    </header>         
            <p>
                Muito Bom Dev, Parabéns!
            </p>
            </div>
                <footer>
                    <button>
                        <thumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>           
            </div>
        </div>
    )
}