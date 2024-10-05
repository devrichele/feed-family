import { Header } from './components/Header';
import { Post } from './Post';
import './styles.css'

export function App() {

  return (
    <div>
      <Header/>
      
      <Post 
      author = "Brenda Richele" 
      content = "Primeiro post do projeto"
      /> 
      <Post
      author = "Melyssa"
      content="Novo Post"
      />
   </div>
)
}


