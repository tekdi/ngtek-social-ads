import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'saferesource'
})
export class SaferesourcePipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) {}
  transform(resource): any {
    return this._sanitizer.bypassSecurityTrustResourceUrl(resource);
  }

}
