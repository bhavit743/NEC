import { TagInputModule } from "ngx-chips";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { PopoverModule } from "ngx-bootstrap/popover";
import { TimepickerModule } from "ngx-bootstrap/timepicker";

import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PresentationModule } from "./presentation/presentation.module";

import { IndexComponent } from "./index/index.component";
import { SectionsComponent } from "./sections/sections.component";
import { ProfilepageComponent } from "./examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./examples/landingpage/landingpage.component";
import { AboutusComponent } from "./examples/aboutus/aboutus.component";
import { Error500Component } from "./examples/500error/500error.component";
import { AccountsettingsComponent } from "./examples/accountsettings/accountsettings.component";
import { BlogpostComponent } from "./examples/blogpost/blogpost.component";
import { BlogpostsComponent } from "./examples/blogposts/blogposts.component";
import { ChatpageComponent } from "./examples/chatpage/chatpage.component";
import { CheckoutpageComponent } from "./examples/checkoutpage/checkoutpage.component";
import { ContactusComponent } from "./examples/contactus/contactus.component";
import { EcommerceComponent } from "./examples/ecommerce/ecommerce.component";
import { ErrorComponent } from "./examples/error/error.component";
import { InvoicepageComponent } from "./examples/invoicepage/invoicepage.component";
import { LoginpageComponent } from "./examples/loginpage/loginpage.component";
import { PricingpageComponent } from "./examples/pricingpage/pricingpage.component";
import { ProductpageComponent } from "./examples/productpage/productpage.component";
import { ResetpageComponent } from "./examples/resetpage/resetpage.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PictureUploadComponent } from "./components/picture-upload/picture-upload.component";
import { RegComponent } from './final/reg/reg.component';
import { LogComponent } from './final/log/log.component';
import { CheckingComponent } from './final/checking/checking.component';
import { LandComponent } from './final/land/land.component';
import { BasicComponent } from './final/basic/basic.component';
import { AdvanceComponent } from './final/advance/advance.component';
import { SponsorsComponent } from './final/sponsors/sponsors.component';
import { LeaderboardComponent } from './final/leaderboard/leaderboard.component';
import { LeaderbordAComponent } from './final/leaderbord-a/leaderbord-a.component';
import { SubmissionComponent } from './final/submission/submission.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProfilepageComponent,
    RegisterpageComponent,
    LandingpageComponent,
    SectionsComponent,
    AboutusComponent,
    Error500Component,
    AccountsettingsComponent,
    BlogpostComponent,
    BlogpostsComponent,
    ChatpageComponent,
    CheckoutpageComponent,
    ContactusComponent,
    EcommerceComponent,
    ErrorComponent,
    InvoicepageComponent,
    LoginpageComponent,
    PricingpageComponent,
    ProductpageComponent,
    ResetpageComponent,
    NavbarComponent,
    FooterComponent,
    PictureUploadComponent,
    RegComponent,
    LogComponent,
    CheckingComponent,
    LandComponent,
    BasicComponent,
    AdvanceComponent,
    SponsorsComponent,
    LeaderboardComponent,
    LeaderbordAComponent,
    SubmissionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    TimepickerModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    TagInputModule,
    PresentationModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    SocialLoginModule,
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
        autoLogin: false,
        providers: [
            {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider(
                    '735357982777-nns9lfqfsmav55bj29p2jou231qve1r9.apps.googleusercontent.com'
                )
            }
        ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
