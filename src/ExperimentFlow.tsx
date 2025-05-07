import React, { useState, useEffect } from 'react';
import VASComponent from './VASComponent'; 

const ExperimentFlow: React.FC = () => {
  const [step, setStep] = useState(1);
  const [numSamples, setNumSamples] = useState(3);
  const [numItems, setNumItems] = useState(5);
  const [trialIndex, setTrialIndex] = useState(0);
  const [subStep, setSubStep] = useState(0); // 0: 指リセット, 1: 評価説明, 2: 動画＆VAS
  const totalTrials = numSamples * numItems;
  const [combinations, setCombinations] = useState<{ sample: string; item: string }[]>([]);
  const [responses, setResponses] = useState<{ sample: string, item: string, value: number }[]>([]);

  const nextStep = () => setStep(prev => prev + 1);

  const handleVASChange = (value: number) => {
    const current = combinations[trialIndex];
    if (current) {
      setResponses(prev => {
        const filtered = prev.filter(
          r => !(r.sample === current.sample && r.item === current.item)
        );
        return [...filtered, { ...current, value }];
      });
    }
  };
  

  useEffect(() => {
    const samples = ['Pertex 2', 'Pertex 3', 'Pertex 15'];
    const items = ['ざらざら感', 'すべすべ感', '快感', '不快感', '凹凸感'];

    const allCombos = samples.flatMap(sample =>
      items.map(item => ({ sample, item }))
    );

    const shuffled = allCombos.sort(() => Math.random() - 0.5);
    setCombinations(shuffled);
  }, []);

  const handleConsent = (consent: boolean) => {
    console.log('同意結果:', consent ? 'Yes' : 'No');
    nextStep();
  };

  const handleTrialResponse = () => {
    if (trialIndex + 1 < totalTrials) {
      setTrialIndex(prev => prev + 1);
      setSubStep(0); // subStepリセット
    } else {
      setStep(6);
    }
  };

  const currentCombo = combinations[trialIndex];

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
            <div style={{ maxHeight: '300px', overflowY: 'scroll', textAlign: 'left', border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
              <p>1. はじめに<br />この実験は、現在研究を実施している「研究テーマを入力」の検証を行うために企画されました。この情報シートをよく読み、研究内容を理解した上で、この研究に自由意志で参加するかどうかを決めてください。一旦、参加することに同意をいただいた後でも、いつでも研究への参加をやめることができます。たとえ参加されなくても、途中で参加をとりやめられてもあなたが不利益を被ることはありません。この研究にご協力頂けるようであれば、別紙の同意書にご署名をお願いいたします。
                なお、この研究は広島大学大学院先進理工系科学研究科研究倫理審査委員会において、審査を受け、承認されています。
            ）</p>
              <p>2. 研究の意義・背景：本研究では、製品の感性品質の重要性が高まる中で、触感を考慮した効率的な製品設計を支援することを目的として取り組んでおります。触感を考慮した製品設計においては、試作を伴う触感評価による時間とコストがかかることが明白であるため、試作を伴わずに触感評価を実現する触感提示システムを作成することを主目標において研究を行っております。</p>
              <p>3. 研究の方法について：この研究に参加いただける方（以下の基準をすべて満たす方）
                  <br />①	日本語でのアンケート回答が可能
                  <br />②	自身の意志による研究協力を志望する
                  <br />③	成人であること
                  <br />※上記基準を一つでも満たさない方は、参加できません。
              </p>
              <p>4. 研究にしようする機器：研究参加者の方には、図１に示す硬質ウレタンでできたテクスチャサンプルと、図２に示す触感再現デバイス上のサンプルを触っていただきます。図3に示す滑り止めシートで構成される実験ブースを用い、サンプルを滑り止めシート上に固定することで、被験者はサンプルを視認可能な状態でサンプルを触ります。</p>
              <p>…</p>
              <p>14. 研究責任者：この研究全体の責任者は以下の通りです。
                  【研究責任者】
                  <br />職名：教授　　　　　　氏名：栗田　雄一
                  <br />所属：広島大学大学院先進理工系科学研究科
                  <br />住所：東広島市鏡山1-4-1
                  <br />電話番号：082-424-7678　　FAX：082-424-2387
                  <br />メールアドレス：kurita＠bsys.hiroshima-u.ac.jp
              </p>
            </div>
            <p>上記の内容を読み、同意される場合は「はい」を押してください。</p>
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
            <p>サンプル数: {numSamples}、感性項目数: {numItems}</p>
            <button onClick={nextStep}>実験開始</button>
          </div>
        );
      case 5:
        switch (subStep) {
          case 0:
            return (
              <div>
                <h2>指リセット</h2>
                <p>リセット用の場所に指を置いてください。</p>
                <button onClick={() => setSubStep(1)}>次へ</button>
              </div>
            );
          case 1:
            return (
              <div>
                <h2>感性項目の提示</h2>
                <p>次は「{currentCombo?.item}」という項目を評価していただきます。</p>
                <button onClick={() => setSubStep(2)}>動画と評価へ</button>
              </div>
            );
          case 2:
            return (
              <div>
                <h2>実験中</h2>
                <p>{currentCombo ? `${currentCombo.sample} × ${currentCombo.item}` : '読み込み中...'}</p>
                <p>1秒間触ってください → 2秒間、円を描くようになぞってください（動画再生予定）</p>
                <p>口頭で回答してください（実験補助者が入力）</p>
                <p>サンプル: {currentCombo?.sample}</p>
                <p>感性項目: {currentCombo?.item}</p>
                <VASComponent label={`「${currentCombo?.item}」について評価してください`} onChange={handleVASChange} />
                <button onClick={handleTrialResponse}>次へ</button>
              </div>
            );
          default:
            return null;
        }
      case 6:
        return (
          <div>
            <h2>実験終了</h2>
            <p>お疲れ様でした。謝金の説明などをここに表示します。</p>
            <pre style={{ textAlign: 'left', maxHeight: '200px', overflowY: 'scroll' }}>
              {JSON.stringify(responses, null, 2)}
            </pre>
          </div>
        );
      default:
        return <p>未知のステップです</p>;
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      {renderContent()}
    </div>
  );
};

export default ExperimentFlow;
