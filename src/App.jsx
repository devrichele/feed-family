import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './styles.css'

export function App() {

  return (
    <div>
      <Header/>
      
        <div className={styles.wrapper}> 
            <Sidebar/>
          <main>
              <Post
                author="Brenda Richele"
                content = "Lembre-se, vocês são incrivéis"

              />
              <Post
                author="Melyssa Gabrielly"
                content = "Estou com fome"

              />
              
          </main>
        </div>
    </div>
)
}


