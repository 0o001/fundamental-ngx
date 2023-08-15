import { NgModule } from '@angular/core';

import { AvatarGroupLegacyComponent } from './avatar-group-legacy.component';
import { AvatarGroupLegacyItemDirective } from './directives/avatar-group-legacy-item.directive';
import { AvatarGroupLegacyOverflowBodyDirective } from './directives/avatar-group-legacy-overflow-body.directive';
import { AvatarGroupLegacyOverflowItemDirective } from './directives/avatar-group-legacy-overflow-item.directive';
import { AvatarGroupLegacyOverflowButtonDirective } from './directives/avatar-group-legacy-overflow-button.directive';
import { AvatarGroupLegacyOverflowButtonTextDirective } from './directives/avatar-group-legacy-overflow-button-text.directive';
import { AvatarGroupLegacyFocusableAvatarDirective } from './directives/avatar-group-legacy-focusable-avatar.directive';
import { AvatarGroupLegacyPopoverControlDirective } from './directives/avatar-group-legacy-popover-control.directive';

@NgModule({
    imports: [
        AvatarGroupLegacyComponent,
        AvatarGroupLegacyItemDirective,
        AvatarGroupLegacyFocusableAvatarDirective,
        AvatarGroupLegacyPopoverControlDirective,
        AvatarGroupLegacyOverflowBodyDirective,
        AvatarGroupLegacyOverflowItemDirective,
        AvatarGroupLegacyOverflowButtonDirective,
        AvatarGroupLegacyOverflowButtonTextDirective
    ],
    exports: [
        AvatarGroupLegacyComponent,
        AvatarGroupLegacyItemDirective,
        AvatarGroupLegacyFocusableAvatarDirective,
        AvatarGroupLegacyPopoverControlDirective,
        AvatarGroupLegacyOverflowBodyDirective,
        AvatarGroupLegacyOverflowItemDirective,
        AvatarGroupLegacyOverflowButtonDirective,
        AvatarGroupLegacyOverflowButtonTextDirective
    ]
})
export class AvatarGroupLegacyModule {}
