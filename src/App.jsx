import "./App.css";

import { Header } from "./components/Header";
import { Posts } from "./features/redditPosts/Posts";
import { Subreddits } from "./features/subreddits/Subreddits";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="componentMain">
      <Posts />
      <aside>
        <Subreddits />
      </aside>
      </main>
    </div>
  );
}

export default App;
