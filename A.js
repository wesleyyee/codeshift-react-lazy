import React, { Suspense, lazy } from 'React';

const B = lazy(() => import('./B'));

const A = () => {
  return (
    <Suspense fallback={<div>Fallback Component</div>}>
      <B />
    </Suspense>
  );
};

export default A;
