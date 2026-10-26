import { Component, Input } from '@angular/core';

export interface SolutionContent {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  items: {
    title: string;
    description: string;
  }[];
}

@Component({
  selector: 'app-solution-content',
  standalone: true,
  templateUrl: './solution-content.html',
  styleUrl: './solution-content.css'
})
export class SolutionContentComponent {
  @Input({ required: true }) content!: SolutionContent;
}
