class Winner {
  constructor(name1, name2, winnerName, guess, time, id) {
    name1 = name1;
    name2 = name2;
    winnerName = winnerName;
    guess = guess;
    time = time || Date() - start;
    id = id || Date.now()
  }
}