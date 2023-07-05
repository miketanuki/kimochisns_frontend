import React from 'react';
import Navbar from './components/Navbar';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <PostForm />
      <PostList />
      {/* 他のコンポーネントもここに追加 */}
    </div>
  );
};

export default App;
