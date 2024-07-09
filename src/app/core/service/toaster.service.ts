import { Injectable } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toaster: ToastrService) { 
  }

  getToastMessage(title: string, toastType: string, message: string) {
    if (toastType == "success") {
      this.toaster.success(message, title)
    } else if (toastType == "error") {
      this.toaster.error(message, title)
    } else if (toastType == "info") {
      this.toaster.info(message, title)
    }
  }
}
