import "./App.css";

import { Header } from "./components/Header";
import { Posts } from "./features/redditPosts/Posts";
import { Subreddits } from "./features/subreddits/Subreddits";

function App() {
  return (
    <>
      <Header />
      <Posts />
      <aside>
        <Subreddits />
      </aside>
    </>
  );
}

export default App;
