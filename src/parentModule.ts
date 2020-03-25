import { NgModule } from '@angular/core';

import { ParentComponent } from './parent';
import { BrowserModule } from '@angular/platform-browser';
import { ChildComponent } from './child';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations:[
        ParentComponent,ChildComponent    ],
    imports:[
        BrowserModule ,FormsModule   ],
    bootstrap:[
        ParentComponent,ChildComponent    ]
})

export class ParentModule{

}