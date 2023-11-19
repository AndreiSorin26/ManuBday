import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {MinigameComponent} from "../minigame/minigame.component";
import {QuizzComponent} from "../quizz/quizz.component";
import {GalleryComponent} from "../gallery/gallery.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NzTabsModule, MinigameComponent, QuizzComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
