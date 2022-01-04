import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  options:any = {};
  days = [
    {name: 'monday', position: 1}, 
    {name: 'tuesday', position: 2}, 
    {name: 'wednesday', position: 3}, 
    {name: 'thursday', position: 4}, 
    {name: 'friday', position: 5}, 
    {name: 'saturday', position: 6}, 
    {name: 'sunday', position: 7}
  ];
  hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  klass = 'selected';
  startCell = null;
  isDragging = false;
  selected:string[] = [];

  isStartSelected = false;

  constructor(){

  }

  ngOnInit(): void {
      this.options.reset = (this.options.reset === undefined) ? true : this.options.reset;
  }
  
  selectHour(hour:any) {
    let isExist = false;
    if(this.selected.includes('1'+hour) && 
       this.selected.includes('2'+hour) && 
       this.selected.includes('3'+hour) &&
       this.selected.includes('4'+hour) &&
       this.selected.includes('5'+hour) &&
       this.selected.includes('6'+hour) &&
       this.selected.includes('7'+hour))
       {
        this.selected = this.selected.filter(x => x != 1+''+hour );
        this.selected = this.selected.filter(x => x != 2+''+hour );
        this.selected = this.selected.filter(x => x != 3+''+hour );
        this.selected = this.selected.filter(x => x != 4+''+hour );
        this.selected = this.selected.filter(x => x != 5+''+hour );
        this.selected = this.selected.filter(x => x != 6+''+hour );
        this.selected = this.selected.filter(x => x != 7+''+hour );
       }else{
        this.selected.push(1 +''+ hour);
        this.selected.push(2 +''+ hour);
        this.selected.push(3 +''+ hour);
        this.selected.push(4 +''+ hour);
        this.selected.push(5 +''+ hour);
        this.selected.push(6 +''+ hour);
        this.selected.push(7 +''+ hour);
       }
  }

  selectDay(day:any) {

    if(this.selected.includes(day+'1') &&
       this.selected.includes(day+'2') && 
       this.selected.includes(day+'3') &&
       this.selected.includes(day+'4') &&
       this.selected.includes(day+'5') &&
       this.selected.includes(day+'6') &&
       this.selected.includes(day+'7') &&
       this.selected.includes(day+'8') &&
       this.selected.includes(day+'9') &&
       this.selected.includes(day+'10') &&
       this.selected.includes(day+'11') &&
       this.selected.includes(day+'12') &&
       this.selected.includes(day+'13') &&
       this.selected.includes(day+'14') &&
       this.selected.includes(day+'15') &&
       this.selected.includes(day+'16') &&
       this.selected.includes(day+'17') &&
       this.selected.includes(day+'18') &&
       this.selected.includes(day+'19') &&
       this.selected.includes(day+'20') &&
       this.selected.includes(day+'21') &&
       this.selected.includes(day+'22') &&
       this.selected.includes(day+'23'))
      {
        this.selected = this.selected.filter(x => x != day+''+1);
        this.selected = this.selected.filter(x => x != day+''+2);
        this.selected = this.selected.filter(x => x != day+''+3);
        this.selected = this.selected.filter(x => x != day+''+4);
        this.selected = this.selected.filter(x => x != day+''+5);
        this.selected = this.selected.filter(x => x != day+''+6);
        this.selected = this.selected.filter(x => x != day+''+7);
        this.selected = this.selected.filter(x => x != day+''+8);
        this.selected = this.selected.filter(x => x != day+''+9);
        this.selected = this.selected.filter(x => x != day+''+10);
        this.selected = this.selected.filter(x => x != day+''+11);
        this.selected = this.selected.filter(x => x != day+''+12);
        this.selected = this.selected.filter(x => x != day+''+13);
        this.selected = this.selected.filter(x => x != day+''+14);
        this.selected = this.selected.filter(x => x != day+''+15);
        this.selected = this.selected.filter(x => x != day+''+16);
        this.selected = this.selected.filter(x => x != day+''+17);
        this.selected = this.selected.filter(x => x != day+''+18);
        this.selected = this.selected.filter(x => x != day+''+19);
        this.selected = this.selected.filter(x => x != day+''+20);
        this.selected = this.selected.filter(x => x != day+''+21);
        this.selected = this.selected.filter(x => x != day+''+22);
        this.selected = this.selected.filter(x => x != day+''+23);
      }else{
        this.selected.push(day+''+1);
        this.selected.push(day+''+2);
        this.selected.push(day+''+3);
        this.selected.push(day+''+4);
        this.selected.push(day+''+5);
        this.selected.push(day+''+6);
        this.selected.push(day+''+7);
        this.selected.push(day+''+8);
        this.selected.push(day+''+9);
        this.selected.push(day+''+10);
        this.selected.push(day+''+11);
        this.selected.push(day+''+12);
        this.selected.push(day+''+13);
        this.selected.push(day+''+14);
        this.selected.push(day+''+15);
        this.selected.push(day+''+16);
        this.selected.push(day+''+17);
        this.selected.push(day+''+18);
        this.selected.push(day+''+19);
        this.selected.push(day+''+20);
        this.selected.push(day+''+21);
        this.selected.push(day+''+22);
        this.selected.push(day+''+23);
      }
  }

  checkIfSelected(day:any, hour:any):boolean{
    let isSeleted = false;
    for(let i = 0; i < this.selected.length; i++){
      if(this.selected[i] == day+''+hour){
        isSeleted = true;
        break;
      }
    }

    return isSeleted;
  }

  reset(){
    this.selected = [];
  }

  selectIndividual(day:any, hour:any){
    if(hour == 24){
      return;
    }
    for(let i = 0; i < this.selected.length; i++){
      if(this.selected[i] == day+''+hour){       
        this.selected = this.selected.filter(x => x != (day+''+hour) );
        return;
      }
    }

    this.selected.push(day+''+hour);
  }
}
