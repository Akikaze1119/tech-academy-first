import { FAQAccordionItem } from '../component/AccordionItem';
import { faq } from '../data/faq';

export default function FAQ() {
  return (
    <section className='bg-stripe faq container'>
      <div className='contents_width'>
        <h2>よくあるご質問</h2>
        <div className='faq-container'>
          {faq.map((item) => (
            <div key={item.id} className='faq-box'>
              <FAQAccordionItem question={item.question} answer={item.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
