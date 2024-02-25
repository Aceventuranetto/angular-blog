import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/80C64C0B63382CD3ED2653356125F275F63D036028A77D38DC3286AD851A6833/scale?width=1200&aspectRatio=1.78&format=webp"
  contentTitle:string= ""
  contentDescription:string= "bla bla bal bla bla bla"
  private id:string | null ="0"

  constructor(
    private route:ActivatedRoute
  ) { }


  ngOnInit(): void {
      this.route.paramMap.subscribe( value =>
       this.id = value.get("id")

      )

      this.setValuesToComponent(this.id)

  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]


    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }
}
