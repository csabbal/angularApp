import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';

export const routes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'list/:id', component: ItemComponent }
];
