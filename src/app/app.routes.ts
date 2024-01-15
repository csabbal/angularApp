import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ListWrapperComponent } from './components/list-wrapper/list-wrapper.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent },
    {
        path: 'list/',
        loadChildren: () => import('./components/list/list.component').then(m => m.ListComponent)
    },
   // { path: 'list/:page', component: ListComponent },
    { path: 'endlessList', component: ListWrapperComponent },
    { path: 'character/:id', component: ItemComponent }
];
