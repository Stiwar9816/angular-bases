import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroesName: string[] = ['SpiderMan', ' Hulk', 'Thor', ' IronMan'];
  public deletedHero?: string;

  removeLastHeroe(): void {
    this.deletedHero = this.heroesName.pop();
  }
}
