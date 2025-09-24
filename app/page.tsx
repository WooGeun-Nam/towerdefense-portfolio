/*
import GamePortfolio from '../components/GamePortfolio';

export default function Home() {
  return <GamePortfolio />;
}
*/

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/portfolio");
}
