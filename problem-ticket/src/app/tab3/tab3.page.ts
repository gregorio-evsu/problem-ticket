import { Component } from '@angular/core';
import { ContactServiceService } from '../services/contact-service.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contName = "";
  contNumber = ""
  contacts: any = [];


  constructor(public contactService: ContactServiceService) { }

  async ngOnInit() {
    this.contactService.getData().then(data => {
        this.contacts = data;
    });
  }

  saveC() {
    this.contactService.saveContact({name: this.contName, number: this.contNumber}).then(data => {
      this.contacts = data;
      this.clearField()
    });
  }

  clearField() {
    this.contName = "";
    this.contNumber = "";
  }

}
