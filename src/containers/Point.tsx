const contents = [
  {
    id: 1,
    title: '歯科医院でしかできないホワイトニングです。',
    description: (
      <p>
        本当に歯を白くするためには歯の汚れを落とすだけでは不十分で、漂白をする必要があります。但し歯の漂白をおこなうホワイトニングは医療行為にあたるため、歯科医院でしか施術できません。
        <br />
        ホワイトニングのみで年間15万人以上の施術をおこなうキラメキホワイトニングにお任せください。
      </p>
    ),
  },
  {
    id: 2,
    title: 'LEDライトの照射回数毎のシンプルな料金設定。',
    description: <p>LEDライト1回照射2,750円、2回照射5,400円、3回照射7,950円（全て税込）です。</p>,
  },
  {
    id: 3,
    title: '有資格者によるプ口の施術。',
    description: (
      <p>
        きちんとしたホワイトニングをする際には虫歯やクラックなどの事前診断が必須です。当院では歯科医師が事前診断のうえで歯科医師又は歯科衛生士が施術をおこないますので全てお任せください。
      </p>
    ),
  },
];

export default function Point() {
  return (
    <section className='point container'>
      <div className='contents_width'>
        <h2>
          キラメキホワイトニング
          <br />
          3つのポイント
        </h2>
        <div className='points-container'>
          <div className='point-box'>
            <p className='point-num poppins-bold'>01</p>
            <h3 className='point-title'>{contents[0].title}</h3>
            <div className='point-text'>{contents[0].description}</div>
          </div>
          <div className='point-box point-2'>
            <p className='point-num poppins-bold'>02</p>
            <h3 className='point-title'>{contents[1].title}</h3>
            <div className='point-text'>{contents[1].description}</div>
          </div>
          <div className='point-box point-3'>
            <p className='point-num poppins-bold'>03</p>
            <h3 className='point-title'>{contents[2].title}</h3>
            <div className='point-text'>{contents[2].description}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
