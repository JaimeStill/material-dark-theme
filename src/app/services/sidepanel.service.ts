import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SidepanelService {
    private panelStates = [
        'collapse',
        'thin',
        'full'
    ];

    state = new BehaviorSubject<string>('thin');

    toggleState() {
        const index = this.panelStates.indexOf(this.state.value);

        if (index === (this.panelStates.length - 1)) {
            this.state.next(this.panelStates[0]);
        } else {
            this.state.next(this.panelStates[index + 1]);
        }
    }
}
