import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: WelcomeComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ] , { preloadingStrategy: PreloadAllModules })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }