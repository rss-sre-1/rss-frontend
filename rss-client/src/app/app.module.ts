import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, NgModel } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountPageComponent } from './Account/components/account-page/account-page.component';
import { QuizPageComponent } from './Quiz/components/quiz-page/quiz-page.component';
import { QuizQuesitonComponent } from './Quiz/components/quiz-quesiton/quiz-quesiton.component';
import { ProfilePageComponent } from './Account/components/profile-page/profile-page.component';
import { HeaderComponent } from './Common/header/header.component';
import { EarnpointsOverviewPageComponent } from './Earnpoints/components/earnpoints-overview-page/earnpoints-overview-page.component';
import { AccountSettingsPageComponent } from './Account/components/account-settings-page/account-settings-page.component';
import { QuizInterimPageComponent } from './Quiz/components/quiz-interim-page/quiz-interim-page.component';
import { LandingPageComponent } from './LandingPage/components/landing-page/landing-page.component';
import { IndividualQuizPageComponent } from './Quiz/components/individual-quiz-page/individual-quiz-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountPageComponent,
    QuizPageComponent,
    QuizQuesitonComponent,
    ProfilePageComponent,
    HeaderComponent,
    EarnpointsOverviewPageComponent,
    AccountSettingsPageComponent,
    QuizInterimPageComponent,
    LandingPageComponent,
    IndividualQuizPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
