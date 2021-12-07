<template>
  
 <form action="form" @submit.prevent="add()">
    <div class="">
    <div class="mt-5 row">
	<div class="col-md-1">
		
	</div>
	<div class="col-md-3 ">
		<div class="row">  
			<div class="col-md-3">
				
			</div>
			<div class="col-md-9">
  <div class="d-flex flex-column mb-3 justify-content-center text-center">
 <span v-if="steps.basics==1">  <div class=" p-2  mt-1 divborder" > <router-link :to="{ path: '/basic'+this.$route.params.id }" style="text-decoration:none;">Basic</router-link>
  </div></span>
 <span v-else> <div class=" p-2  mt-1 divborder"><router-link :to="{ path: '/basic'+this.$route.params.id }" style="text-decoration:none;">Basic</router-link></div></span>
 <span v-if="steps.description==1"><div class="p-2 mt-1 divborder" ><router-link :to="{ path: '/description'+this.$route.params.id }" style="text-decoration:none;">Description</router-link></div></span>
 <span v-else><div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/description'+this.$route.params.id }" style="text-decoration:none;">Description</router-link></div></span> 
 <span v-if="steps.location==1"><div class="p-2 mt-1 divborder" ><router-link :to="{ path: '/location'+this.$route.params.id }" style="text-decoration:none;">Location</router-link></div></span>
 <span v-else><div class=" p-2 mt-1 divborder" ><router-link :to="{ path: '/location'+this.$route.params.id }" style="text-decoration:none;">Location</router-link></div></span>
  <span v-if="steps.amenity==1"><div class="p-2 mt-1 divborder" ><router-link :to="{ path: '/amenities'+this.$route.params.id }" style="text-decoration:none;">Amenities</router-link></div></span>
  <span v-else><div class=" p-2 mt-1 divborder" ><router-link :to="{ path: '/amenities'+this.$route.params.id }" style="text-decoration:none;">Amenities</router-link></div></span>
  <span v-if="steps.photos==1"> <div class="p-2 mt-1 divborder" ><router-link :to="{ path: '/photo'+this.$route.params.id }" style="text-decoration:none;">Photo</router-link></div> </span>
  <span v-else> <div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/photo'+this.$route.params.id }" style="text-decoration:none;">Photo</router-link></div> </span>
  <span  v-if="steps.pricing==1"><div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/price'+this.$route.params.id }" style="text-decoration:none;">Pricing</router-link></div></span>
 <span v-else> <div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/price'+this.$route.params.id }" style="text-decoration:none;">Pricing</router-link></div> </span>
 <div class="ab p-2 mt-1 divborder">Booking</div>
 
 
</div>
</div>

</div>
	
</div>

<div class="col-md-6 border pb-3 pl-2 colh">
  <div class="border d-flex flex-row row" style="background-color:#eee">
    <div class="backgrnd d-flex align-items-start">
      <h4>Booking price</h4> 
    </div>
    <div class="d-flex" style="height:150px">
    <div class="col-md-6">
    <div class="col-md-6">
   
    </div>
    </div>
    <div class="col-md-6">
    <label for="inputState" class="form-label"><span class="text-gray" style="font-size:18px;">Booking Type</span></label>
    <select id="inputState" class="form-select"  v-model="booking_type" >
       <option value="request">Review each request</option>
       <option value="instant">Guest Book Instanly</option>
    </select>
    </div>
    </div>

  </div>
  
 <div class="row" style="height:209px">
 
 </div>

                
  <div class="d-flex justify-content-between mt-3" style="height:60px">
  <div>
    <router-link :to="{ path: '/price'+this.$route.params.id }" class="btn btn-primary mt-4">Back</router-link>
  </div>

  <div>
    <button type="submit" class="btn btn-primary mt-4" :disabled="loading">
<span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Next</button>
  </div>
  </div>
 
</div>

<div class="col-md-2">
	
</div>
	
</div>

</div>
    
   
</form>

</template>
<script>

import axios from "axios";
export default {

  name: "user",
  data() {
    return {
     
      booking_type:'',
      step:'',
      steps:'',
      loading:false,
    };
  },
  mounted(){ 
    this.view();
    
  },
methods: { 
   
view() {
      
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .get(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/booking",
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
            this.step=res.data.data.step;
            this.steps=res.data.data.steps;
            this.booking_type=res.data.data.property.booking_type;
           
        });
    },
    add() {
      this.loading=true;
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .post(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/booking",
          
          { 

         booking_type:this.booking_type
        
         
         },
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
          this.loading=false;
         res.data
        // this.$router.push(`/basic${res.data.data.id}`);
        }).catch((res) =>{
          res.data
          this.loading = false         
        });
    },
},


}
</script>
<style scoped>
.colh{
    flex: 0 0 auto;
    width: 50%;
    height: 500px;
   
}
.heights{ 
  height: 510px;
}
.divborder{ 
border:1px solid black;
}
.backgrnd{ 
background-color: #EEEEEE;
padding: 5px;
padding-left: 14px;
}
.RoomsandBeds:hover{ 
background-color: #6C757D;
color:white;
}
.Listings:hover{ 
background-color: #6C757D;
color:white;
}
.bg{ 
background-color: #DFDBD2;
border: 1px solid gray;
}
.ab{
background-color:#74992e;
}
.bg:a{ 
color:#353935;
}
.bg a:hover{
text-decoration:none;
color: white;
}
.bg:hover{
background-color: #6C757D;
color: white;
font-size: 18px;
font-weight: bold;
}
.bgbasic{
background-color: rgb(199, 183, 183);
}
.bgdescription{
background-color: rgb(199, 183, 183);
}
</style>