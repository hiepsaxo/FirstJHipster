import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { FirstJHipsterSharedLibsModule, FirstJHipsterSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [FirstJHipsterSharedLibsModule, FirstJHipsterSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [FirstJHipsterSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FirstJHipsterSharedModule {}
