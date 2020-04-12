import { useState } from 'react';
import { Game } from '../components/game';
import { Splash } from '../components/splash';

const pages = { splash: 'splash', game: 'game' };

export default function Index () {
  const [page, setPage] = useState(pages.game);

  let content = <div>Unknown UI error</div>;
  if (page === pages.splash) {
    return <Splash onPlayNow={() => setPage(pages.game)} />;
  } else if (page === pages.game) {
    return <Game />;
  }

  return content;
}

