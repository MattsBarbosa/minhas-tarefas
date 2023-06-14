import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const ListaDeTarefas = () => (
  <>
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categorio&ldquo; e &quot;termo&ldquo;{' '}
      </p>
      <ul>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
        <li>
          <Tarefa />
        </li>
      </ul>
    </Container>
  </>
)

export default ListaDeTarefas
