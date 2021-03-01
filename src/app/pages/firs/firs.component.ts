
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/genService.service';

@Component({
  selector: 'app-firs',
  templateUrl: './firs.component.html',
  styleUrls: ['./firs.component.css'],
  providers: [
    GeneralService
  ]
})
export class FirsComponent implements OnInit {

  constructor(private _genService: GeneralService) { }

  selectedClass = 'selected nav-item cursorPointer bg-black';
  selectedClass2 = 'selected nav-item cursorPointer';
  selectedClass3 = 'selected nav-item cursorPointer';

  firsList: any = [];

  tab1 = '';
  tab2 = '';
  tabVlues = 1;
  searchValues = '';

  ngOnInit(): void {

    this.swapTab(1);
  }

  swapTab(value) {
    console.log('swapTab: ', value);

    if (value === 1) {
      this.tab1 = 'active';
      // this.selectedCalss = 'selected nav-item cursorPointer';
      // this.selectedCalss2 = 'notselected';
      this.tab2 = '';

    }
    if (value === 2) {
      this.tab1 = '';
      this.tab2 = 'active';
      // this.selectedCalss = 'notselected';
      // this.selectedCalss2 = 'selected nav-item cursorPointer';
    }

    this.tabVlues = value;
  }


  // consumem Validate
  validateValues(tinNumber, tin)
  {

    this._genService.ValidationFir(tinNumber, tin)
    .subscribe((data: any) => {
      console.log("xx ", data);
    });


  }


  //consume search

  searchFirs(searchVal)
  {
    this._genService.searchValidation(searchVal)
    .subscribe(data => {
      console.log("searc ", data);
      this.firsList = data;
    })
  }


}
