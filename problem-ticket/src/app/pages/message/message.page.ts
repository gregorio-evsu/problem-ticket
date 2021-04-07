import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  data: any;
  constructor(private route: ActivatedRoute, private router: Router) {
     this.route.queryParams.subscribe(params => {
       console.log(params.special);;
      if (this.router.getCurrentNavigation().extras.state) {
        console.log(this.data = this.router.getCurrentNavigation().extras.state);
      }
    });
   }

  ngOnInit() {
  }

}
