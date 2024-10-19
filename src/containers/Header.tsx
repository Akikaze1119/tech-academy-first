import logo from '../assets/logo_top.png';

export default function Header() {
  return (
    <header className='header container'>
      <div className='contents_width'>
        <div className='header-text-container font-bold appeal-text'>
          <div>
            <p>年間15万人以上の来院実績</p>
            <br />
            <p>歯科医院でしかできない！</p>
          </div>
          <img src={logo} alt='キラメキクリニック' className='' />
          <div>
            <p>ホワイトニング</p>
            <br />
            <p className='header-last-text'>いつでも1回2,750円(税込)</p>
          </div>
        </div>
      </div>
    </header>
  );
}
