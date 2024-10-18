import { useEffect } from 'react';

// カスタムフック
export const useSmoothScroll = (triggerSelector: any, offsetCalculation: any) => {
  useEffect(() => {
    const handleClick = (e: any) => {
      const href = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(href);

      if (targetElement) {
        e.preventDefault();

        const browserWidth = window.outerWidth;

        // オフセットの計算
        const headerHeight = offsetCalculation(browserWidth);

        // スムーズスクロール
        window.scrollTo({
          top: targetElement.offsetTop - headerHeight,
          behavior: 'smooth',
        });
      }
    };

    // トリガー要素にクリックイベントを設定
    const elements = document.querySelectorAll(triggerSelector);
    elements.forEach((el) => el.addEventListener('click', handleClick));

    // クリーンアップ：イベントリスナーを削除
    return () => {
      elements.forEach((el) => el.removeEventListener('click', handleClick));
    };
  }, [triggerSelector, offsetCalculation]);
};
