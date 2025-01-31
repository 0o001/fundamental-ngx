import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from '@fundamental-ngx/core/button';
import { DynamicComponentService, TemplateModule } from '@fundamental-ngx/cdk/utils';
import { InputGroupModule } from '@fundamental-ngx/core/input-group';
import { ListModule } from '@fundamental-ngx/core/list';
import { FormModule } from '@fundamental-ngx/core/form';
import { ContentDensityModule } from '@fundamental-ngx/core/content-density';
import { PopoverModule } from '@fundamental-ngx/core/popover';
import { PipeModule } from '@fundamental-ngx/cdk/utils';
import { I18nModule } from '@fundamental-ngx/i18n';

import { ComboboxComponent } from './combobox/combobox.component';
import { PlatformAutoCompleteModule } from '../auto-complete/auto-complete.module';

@NgModule({
    declarations: [ComboboxComponent],
    imports: [
        CommonModule,
        FormsModule,
        InputGroupModule,
        PipeModule,
        ListModule,
        ButtonModule,
        PopoverModule,
        PlatformAutoCompleteModule,
        FormModule,
        I18nModule,
        ContentDensityModule
    ],
    providers: [DynamicComponentService],
    exports: [ComboboxComponent, TemplateModule, ContentDensityModule]
})
export class PlatformComboboxModule {}
