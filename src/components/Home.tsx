import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="container max-w-4xl mx-auto">
      <div className="">
        <div className="text-center text-6xl py-16 font-mono">
          Hello, world!
        </div>
        {/* <div className="py-10 text-2xl underline">
          <div>
            <NavLink to="/counter">Use Counter</NavLink>
          </div>
          <div>
            <NavLink to="/hangman">Play Hangman</NavLink>
          </div>
        </div> */}
        <div className="text-center">
          Find this project on{' '}
          <a
            className="href"
            href="https://github.com/8jigarpatel/learn-react-vite"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
