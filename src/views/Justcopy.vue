<template>
 <div class="container">
 <p>
    Name<input v-model="name"><br>
    adress<input v-model="address"><br>
    Age<input v-model="age"> 
  </p>
  <p>
    <button @click="persist">Save</button>
  </p>
 <!-- <form id="app" @submit="checkForm">
  
 <p class="text-info">{{ error }}</p>

 <div>
  <label for="name" class="text-info">  <p>Check in</p> </label>
  <p><date-pick v-model="date" class="p-2"></date-pick></p>
 </div>
  <div>
  <label for="name" class="text-info">  <p>Check out</p> </label>
  <p><date-pick v-model="date" class="p-2"></date-pick></p>
 </div>
  <p>
    <input type="submit" value="Submit">  
  </p>
 <div class="row">
  <div class="col-md-4">
 
  </div>
  <div class="col-md-4">
  
  </div>
  <div class="col-md-4">
  
  </div>
  </div>
</form> -->
 </div>
</template>
<script>
// import DatePick from 'vue-date-pick';
// import 'vue-date-pick/dist/vueDatePick.css';
export default { 
  // components: {DatePick},
   data(){
     
  return{ 
     name:'',
     age:'',
     address:'',
     error:'',
     names:'',
     date:'2021-01-01'
  };
  },
   mounted() {
    console.log('your name:'+localStorage.name+'<br>your age'+localStorage.age+'<br>your address'+localStorage.address);
    if (localStorage.name) {
    this.name = localStorage.name;
    
    }
    if (localStorage.age) {
    this.age = localStorage.age;
    }
     if(localStorage.address){ 
       this.address=localStorage.address;
    }

  },
  methods:{
    persist() {
      localStorage.name = this.name;
      localStorage.age =  this.age;
      localStorage.address=this.address;
      console.log("data is saved");
    },

//     checkForm:function(e) {
//      if(this.name=='')
//     this.error="please fill up your name field";
    
// e.preventDefault();
//     }

  }
}
</script>
<style scoped>
input,select {
  margin-left: 10px;
}
</style>