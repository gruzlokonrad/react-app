import Hero from './components/Hero/Hero'
import List from './components/List/List';
import SearchForm from './components/SearchForm/SearchForm'
import Container from './components/Container/Container';
import './styles/normalize.scss';
import './styles/global.scss';

const App = () => {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
    </Container>
  );
};

export default App;