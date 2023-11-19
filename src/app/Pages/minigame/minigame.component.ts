import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-minigame',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './minigame.component.html',
  styleUrl: './minigame.component.css'
})
export class MinigameComponent
{
  @ViewChild('trex') trex: ElementRef | undefined;
  @ViewChild('obstacle') obstacle: ElementRef | undefined;
  isJumping = false;
  isFlying = false
  isGameOver = false;
  isGameStarted = false;

  resetFlyingInterval: number | undefined;
  addScoreInterval: number | undefined;
  checkCollisionInterval: number | undefined;
  score : number = 0;

  imageClickedCount: number = 0;

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key == ' ' && !this.isJumping && !this.isGameOver)
    {
      this.isJumping = true;
      setTimeout(() => this.isJumping = false, 500);
    }
    if(event.key == 'r')
    {
      this.isGameOver = false;
      this.score = 0;
      this.resetFlyingInterval = setInterval(() => this.isFlying = Math.random() < 0.5, 2000);
      this.addScoreInterval = setInterval(() => this.score += 100, 1000);
      this.checkCollisionInterval = setInterval(() => this.checkCollision(), 10);
    }

    if(event.key == 's')
    {
      this.isGameStarted = true;
      this.checkCollisionInterval = setInterval(() => this.checkCollision(), 10);
      this.resetFlyingInterval = setInterval(() => this.isFlying = Math.random() < 0.5, 2000);
      this.addScoreInterval = setInterval(() => this.score += 100, 1000);
    }
  }

  checkCollision()
  {
    if( this.score == 3000 )
    {
      this.isGameOver = true;
      clearInterval(this.resetFlyingInterval);
      clearInterval(this.addScoreInterval);
      clearInterval(this.checkCollisionInterval);
      return;
    }

    if(this.trex == undefined || this.obstacle == undefined)
      return;

    const trexRect = this.trex.nativeElement.getBoundingClientRect();
    const obstacleRect = this.obstacle.nativeElement.getBoundingClientRect();

    if ( trexRect.x < obstacleRect.x + obstacleRect.width  && trexRect.x + trexRect.width > obstacleRect.x &&
         trexRect.y < obstacleRect.y + obstacleRect.height && trexRect.height + trexRect.y > obstacleRect.y )
    {
      this.isGameOver = true;
      clearInterval(this.resetFlyingInterval);
      clearInterval(this.addScoreInterval);
      clearInterval(this.checkCollisionInterval);
    }
  }

  clickImage()
  {
    this.imageClickedCount ++;
  }
}
