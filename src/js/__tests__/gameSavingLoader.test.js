import GameSavingLoader from "../GameSavingLoader";
import GameSaving from '../GameSaving';



const data =
'{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

test("create new GameSaving", () => {
  const response = new GameSaving(JSON.parse(data));
  const result = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  };
  expect(response).toEqual(result);
});

test("load() возвращает корректные данные", async () => {
 // const result = JSON.parse(data);
 const response = await GameSavingLoader.load();
 const expected = new GameSaving(response);
    expect(data).toEqual(result);
    
  });

