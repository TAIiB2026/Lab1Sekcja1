import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person',
  standalone: false,
  templateUrl: './person.html',
  styles: ``,
})
export class PersonComponent implements OnInit {
  public id!: number;
  private readonly activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      const id: string = p['id'];
      console.log(id);
      this.id = +id;
    })
  }
}
