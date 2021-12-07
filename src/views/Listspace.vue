<template>
    <div class="">
    
    <div class="row mt-5">
    </div>
    <div class="row"> 
    <div class="col-md-4 col-xs-12 col-sm-6 mt-3 ms-5">
    <div class="container ms-5">
    <div class="top">
    <p class="toprate text-center">Top Rated Accomodation </p>
     <hr>
    </div> 
      <div class="d-flex" style="box-shadow: 0px 0px 5px 0px gray;">
       <div class="d-flex flex-row bd-highlight mb-3">
  <div class="ps-4 bd-highlight">
  <img src="../assets/homethree.jpg" alt="" class="mt-3"  style="width:150px; height:100px; border:1px solid gray">
  </div>
    <div class="mt-4 bd-highlight d-flex-column">
      <div class="ps-3">Sweat Home</div>
      <div class="ps-3" style="font-size:14px; color: rgb(233, 95, 95);"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
      <div class="ps-3" style="font-size:12px;">Nikunja,Dhaka</div>
   </div>
  
    </div>
    </div>
    <!--second div-->
      <div class="d-flex mt-3" style="box-shadow: 0px 0px 5px 0px gray;">
       <div class="d-flex flex-row bd-highlight mb-3">
  <div class="ps-4 bd-highlight">
  <img src="../assets/homethree.jpg" alt="" class="mt-3"  style="width:150px; height:100px; border:1px solid gray">
  </div>
    <div class="mt-4 bd-highlight d-flex-column">
      <div class="ps-3">Dream House</div>
      <div class="ps-3" style="font-size:14px; color: rgb(233, 95, 95);"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
      <div class="ps-3" style="font-size:12px;">Shukrabad,Dhaka</div>
   </div>
  
    </div>
    </div>
    <!--second div finish-->
    </div>
    
    </div>

    <div class="col-md-6 col-xs-12 mt-5 pb-5 ms-5" style="box-shadow: 0px 3px 5px 0px gray;" >
    
  <div class="row text-center" style="background-color:#eeee"> 
  <h1 class="h1txt">List Your Space</h1>
  <p class="pt">Vrent Lets you make money renting out your place.</p>
  <span class="border-bottom border-primary"></span>
  </div>
  <form class="needs-validation" novalidate name="form" @submit.prevent="add()">

      <div class="row bg-white">
      <div class="col-md-6 col-xs-12 col-sm-6">
      
       <label for="inputState" class="form-label pt">Home Type</label>
  
      <select id="inputState" class="form-select" v-model="property_type">
      <option  v-for="(view,index) in show" :key="view.id" :value="index">{{view}}</option>
      </select>


      </div>
        <div class="col-md-6 col-xs-12 col-sm-6">
       <label for="inputState2" class="form-label pt">Room Type</label>
    <select id="inputState2" class="form-select" v-model="space_type">
    <option selected v-for="(room,index) in rooms" :key="room.id" :value="index">{{room}}</option>
    </select>

      </div>
      </div>
    <div class="row bg-white">
      <div class="col-md-6 col-xs-12 col-sm-6">
       <label for="inputState" class="form-label pt">Acomodates</label>
    <select id="inputState" class="form-select" v-model="accommodates" required>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    </select>       
      </div>
      
        <div class="col-md-6 col-xs-12 col-sm-6">
       <label for="inputState" class="form-label pt">City</label>
    <input type="text" class="form-control" v-model="map_address">
      </div>

      </div>
      <div class="d-flex justify-content-end">
      <button type="submit" class="btn btn-danger mt-4" :disabled="loading"><span
                  v-if="loading"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>Next</button>
      </div>
      
 </form>
    </div>
  
    <div class="col-md-2 col-xs-12 col-sm-6">
    </div>

    </div>
    
    </div>
</template>

<script>

import axios from "axios";
//import axios from "axios";
export default{ 
  
name:"user",
data(){ 
return{ 
show:"",
rooms:"",
accommodates:"",
map_address:"",
property_type:"",
space_type:"",
dummy:"",
loading:false,

};
},
mounted() { 
  this.view();
 
},
 methods: {
 view() {
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .get("https://vrent.techvill.org/vrentapi/api/property/create", {
          headers: {Authorization:"Bearer "+ user.token },
        })
        .then((res) => {
          res.data
     this.show = res.data.data.propertyType;
     this.rooms = res.data.data.spaceType;
          this.accommodates=1;
          this.property_type=1;
          this.space_type=1;
          // if(res.data.data.propertyType==null){ 
          //      this.property_type=2   
          //      console.log( this.property_type); 
          // }else { 
          //    this.property_type=res.data.data.propertyType
          // } 
        });
    },

    add(){ 
      this.loading=true;
      let user=JSON.parse(localStorage.getItem("user"));
      axios.post("https://vrent.techvill.org/vrentapi/api/property/create",
      { 
        property_type:this.property_type,
        space_type:this.space_type,
        accommodates:this.accommodates,
        map_address:this.map_address,
      },

      { 
        headers:{Authorization: "Bearer "+user.token }
      }
      
      ).then((res)=>{ 
        this.loading=false,
        res.data
       console.log(res.data);
       this.$router.push(`/basic${res.data.data.property.id}`);
    
      }).catch((res) => {
          res.data
          this.loading = false         
        });
      
    }

  },




};
 
</script>

<style scoped>
.toprate{ 
font-size: 22px;
 font-family: Normal;
 color: rgb(99, 96, 96)
}
.svila{ 
 font-size: 18px;
 font-family: Normal;
 color: rgb(233, 95, 95)
}
.h1txt{ 
  font-family: Normal;
  font-size: 30px;
}
label {
  font-size: 22px;
}
.pt{ 
 font-size: 18px;
 font-family: Normal;

}
</style>
