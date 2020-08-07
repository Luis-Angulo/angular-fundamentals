import { Injectable } from '@angular/core';

declare let toastr; // toastr lib, in global from node_modules

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  spawn(message: string, title?: string): void {
    toastr.success(message, title);
  }
}
