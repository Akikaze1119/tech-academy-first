import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface FAQAccordionItemProps {
  question: string;
  answer: React.ReactNode;
}

export function FAQAccordionItem({ question, answer }: FAQAccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <div className='acc-header' onClick={handleToggle}>
        <p className='faq-q'>{question}</p>
        <p className='accordion-symbol'>{isOpen ? 'ー' : '＋'}</p>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3 }}
            className={'acc-child'}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
