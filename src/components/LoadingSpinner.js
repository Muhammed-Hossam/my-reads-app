import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={classes['spinner']}>
    <div className={classes['sk-chase']}>
      <div className={classes['sk-chase-dot']}></div>
      <div className={classes['sk-chase-dot']}></div>
      <div className={classes['sk-chase-dot']}></div>
      <div className={classes['sk-chase-dot']}></div>
      <div className={classes['sk-chase-dot']}></div>
      <div className={classes['sk-chase-dot']}></div>
    </div>
    </div>
  );
};


export default LoadingSpinner;