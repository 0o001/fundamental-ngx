import { Directive, ElementRef, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { FD_LIST_LINK_DIRECTIVE } from '../tokens';

@Directive({
    selector: '[fd-list-link], [fdListLink]',
    host: {
        '[attr.tabindex]': '-1'
    },
    providers: [
        {
            provide: FD_LIST_LINK_DIRECTIVE,
            useExisting: ListLinkDirective
        }
    ]
})
export class ListLinkDirective implements OnChanges {
    /** Defines if navigation indicator arrow should be included inside list item */
    @Input()
    @HostBinding('class.fd-list__link--navigation-indicator')
    navigationIndicator = false;

    /** Defines if link should be treated as a navigated */
    @Input()
    @HostBinding('class.is-navigated')
    navigated = false;

    /** Whether to mark link as focusable. If true, list item will shift focus from itself to the link. */
    @Input()
    @HostBinding('class.fd-list__link--focusable')
    focusable = false;

    /** @hidden */
    @HostBinding('class.fd-list__link')
    fdListLinkClass = true;

    /** Emits when some of the properties, that should be read by screenreader, are changed */
    readonly _onReadablePropertyChanged$ = new Subject<void>();

    /** @hidden */
    constructor(public elementRef: ElementRef) {}

    /** @hidden */
    ngOnChanges(changes: SimpleChanges): void {
        if (changes.navigationIndicator || changes.navigated) {
            this._onReadablePropertyChanged$.next();
        }
    }
}
