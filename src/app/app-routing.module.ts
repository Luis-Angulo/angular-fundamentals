// Base angular modules (required)
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

// Routed components
import { ErrorComponent } from './error/error.component';

// To improve load times:
// Prefetch modules when it will lead to an overall better experience
// Make each module smaller
// Adjust the config for build process and use --prod flag when building
// Module config decorator
@NgModule({
  imports: [
    // AppRouting is the base router, so it uses forRoot
    // Maybe extract routes to events module if more modules come in
    RouterModule.forRoot([
      { path: 'error', component: ErrorComponent },
      { path: '', redirectTo: 'events', pathMatch: 'full' },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
      { path: '**', redirectTo: 'events', pathMatch: 'full' },
    ], {preloadingStrategy: PreloadAllModules}),  // optimistic bundling
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
