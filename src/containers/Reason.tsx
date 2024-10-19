import img1 from '../assets/price1.jpg';
import img2 from '../assets/price2.jpg';
import img3 from '../assets/price3.jpg';

const contents = [
  {
    id: 1,
    img: img1,
    textContent: (
      <>
        <p>美容系エステティック等と同様にホワイトニングもコース契約が一般的になっています。</p>
        <p>
          <strong>
            しかしながらキラメキホワイトニングでは、コース設定は基本的にしていません。
          </strong>
        </p>
        <p>
          なぜならコース契約は、お客様のメリットよりも業者側にメリットがあることが多いと考えるからです。
        </p>
      </>
    ),
  },
  {
    id: 2,
    img: img2,
    textContent: (
      <>
        <p>
          お客様の立場からすればそれは自分の思った通りの結果が出て初めて意味のあるものであり、契約の施術回数が自分にとって必要最小限である場合に限られます。
        </p>
        <p>
          <strong>
            効果には個人差がありお客様それぞれ結果に対する希望のレべルも異なるため、事前に
            個々のお客様について必要な施術回数や期間を設定することは困離です。
          </strong>
        </p>
      </>
    ),
  },
  {
    id: 3,
    img: img3,
    textContent: (
      <>
        <p>
          <strong>
            それらの点を踏まえキラメキホワイトニングでは、料金は基本的に来院毎の設定として、ご来院はご自身が必要と思う回数・タイミングにお任せしたいと考えています。
          </strong>
        </p>
        <p>
          定期的に通うには1回あたりのコストが安くなる様な設定が有用であるため、リピーターの方には大幅なコストダウンができるようなポイント＆ステイタスメンバー制度や、回数設定なしの一定期間フリーパスや割安な回数券を用意しております。積極的に利用して頂ければと思います。
        </p>
      </>
    ),
  },
];

export default function Reason() {
  return (
    <section className='bg-dot reason container'>
      <div className='contents_width'>
        <h2>
          キラメキホワイトニングが
          <br />
          選ばれる理由
        </h2>
        <div className='reason-container'>
          <h3>来院ごとのシンプルな料金設定</h3>
          <div className='reasons-box'>
            {contents.map((content) => (
              <div key={content.id} className='reason-box'>
                <img src={content.img} alt={'price image'} />
                <div className='reason-text-box'>{content.textContent}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
