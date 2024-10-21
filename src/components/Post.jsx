import styles from './Post.module.css';

export function Post (){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avart}src="https://media.licdn.com/dms/image/v2/D4D03AQH_z--8pl-nnA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722022791055?e=1734566400&v=beta&t=8MxIeqQftTASwCElqIAG27ZqwLAEeJGQG-20JlLwCMU"/>
                 <div className={styles.authorInfo}>
                        <strong>Richele B</strong>
                        <span>Web Devloper</span>

                    </div>
                </div>
                <time title="20 de Outubro ás 13h" dateTime="2024-20-10 13:00:10">Publicado há 1h</time>

             </header>
             <div className={styles.content}>
            
                    <p>Olá Pessoal, estou amando aprender mais sobre criação de componente. </p>
                    <p>Cada dia que passa, eu me apaixono mais um pouco pela programação.    </p>
                    <a>brendaricheledev@gmail.com </a>
             </div>

             <form className={styles.comentForm}> 
                <strong>Deixe seu Feedback</strong>
                
                <textarea
                    placeholder='Deixe um Comentário'
                />
                <button type="submit">Comentar</button>

             </form>
        </article>
    )
}