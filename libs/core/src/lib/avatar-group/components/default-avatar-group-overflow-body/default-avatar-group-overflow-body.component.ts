import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    Input,
    OnDestroy,
    QueryList,
    Renderer2,
    ViewChildren,
    ViewEncapsulation
} from '@angular/core';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { elementClick$, FocusableListDirective, RtlService } from '@fundamental-ngx/cdk/utils';
import { AvatarGroupItemRendererDirective } from '../../directives/avatar-group-item-renderer.directive';
import { map, merge, startWith, Subscription } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { AvatarGroupItemDirective } from '../../directives/avatar-group-item.directive';
import { BarModule } from '@fundamental-ngx/core/bar';
import { PopoverBodyHeaderDirective } from '@fundamental-ngx/core/popover';

@Component({
    selector: 'fd-default-avatar-group-overflow-body',
    templateUrl: './default-avatar-group-overflow-body.component.html',
    imports: [
        NgForOf,
        PortalModule,
        AvatarGroupItemRendererDirective,
        FocusableListDirective,
        NgIf,
        NgTemplateOutlet,
        PopoverBodyHeaderDirective,
        BarModule
    ],
    host: {
        class: 'fd-popover__wrapper',
        '[style.max-width.rem]': '20'
    },
    styleUrls: ['./default-avatar-group-overflow-body.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultAvatarGroupOverflowBodyComponent implements AfterViewInit, OnDestroy {
    /** @hidden */
    @Input()
    avatars: Iterable<AvatarGroupItemRendererDirective> = [];

    /** @hidden */
    @Input()
    overflowPopoverTitle: string;

    /** @hidden */
    @ViewChildren(AvatarGroupItemRendererDirective)
    avatarGroupItemPortals: QueryList<AvatarGroupItemRendererDirective>;

    /** @hidden */
    overflowPopoverStage: 'main' | 'details' = 'main';

    /** @hidden */
    selectedItem: AvatarGroupItemDirective;

    /** @hidden */
    get isDetailStage(): boolean {
        return this.overflowPopoverStage === 'details';
    }

    /** @hidden */
    get isRtl(): boolean {
        return !!this._rtlService?.rtl.value;
    }
    /** @hidden */
    private changeDetectorRef = inject(ChangeDetectorRef);

    /** @hidden */
    private _itemClickSubscription: Subscription;

    /** @hidden */
    private _renderer = inject(Renderer2);

    /** @hidden */
    private _rtlService = inject(RtlService, { optional: true });

    /** @hidden */
    ngAfterViewInit(): void {
        this.avatarGroupItemPortals.changes
            .pipe(
                startWith(this.avatarGroupItemPortals),
                map((avatarGroupItemPortals) => avatarGroupItemPortals.toArray())
            )
            .subscribe((items: AvatarGroupItemRendererDirective[]) => {
                if (this._itemClickSubscription) {
                    this._itemClickSubscription.unsubscribe();
                }
                this._itemClickSubscription = merge(
                    ...items.map((item) =>
                        item.element$.pipe(
                            filter(Boolean),
                            switchMap((el) => elementClick$(el, this._renderer).pipe(map(() => item)))
                        )
                    )
                ).subscribe((item: AvatarGroupItemRendererDirective) => {
                    this.overflowPopoverStage = 'details';
                    this.selectedItem = item.avatarGroupItem;
                    this.changeDetectorRef.detectChanges();
                });
            });
    }

    /** @hidden */
    ngOnDestroy(): void {
        if (this._itemClickSubscription) {
            this._itemClickSubscription.unsubscribe();
        }
    }

    /** @hidden */
    openOverflowMain(): void {
        this.overflowPopoverStage = 'main';
        this.changeDetectorRef.detectChanges();
    }
}
