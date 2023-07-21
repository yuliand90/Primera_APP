import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../../services/observable.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  fecha = new Date(1990,3,15);

  public time = this.observableService.time;

  constructor(private observableService: ObservableService) { }
  ngOnInit(): void {
} 

}
