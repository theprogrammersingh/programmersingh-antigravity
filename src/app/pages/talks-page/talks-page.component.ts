import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-talks-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './talks-page.component.html',
  styleUrl: './talks-page.component.scss'
})
export class TalksPageComponent {}
