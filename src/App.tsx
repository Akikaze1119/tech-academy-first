import Header from './containers/Header';
import Contact from './containers/Contact';

function App() {
  return (
    <>
      <Header />
      <main>{<Contact />}</main>
    </>
  );
}

export default App;
