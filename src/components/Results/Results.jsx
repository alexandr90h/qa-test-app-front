import graf from '../../img/graf.png';
import cat from '../../img/cat.svg';
import s from './Results.module.css';

export default function Results() {
  return (
    <container className={s.mainConteiner}>
      <h2 className={s.heading}>Results</h2>
      <p>[ Testing theory_]</p>
      <div></div>
      <div>
        <img src={graf} alt="" />
      </div>
      <div>
        <p>Correct answers - 9</p>
        <div></div>
        <p>Total questions - 12</p>
      </div>
      <img src={cat} alt="" />
      <p>Not bad!</p>
      <p>But you still need to learn some materials.</p>
      <button>Try again</button>
    </container>
  );
}
