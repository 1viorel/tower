import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  table: number[][] = Array.from({ length: 8 }, () => Array(8).fill(0));
  inputTower: boolean = true; //flag

  //user tower
  placeTower(row: number, col: number) {
    if (this.inputTower) {
      this.table[row][col] = 1;
      this.inputTower = false;
      this.autoPlaceTowers(row, col);
    }
  }

  autoPlaceTowers(userRow: number, userCol: number) {
    const delayBetweenPlacements = 100;

    const randomIndices: number[] = Array.from({ length: 64 }, (_, index) => index);
    const shuffleArray = (array: number[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };
    shuffleArray(randomIndices);

    const placeTowersRecursive = (index: number) => {
      if (index < 64) { //index = the positions the board
        const randomIndex = randomIndices[index];
        const randomRow = Math.floor(randomIndex / 8); //these two are based on index
        const randomCol = randomIndex % 8;

        if (this.table[randomRow][randomCol] === 0 &&
          this.isValidPlacement(randomRow, randomCol) &&
          !this.isInSameRowOrColumn(randomRow, randomCol, userRow, userCol)) {
          this.table[randomRow][randomCol] = 1; //set tower if the 3 requirments are met
        }

        setTimeout(() => placeTowersRecursive(index + 1), delayBetweenPlacements);
      }
    };

    placeTowersRecursive(0);
  }

  isValidPlacement(row: number, col: number): boolean {
    for (let i = 0; i< 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.table[i][j] === 1 && (row === i || col === j)) { //negative search
          return false;
        }
      }
    }
    return true;
  }

  isInSameRowOrColumn(row1: number, col1: number, row2: number, col2: number): boolean {
    return row1 === row2 || col1 === col2;
  }
}
