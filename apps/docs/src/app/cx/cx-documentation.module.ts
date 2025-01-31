import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MarkdownModule } from 'ngx-markdown';

import { ROUTES } from './cx-documentation.routes';
import {
    COMBOBOX_MOBILE_CONFIG,
    CURRENT_LIB,
    MENU_MOBILE_CONFIG,
    MULTI_INPUT_MOBILE_CONFIG,
    POPOVER_MOBILE_CONFIG,
    SEARCH_FIELD_MOBILE_CONFIG,
    SELECT_MOBILE_CONFIG,
    SharedDocumentationModule,
    StackblitzService
} from '@fundamental-ngx/docs/shared';
import { CxDocumentationComponent } from './documentation/cx-documentation.component';
import { HomeDocsComponent } from './component-docs/cx-home/cx-home.component';
import { NewComponentComponent } from './component-docs/new-component/new-component.component';
import { MOBILE_MODE_CONFIG } from '@fundamental-ngx/core/mobile-mode';
import { CoreSchemaModule } from '@fundamental-ngx/docs/core/schema';

@NgModule({
    declarations: [HomeDocsComponent, NewComponentComponent, CxDocumentationComponent],
    imports: [
        SharedDocumentationModule,
        MarkdownModule.forChild(),
        RouterModule.forChild(ROUTES),
        ScrollingModule,
        CoreSchemaModule
    ],
    providers: [
        StackblitzService,
        { provide: CURRENT_LIB, useValue: 'cx' },
        { provide: MOBILE_MODE_CONFIG, useValue: MENU_MOBILE_CONFIG, multi: true },
        { provide: MOBILE_MODE_CONFIG, useValue: SELECT_MOBILE_CONFIG, multi: true },
        { provide: MOBILE_MODE_CONFIG, useValue: COMBOBOX_MOBILE_CONFIG, multi: true },
        { provide: MOBILE_MODE_CONFIG, useValue: MULTI_INPUT_MOBILE_CONFIG, multi: true },
        { provide: MOBILE_MODE_CONFIG, useValue: POPOVER_MOBILE_CONFIG, multi: true },
        { provide: MOBILE_MODE_CONFIG, useValue: SEARCH_FIELD_MOBILE_CONFIG, multi: true }
    ]
})
export class CxDocumentationModule {}
