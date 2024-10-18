import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Template() {
  return (
    <section className='template container'>
      <div className='contents_width'>
        <h2>test</h2>
        <FontAwesomeIcon icon={['fas', 'yen-sign']} style={{ color: 'red', fontSize: '48px' }} />
        <FontAwesomeIcon icon='coffee' className='custom-icon' />
      </div>
    </section>
  );
}
