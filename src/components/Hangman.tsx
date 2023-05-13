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
  }, [attemptLeft]);

  useEffect(() => {
    setGuess(secret.replace(/./g, '-'));
  }, [secret]);

  const onInputClick = (l: string) => {
    if (playing) {
      let temp = guess;
      for (let i = 0; i < secret.length; i++) {
        if (secret[i] === l) {
          temp = temp.slice(0, i) + secret[i] + temp.slice(i + 1);
        }
      }
      setGuess(temp);
      setAttemptsLeft(attemptLeft - 1);
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
      <div className="sm:max-w-sm md:max-w-md lg:max-w-3xl">
        <div>
          {playing === false && (
            <div className="grid grid-flow-row gap-4 px-2">
              <div className="inputDiv">{secret}</div>
              <button
                type="button"
                className="btn bg-green-600 text-white"
                onClick={onSetSecretClick}
              >
                GO
              </button>
            </div>
          )}
          {playing === true && (
            <div className="grid grid-flow-row gap-4 px-2">
              <div className="inputDiv">{guess}</div>
              <button
                type="button"
                className="btn bg-red-600 text-white"
                onClick={onRestartClick}
              >
                Restart
              </button>
            </div>
          )}
        </div>
        {/* <div>Attempts left: {attemptLeft}</div> */}
        <div className="pt-2">
          <ul className="grid grid-cols-4 lg:grid-cols-6 gap-2">
            {getLetters}
          </ul>
        </div>
        {win && (
          <div className="my-5 py-2 rounded-lg text-white text-center bg-green-600">
            You Won!
            <button
              type="button"
              className="btn underline"
              onClick={onRestartClick}
            >
              Restart
            </button>
          </div>
        )}
        {over && (
          <div className="my-5 py-2 rounded-lg text-white text-center bg-red-600">
            You Lost!
            <button
              type="button"
              className="btn underline"
              onClick={onRestartClick}
            >
              Restart
            </button>
          </div>
        )}
        <div className="text-gray-300 m-4">{attemptLeft}</div>
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
