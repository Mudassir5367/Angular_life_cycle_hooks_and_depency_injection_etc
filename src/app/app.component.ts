import { Component } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'life-cycle-hooks';
  array:any;
  isActive:boolean=false;
  show=false
  data:any
  emails:any;
  test:any=[];
  tag:any=[];
  demo:any=[];
  id:any
  employee:any
  name='';
  friendArray:any[]=[];
  abc:any
  tagData:any=[]
  riz:any
  dumy:any;
  onlineShow:any

  // value:any

  // destroyCycle:boolean=true

  // save(val:any){
  //   this.value=val.value
  // }
  // destroy(){
  //   this.destroyCycle = false
  // }
constructor(private crudService:CrudService){}
ngOnInit(){
  
  this.crudService.getData().subscribe(data=>{
    console.log('Get: ', data);
    this.array = data;
    
// show which is just ofline
    this.array = this.array.filter((x:any)=>{
      // console.log('x: ', x.name);
      if(!x.isActive){
        return x
      }
    })

  

    // find compare index
    // this.dumy = this.array.filter((x:any)=>{
    
    //   if(x.index == 1 || x.index == 2 || x.index == 3){
    //   return x;
    //   }
    // })
    // console.log('dumyyyy: ', this.dumy);
    // console.log('array: ', this.array);

    // Email fetch with for loop 
    // for(let i=0;i<=this.array.length;i++)
    // {
    //  console.log(this.array[i].email);
     
    // find name which id is 0
  //  this.array.forEach((data:any)=>{
  //    this.dumy = data.friends.filter((x:any)=>{
  //       if(x.id == 0)
  //       {
  //         return x;
  //       }
  //     })
  //     console.log(this.dumy);
     
  //   })
     
    // }

    // email fetch with map method
  // this.test=this.array.map((value:any)=>value.email)
  // console.log('test: ', this.test);

  // FRIENDS ARRAY data
//  this.array.forEach((val:any)=>{
//   this.demo.push(val.friends)
// })
// console.log('friendsArray: ', this.demo);
    
  
// console.log(this.email);

// show tags array
// // this.array.map((value:any)=>{
//  this.tag.push(value.tags)
// // }) 
// // console.log("tagsArray",this.tag);

// compare with name
this.array.forEach((data:any)=>{
  data.friends.filter((frnd:any)=>{
    if(frnd.name == 'Lynch Buckley')
    {
     this.name =  data.name
    }
  })
})

// this.array = this.array.map((value: any) => { 
//   // console.log(value.friends);

//   value.friends.forEach((a:any) => {
//     if (a.name === 'Lynch Buckley') {
//        this.name=value.name;
//     }
//   });
  
// });
console.log('Name:: ', this.name);




})




}

// find name of friends which id > 1
friendData(arr:any){
  console.log('arr: ', arr);
// console.log(this.array);
this.friendArray.push(arr);
this.friendArray.forEach((data:any)=>{
this.abc= data.friends.filter((x:any)=>{
  if(x.id>1){
    console.log(x);
    return x;
  }  
})
console.log(this.abc);
})

  
 
}


tagsData(tag:any){
  // console.log('tag: ', tag);
this.tagData = tag.tags
// console.log('tagData: ', this.tagData);
this.riz = tag.name
console.log('tagsData: ', this.riz);

// tag.tags[4]
console.log('tag.tags[4]: ', tag.tags[4]);

 

}

showEmail(){
  this.show = true
}

}
