import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'exemplo-data-binding',
    templateUrl: 'data-binding.component.html'
})
export class DataBindingComponent {
    url = 'http://fiap.com.br';
    urlImg = 'http://lorempixel.com/400/200/business';
}