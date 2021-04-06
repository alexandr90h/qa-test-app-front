import graf from '../../img/graf.png';
import cat from '../../img/cat.svg';
import s from './Results.module.scss';

export default function Results() {
  return (
    <container className={s.mainConteiner}>
      <h2 className={s.title}>Results</h2>
      <p className={s.textContent1}>[ Testing theory_]</p>
      <div className={s.lineHorizontal}></div>
      <div>
        <img className={s.imgGraf} src={graf} alt="" />
      </div>
      <div className={s.resultTextContent}>
        <p>Correct answers - 9</p>
        <div className={s.lineVertical}></div>
        <p>Total questions - 12</p>
      </div>
      <img className={s.catImage} src={cat} alt="" />
      <p className={s.grateText}>Not bad!</p>
      <p className={s.sentenceText}>
        But you still need to learn some materials.
      </p>
      <button className={s.btnTryAgain}>Try again</button>
    </container>
  );
}
