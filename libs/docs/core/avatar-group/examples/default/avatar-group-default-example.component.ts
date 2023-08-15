import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { AvatarGroupComponent } from '@fundamental-ngx/core/avatar-group';
import { AvatarGroupDataExampleService } from '../avatar-group-data-example.service';
import { PopoverBodyComponent } from '@fundamental-ngx/core/popover';
import { RtlService, Size } from '@fundamental-ngx/cdk/utils';

@Component({
    selector: 'fundamental-ngx-avatar-group-default-example',
    templateUrl: './avatar-group-default-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarGroupDefaultExampleComponent {
    @ViewChild('avatarGroup_IndividualType')
    avatarGroup: AvatarGroupComponent;

    @ViewChild('overflowPopoverBody')
    popoverBodyComponent: PopoverBodyComponent;

    size: Size = 's';
    people = this.avatarGroupDataExampleService.generate();
    personDetails: any = null;
    overflowPopoverStage: 'main' | 'detail' = 'main';

    get isDetailStage(): boolean {
        return this.overflowPopoverStage === 'detail';
    }

    constructor(
        private readonly avatarGroupDataExampleService: AvatarGroupDataExampleService,
        private _rtlService: RtlService
    ) {}

    get isRtl(): boolean {
        return this._rtlService.rtl.getValue();
    }

    openOverflowDetails(person): void {
        this.personDetails = person;
        this.overflowPopoverStage = 'detail';
    }

    openOverflowMain(): void {
        this.personDetails = null;
        this.overflowPopoverStage = 'main';
    }
}
