import { __decorate } from "tslib";
import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { FakeBackendService } from './shared/inmemory-db/fake-backend.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { rootRouterConfig } from './app-routing';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            MatSnackBarModule,
            HttpClientModule,
            HttpClientInMemoryWebApiModule.forRoot(FakeBackendService, {
                dataEncapsulation: false
            }),
            RouterModule.forRoot(rootRouterConfig, { useHash: false }),
            CoreModule,
            CommonModule,
            NgbModule,
            SharedModule,
            !environment.production ? StoreDevtoolsModule.instrument() : [],
        ],
        declarations: [AppComponent],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map