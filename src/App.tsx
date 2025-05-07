import { Search } from '../src/components/Search';
import { Container } from '../src/components/Container';
import { TheHeader } from '../src/components/TheHeader';
import { UserCard } from '../src/components/UserCard';

import { defaultUser } from './mock'

function App() {

  return (
    <Container>
      <TheHeader />
      <Search hasError onSubmit={() => { }} />
      <UserCard {...defaultUser} />
    </Container>
  );
}

export default App;
