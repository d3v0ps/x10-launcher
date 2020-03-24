
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-light bg-light justify-content-between header">
      <span class="navbar-brand">Bienvenido, Aitor</span>
    </nav>
  `
})

export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
