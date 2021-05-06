import React from 'react';

import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  return <MyParagraph>{props.show && 'This is new!'}</MyParagraph>;
};

/* 
  Memo tells React that for this component React should look
  at the new props this component gets and compare it to the 
  previous value of those props. Only if the value changed should
  the component re-evaluated and re-executed.

  Trading the performance cost of re-evaluating component
  to comparing props
*/
export default React.memo(DemoOutput);
