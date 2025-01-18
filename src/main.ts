import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { LoginComponent } from './app/login/login.component';

bootstrapApplication(LoginComponent, {
  providers: [{ provide: AppRoutingModule, useValue: AppRoutingModule }],
}).catch((err) => console.error(err));
