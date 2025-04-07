import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { routes } from './app.routes';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        RouterOutlet,
        MenuComponent
    ],
    providers: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularApp';
}
