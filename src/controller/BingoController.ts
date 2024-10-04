import BingoResponse from "../types/BingoResponse";

export class BingoController {
  constructor() {}

  private prevNumber: number | null = null;

  public getBingo(): BingoResponse {
    let randomNumber = this.generateBingoNumber();

    const prevNumber = this.getPrevRandomNumber();

    let bingoResponse = this.checkBingo(randomNumber);

    this.setPrevRandomNumber(randomNumber);

    return {
      bingo: bingoResponse,
      number: randomNumber,
      prevNumber: prevNumber,
    };
  }

  checkBingo(randomNumber: number) {
    const prevRandomNumber = this.getPrevRandomNumber();

    if (prevRandomNumber != null) {
      const numberResult = randomNumber - prevRandomNumber;

      if (numberResult < 3) {
        return false;
      }

      for (let i = 2; i < numberResult; i++) {
        if (numberResult % i == 0) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  generateBingoNumber() {
    const min = Math.ceil(1);
    const max = Math.floor(10);
    return Math.floor(Math.random() * (max - min) + min);
  }

  setPrevRandomNumber(prevNumber: number) {
    this.prevNumber = prevNumber;
  }

  getPrevRandomNumber() {
    return this.prevNumber;
  }
}
