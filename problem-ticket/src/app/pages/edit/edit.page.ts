import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  name: any = '';
  contNum: any = '';
  constructor(private route: ActivatedRoute, private router: Router) {

   }
  ngOnInit() {
      this.route.queryParams.subscribe(params => {
       if (this.router.getCurrentNavigation().extras.state) {
            let data = this.router.getCurrentNavigation().extras.state
            this.name = data.special.data.name
            this.contNum = data.special.data.number
            console.log('upload to git repo');
            console.log(data);
         }
    });
  }

  saveData() {

  }

}
