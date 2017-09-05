import { Component } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { SidepanelService } from '../../services/sidepanel.service';

@Component({
    selector: 'app-sidepanel',
    templateUrl: 'sidepanel.component.html',
    styleUrls: ['sidepanel.component.css'],
    animations: [
        trigger(
            'slide', [
                state('collapse', style({
                    width: 0,
                    opacity: 0
                })),
                state('thin', style({
                    width: '100%',
                    opacity: 1
                })),
                state('full', style({
                    width: '100%',
                    opacity: 1
                })),
                transition('collapse => thin', animate('100ms ease-in')),
                transition('thin => full', animate('100ms ease-in')),
                transition('full => collapse', animate('100ms ease-out'))
            ]
        ),
        trigger(
            'reveal', [
                state('collapse', style({
                    width: 0,
                    opacity: 0,
                    'margin-left': 0
                })),
                state('thin', style({
                    width: 0,
                    opacity: 0,
                    'margin-left': 0
                })),
                state('full', style({
                    width: '*',
                    opacity: 1,
                    'margin-left': '15px'
                })),
                transition('thin => full', animate('100ms ease-in')),
                transition('full => collapse', animate('100ms ease-out'))
            ]
        )
    ]
})
export class SidepanelComponent {
    state = 'min';
    constructor(public sidepanel: SidepanelService) {
        sidepanel.state.subscribe(s => {
            this.state = s;
        });
    }
}
