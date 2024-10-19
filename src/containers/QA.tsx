import q1Img from '../assets/q1.png';
import q2Img from '../assets/q2.png';
import q3Img from '../assets/q3.png';

const contents = [
  {
    id: 1,
    img: q1Img,
    question: '料金設定の秘訣は？',
    answer:
      'ホワイトニングをもっと身近なものにしたいと考え、無駄なコストを徹底的に排除し、効果や安全性を犠牲にすることなく医院利益を徹底的に切り詰めたことで現在のリーズナブルな料金設定を実現しました！',
  },
  {
    id: 2,
    img: q2Img,
    question: '歯を削ったり溶かしたりしない？',
    answer:
      '漂白剤を使い歯を白くします。歯科医院のホワイトニングは歯を削ったりすることなく漂白剤を使用して歯を白くします。茶碗に付いた茶渋を漂白剤を使って落とすのと同じ原理です。',
  },
  {
    id: 3,
    img: q3Img,
    question: 'なぜ熱くならないの？',
    answer:
      'ホワイトニング専用 LEDライトだから赤外線域及び紫外線域を力ットすべく開発された、ホワイトニング専用 LEDライトを使用するため熱くなく、また日焼けすることもありません。',
  },
];

export default function QA() {
  return (
    <section className='qa container bg-stripe'>
      <div className='contents_width'>
        <h2>
          ホワイトニングに関する
          <br />
          疑問にお答えします！
        </h2>
        <div className='qa-container'>
          {contents.map((content) => (
            <div key={content.id} className='qa-box'>
              <img src={content.img} alt={content.question} />
              <h3 className='question'>
                <span>Q</span>
                {content.question}
              </h3>
              <p className='answer'>
                <span>A</span>
                {content.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
