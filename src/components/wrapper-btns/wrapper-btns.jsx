import style from './wrapper-btns.module.css';
function WrapperBtns({ svg1, svg2, fn1, fnArg1, fn2, fnArg2 }) {
  return (
    <div className={style.wrapperBtn}>
      <button
        onClick={() => {
          fn1(fnArg1);
        }}
      >
        {svg1}
      </button>
      <button
        onClick={() => {
          fn2(fnArg2);
        }}
      >
        {svg2}
      </button>
    </div>
  );
}
export default WrapperBtns;
