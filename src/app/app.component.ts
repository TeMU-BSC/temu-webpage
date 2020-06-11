import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'temu-webpage';

  showFiller = false;
  opened: boolean;

  sections = [
    { id: 'aims', title: 'Aims & Objectives' },
    { id: 'tools', title: 'Tools & Components' },
    { id: 'resources', title: 'Resources & Corpora' },
    { id: 'demos', title: 'Online demos' },
    { id: 'events', title: 'Events' },
    { id: 'talks', title: 'Talks & Presentations' },
    { id: 'people', title: 'People' },
    { id: 'publications', title: 'Publications' },
  ]
}
