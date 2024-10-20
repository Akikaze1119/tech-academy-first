import logo from '../assets/logo_footer.png';
export default function Footer() {
  return (
    <footer className='footer container'>
      <div className='contents_width'>
        <img src={logo} alt='キラメキクリニック' />
        <p className='footer-text'>※自由診療のみ。公的保険は適用されません。</p>
      </div>
    </footer>
  );
}
