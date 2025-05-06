import { Search } from '../src/components/Search';
import { Container } from '../src/components/Container';
import { TheHeader } from '../src/components/TheHeader';

function App() {

  return (
    <Container>
      <TheHeader />
      <Search hasError onSubmit={() => { }} />
    </Container>
  );
}

export default App;
