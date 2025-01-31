import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InitialFocusModule, PipeModule } from '@fundamental-ngx/cdk/utils';
import { InputGroupModule } from '@fundamental-ngx/core/input-group';
import { FormModule } from '@fundamental-ngx/core/form';
import { TokenModule } from '@fundamental-ngx/core/token';
import { PlatformListModule, StandardListItemModule } from '@fundamental-ngx/platform/list';
import { PopoverModule } from '@fundamental-ngx/core/popover';

import { PlatformMultiInputComponent } from './multi-input.component';
import { PlatformAutoCompleteModule } from '../auto-complete/auto-complete.module';
import { ContentDensityModule } from '@fundamental-ngx/core/content-density';

@NgModule({
    declarations: [PlatformMultiInputComponent],
    imports: [
        CommonModule,
        FormsModule,
        PlatformListModule,
        StandardListItemModule,
        TokenModule,
        PipeModule,
        PopoverModule,
        InputGroupModule,
        PlatformAutoCompleteModule,
        FormModule,
        ContentDensityModule,
        InitialFocusModule
    ],
    exports: [PlatformMultiInputComponent, ContentDensityModule]
})
export class PlatformMultiInputModule {}
