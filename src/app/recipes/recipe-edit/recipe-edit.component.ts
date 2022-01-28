import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
 id: number;
 editmode = false;
  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe(
      (params: Params) =>{
        // console.log(params);
        this.id = +params['id'];
        // console.log(this.id);
        this.editmode = params['id'] != null;
        // console.log(this.editmode);
        
        
      })
      
   }

  ngOnInit(): void {
  }

}
