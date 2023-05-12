import React, { useEffect } from 'react';

function Hangman() {
  // guess and secret
  const [guess, setGuess] = React.useState('');
  const [secret, setSecret] = React.useState('');
  const [playing, setPlaying] = React.useState(false);

  // win and game over
  const [win, setWin] = React.useState(false);
  const [over, setOver] = React.useState(false);

  // attempts
  const defaultAttemptsCount = 7;
  const [attemptLeft, setAttemptsLeft] = React.useState(defaultAttemptsCount);

  useEffect(() => {
    // win
    if (secret !== '' && secret.toLowerCase() === guess.toLowerCase()) {
      setWin(true);
    }
    // game over
    else if (
      attemptLeft === 0 &&
      secret.toLowerCase() !== guess.toLowerCase()
    ) {
      setOver(true);
    }
  }, [attemptLeft, guess, secret]);

  const onInputClick = (l: string) => {
    if (playing) {
      setAttemptsLeft(attemptLeft - 1);
      setGuess(guess + l);
    } else {
      setSecret(secret + l);
    }
  };

  const onRestartClick = () => {
    setGuess('');
    setSecret('');
    setPlaying(false);
    setWin(false);
    setOver(false);
    setAttemptsLeft(defaultAttemptsCount);
  };

  const onSetSecretClick = () => {
    setPlaying(true);
  };

  const getLetters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ].map((l) => {
    return (
      <button
        key={l}
        type="button"
        tabIndex={-1}
        className="btn font-mono m-2 bg-blue-100 hover:bg-blue-300"
        onClick={() => onInputClick(l)}
      >
        {l}
      </button>
    );
  });

  return (
    <div className="grid justify-items-center text-3xl lg:text-5xl pt-3">
      <div className='className="max-w-md lg:max-w-3xl'>
        <div>
          {playing === false && (
            <div className="flex flex-row gap-4 px-2">
              <input
                className="border rounded basis-3/4"
                id="secret"
                type="text"
                placeholder="Secret"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
              />
              <button
                type="button"
                className="btn bg-green-600 text-white basis-1/4 mr-6"
                onClick={onSetSecretClick}
              >
                GO
              </button>
            </div>
          )}
          {playing === true && (
            <div className="flex gap-4 px-2">
              <div className="flex-auto">{guess}</div>
              <div>{attemptLeft}</div>
              <button
                type="button"
                className="btn bg-red-50 mr-6"
                onClick={onRestartClick}
              >
                <svg
                  className="h-12 w-12 text-red-600"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {' '}
                  <path stroke="none" d="M0 0h24v24H0z" />{' '}
                  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />{' '}
                  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
                </svg>
              </button>
            </div>
          )}
        </div>
        {/* <div>Attempts left: {attemptLeft}</div> */}
        <div className="pt-2">
          <ul>{getLetters}</ul>
        </div>
        {win && (
          <div className="my-10 py-5 rounded-lg text-white text-center bg-green-600">
            You Won!
            <button
              type="button"
              className="btn underline"
              onClick={onRestartClick}
            >
              Play Again
            </button>
          </div>
        )}
        {over && (
          <div className="my-10 py-5 rounded-lg text-white text-center bg-red-600">
            You Lost!
            <button
              type="button"
              className="btn underline"
              onClick={onRestartClick}
            >
              Play Again
            </button>
          </div>
        )}
        {false && (
          <>
            <div>playing: {playing}</div>
            <div>secret: {secret}</div>
            <div>guess: {guess}</div>
            <div>{attemptLeft}</div>
            <div>win: {win}</div>
            <div>over: {over}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Hangman;
