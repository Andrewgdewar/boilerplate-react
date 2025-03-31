export interface IGameInfo {
  title: string;
  publish_date: string;
  platforms: string[];
  rating: number;
  publisher: string;
  player_count: number;
}

export const GameInfo: IGameInfo[] = [
  {
    title: "Fortnite",
    publish_date: "2023-11-15",
    platforms: ["PC", "PlayStation", "Xbox"],
    rating: 4.8,
    publisher: "Epic Games",
    player_count: 5000000,
  },
  {
    title: "Shadow Arena",
    publish_date: "2022-06-21",
    platforms: ["PC"],
    rating: 4.2,
    publisher: "Dark Horizon",
    player_count: 1200000,
  },
  {
    title: "Pixel Racer",
    publish_date: "2024-01-05",
    platforms: ["PC", "Switch"],
    rating: 4.5,
    publisher: "Speedster Games",
    player_count: 3000000,
  },
  {
    title: "Mystic Lands",
    publish_date: "2023-07-30",
    platforms: ["PC", "PlayStation"],
    rating: 4.7,
    publisher: "Fantasy Works",
    player_count: 4500000,
  },
  {
    title: "Mecha Wars",
    publish_date: "2024-02-10",
    platforms: ["PC", "Xbox"],
    rating: 4.6,
    publisher: "Mecha Studios",
    player_count: 2500000,
  },
  {
    title: "Retro Clash",
    publish_date: "2023-03-18",
    platforms: ["PC", "Mobile"],
    rating: 4.3,
    publisher: "Arcade Legends",
    player_count: 2000000,
  },
  {
    title: "Fall Guys",
    publish_date: "2023-12-10",
    platforms: ["PC", "PlayStation", "Xbox"],
    rating: 4.9,
    publisher: "Universal Games",
    player_count: 6000000,
  },
  {
    title: "Zombie Survival",
    publish_date: "2022-10-05",
    platforms: ["PC", "PlayStation"],
    rating: 4.1,
    publisher: "Apocalypse Studios",
    player_count: 1800000,
  },
];

export interface IGameInfoWithTop5 extends IGameInfo {
  isTop5: boolean;
}

export const getGameInfoWithTop5 = (): IGameInfoWithTop5[] => {
  const allDate = new Set(
    GameInfo.map(({ publish_date }) => publish_date)
      .sort((a, b) => (new Date(b) as any) - (new Date(a) as any))
      .slice(0, 5)
  );

  return GameInfo.map((val) => ({
    ...val,
    isTop5: allDate.has(val.publish_date),
  }));
};
