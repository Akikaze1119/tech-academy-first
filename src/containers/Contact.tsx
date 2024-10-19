import { ReactNode } from 'react';

type Props = {
  text: ReactNode;
};

export default function Contact({ text }: Props) {
  return (
    <section className='contact container'>
      <div className='contents_width'>
        {text}
        <a href='#'>
          <button>ご予約</button>
        </a>
      </div>
    </section>
  );
}
