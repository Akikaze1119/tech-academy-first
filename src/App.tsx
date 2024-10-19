import Header from './containers/Header';
import Contact from './containers/Contact';
import Interest from './containers/Interest';
import Point from './containers/Point';
import QA from './containers/QA';

function App() {
  return (
    <>
      <Header />
      <main>
        <Contact text={<p>24時間オンライン予約はこちら</p>} />
        <Interest />
        <Point />
        <QA />
        <Contact
          text={
            <p>
              ホワイトニングがいつでも1回2,750円（税込）
              <br />
              24時間オンライン予約はこちら
            </p>
          }
        />
      </main>
    </>
  );
}

export default App;
