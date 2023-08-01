import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = props => {
  // Handling Data from Inputs

  const [curSavings, setCurSavings] = useState('');
  const [yearlySavings, setYearlySavings] = useState('');
  const [expectedInterest, setExpectedInterest] = useState('');
  const [investmentDuration, setInvestmentDuration] = useState('');

  const [inputData, setInputData] = useState({
    curSavings: '',
    yearlySavings: '',
    expectedInterest: '',
    investmentDuration: '',
  });

  const curSavingsHandler = event => {
    setCurSavings(event.target.value);
    // console.log(event.target.value);
  };

  const yearlySavingsHandler = event => {
    setYearlySavings(event.target.value);
    // console.log(event.target.value);
  };

  const expectedInterestHandler = event => {
    setExpectedInterest(event.target.value);
    // console.log(event.target.value);
  };

  const investmentDurationHandler = event => {
    setInvestmentDuration(event.target.value);
    // console.log(event.target.value);
  };
  // console.log(curSavings, yearlySavings, expectedInterest, investmentDuration);
  // Submit and reset buttons handlers

  const submitHandler = event => {
    if (
      curSavings &&
      yearlySavings &&
      expectedInterest &&
      investmentDuration > 0
    ) {
      event.preventDefault();
      setInputData({
        curSavings: curSavings,
        yearlySavings: yearlySavings,
        expectedInterest: expectedInterest,
        investmentDuration: investmentDuration,
      });
    } else {
      event.preventDefault();
      resetHandler();
    }
  };

  const resetHandler = event => {
    setCurSavings('');
    setYearlySavings('');
    setExpectedInterest('');
    setInvestmentDuration('');
    setInputData({
      curSavings: '',
      yearlySavings: '',
      expectedInterest: '',
      investmentDuration: '',
    });
  };

  props.onCalculate(inputData);
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles[`input-group`]}>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            onChange={curSavingsHandler}
            id='current-savings'
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            onChange={yearlySavingsHandler}
            id='yearly-contribution'
          />
        </p>
      </div>
      <div className={styles[`input-group`]}>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input
            type='number'
            onChange={expectedInterestHandler}
            id='expected-return'
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            onChange={investmentDurationHandler}
            id='duration'
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type='reset'
          onClick={resetHandler}
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type='submit' className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
