import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent, currentComponentProvider, SharedDocumentationPageModule } from '@fundamental-ngx/docs/shared';
import { API_FILES } from '@fundamental-ngx/docs/core/shared';
import { AvatarGroupHeaderComponent } from './avatar-group-header/avatar-group-header.component';
import { AvatarGroupDocsComponent } from './avatar-group-docs.component';
import { examples } from './examples';
import { AvatarGroupModule } from '@fundamental-ngx/core/avatar-group';
import { AvatarModule } from '@fundamental-ngx/core/avatar';

const routes: Routes = [
    {
        path: '',
        component: AvatarGroupHeaderComponent,
        children: [
            { path: '', component: AvatarGroupDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.avatarGroup } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, AvatarGroupModule, AvatarModule],
    exports: [RouterModule],
    declarations: [examples, AvatarGroupDocsComponent, AvatarGroupHeaderComponent],
    providers: [currentComponentProvider('avatar-group')]
})
export class AvatarGroupDocsModule {}
