import React, { useState } from 'react';

const ExperimentFlow: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const handleConsent = (consent: boolean) => {
    console.log('同意結果:', consent ? 'Yes' : 'No');
    nextStep();
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>実験の背景・目的・注意事項</h2>
            <p>ここに実験の背景などの説明を表示します。</p>
            <button onClick={nextStep}>次へ</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>同意確認</h2>
            <p>本実験に同意いただけますか？</p>
            <button onClick={() => handleConsent(true)}>はい</button>
            <button onClick={() => handleConsent(false)}>いいえ</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>指リセット指示</h2>
            <p>触感リセット用の箇所に指を置いてください。</p>
            <button onClick={nextStep}>次へ</button>
          </div>
        );
      case 4:
        return (
          <div>
            <h2>実験概要</h2>
            <p>これからの流れを簡単にご説明します。</p>
            <button onClick={nextStep}>次へ</button>
          </div>
        );
      default:
        return (
          <div>
            <h2>実験スタート準備完了！</h2>
            <p>これで最初の説明は終了です。</p>
          </div>
        );
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {renderContent()}
    </div>
  );
};

export default ExperimentFlow;
