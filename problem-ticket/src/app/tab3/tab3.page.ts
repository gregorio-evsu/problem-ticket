import { Component } from '@angular/core';
import { ContactServiceService } from '../services/contact-service.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contName = "";
  contNumber = ""
  contacts: any = [];


  constructor(public contactService: ContactServiceService, public toast: ToastController) { }

  async ngOnInit() {
    this.contactService.getData().then(data => {
      this.contacts = data;
    });
  }

  saveC() {
    this.contactService.saveContact({ name: this.contName, number: this.contNumber }).then(data => {
      this.contacts = data;
      this.clearField()
    });
  }

  /**
   * show toast message to confirm deletion
   * call delete function from the contact-service.
   * @param index 
   */
  async deleteContact(index) {
    const toasts = await this.toast.create({
      message: 'Delete Contact',
      position: "top",
      buttons: [
        {
          icon: "trash",
          side: 'end',
          text: "Yes",
          handler: () => {
            console.log(index);
            this.contactService.removeContact(index).then(data => {
              this.contacts = data;
            })
          }
        }, {
          side: "start",
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancel deletion')
          }
        }]
    })
    toasts.present();
  }


  clearField() {
    this.contName = "";
    this.contNumber = "";
  }

}
