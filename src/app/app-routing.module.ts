import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ BookListComponent } from './book-list/book-list.component';
import{ SinglebookComponent } from './singlebook/singlebook.component';


const routes: Routes = [
  { path: 'Books' ,      component:BookListComponent ,  },
  { path: 'Single/:link' ,      component:SinglebookComponent ,  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
