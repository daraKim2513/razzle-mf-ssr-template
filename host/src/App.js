import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { loadRemoteComponent } from './remotes/loadRemote';

const ProductApp = lazy(() => loadRemoteComponent('product','./ProductApp'));
const OrderApp   = lazy(() => loadRemoteComponent('order','./OrderApp'));
const MemberApp  = lazy(() => loadRemoteComponent('member','./MemberApp'));

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 10 }}>
        <Link to="/product">Product</Link> |{' '}
        <Link to="/order">Order</Link> |{' '}
        <Link to="/member">Member</Link>
      </nav>
      <Suspense fallback={<div>Loading remote...</div>}>
        <Routes>
          <Route path="/product/*" element={<ProductApp />} />
          <Route path="/order/*"   element={<OrderApp />} />
          <Route path="/member/*"  element={<MemberApp />} />
          <Route path="*"          element={<div>Welcome to Host</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
