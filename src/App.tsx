import Header from './containers/Header';
import Contact from './containers/Contact';
import Interest from './containers/Interest';
import Point from './containers/Point';
import QA from './containers/QA';
import Reason from './containers/Reason';
import FAQ from './containers/FAQ';

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
        <Reason />
        <Contact
          text={
            <p>
              ＼年間150,000人以上の来院実績／
              <br />
              24時間オンライン予約はこちら
            </p>
          }
        />
        <FAQ />
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
