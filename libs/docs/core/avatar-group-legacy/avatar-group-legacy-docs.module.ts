import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApiComponent, currentComponentProvider, SharedDocumentationPageModule } from '@fundamental-ngx/docs/shared';
import { API_FILES } from '@fundamental-ngx/docs/core/shared';

import { AvatarGroupLegacyDocsComponent } from './avatar-group-legacy-docs.component';
import { AvatarGroupLegacyHeaderComponent } from './avatar-group-legacy-header/avatar-group-legacy-header.component';
import { AvatarGroupLegacyGroupTypeExampleComponent } from './examples/avatar-group-legacy-group-type-example.component';
import { AvatarGroupLegacyIndividualTypeExampleComponent } from './examples/avatar-group-legacy-individual-type-example.component';
import { AvatarGroupLegacyModule } from '@fundamental-ngx/core/avatar-group-legacy';
import { AvatarModule } from '@fundamental-ngx/core/avatar';
import { ButtonModule } from '@fundamental-ngx/core/button';
import { PopoverModule } from '@fundamental-ngx/core/popover';
import { QuickViewModule } from '@fundamental-ngx/core/quick-view';
import { BarModule } from '@fundamental-ngx/core/bar';
import { TitleModule } from '@fundamental-ngx/core/title';
import { LinkModule } from '@fundamental-ngx/core/link';

const routes: Routes = [
    {
        path: '',
        component: AvatarGroupLegacyHeaderComponent,
        children: [
            { path: '', component: AvatarGroupLegacyDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.avatarGroupLegacy } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        AvatarGroupLegacyModule,
        AvatarModule,
        ButtonModule,
        PopoverModule,
        QuickViewModule,
        BarModule,
        LinkModule,
        TitleModule
    ],
    exports: [RouterModule],
    declarations: [
        AvatarGroupLegacyDocsComponent,
        AvatarGroupLegacyHeaderComponent,
        AvatarGroupLegacyGroupTypeExampleComponent,
        AvatarGroupLegacyIndividualTypeExampleComponent
    ],
    providers: [currentComponentProvider('avatar-group-legacy')]
})
export class AvatarGroupLegacyDocsModule {}
