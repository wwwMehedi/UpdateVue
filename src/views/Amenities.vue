<template>
  
   <form action="form" @submit.prevent="add()">

    <div class="mt-5 row">
	<div class="col-md-1">
		
	</div>
	<div class="col-md-3 ">
		<div class="row">
			<div class="col-md-3">
				
			</div>
      <!--column div sart -->
<div class="col-md-9">
  <div class="d-flex flex-column mb-3 justify-content-center text-center">
  <span v-if="steps.basics==1"><div class="p-2 mt-1 divborder"> <router-link :to="{ path: '/basic'+this.$route.params.id }" style="text-decoration:none;">Basic</router-link>
  </div></span>
  <span v-else> <div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/basic'+this.$route.params.id }" style="text-decoration:none;">Basic</router-link></div></span>
  <span v-if="steps.description==1"><div class="p-2 mt-1 divborder"><router-link :to="{ path: '/description'+this.$route.params.id }" style="text-decoration:none;">Description</router-link></div></span>
  <span v-else><div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/description'+this.$route.params.id }" style="text-decoration:none;">Description</router-link></div></span> 
  <span v-if="steps.location==1"><div class="p-2 mt-1 divborder"><router-link :to="{ path: '/location'+this.$route.params.id }" style="text-decoration:none;">Location</router-link></div></span>
  <span v-else><div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/location'+this.$route.params.id }" style="text-decoration:none;">Location</router-link></div></span>
  <div class="ab p-2 mt-1 divborder">Amenities</div>
  <span v-if="steps.photos==1"> <div class="p-2 mt-1 divborder"><router-link :to="{ path: '/photo'+this.$route.params.id }" style="text-decoration:none;">Photo</router-link></div> </span>
  <span v-else> <div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/photo'+this.$route.params.id }" style="text-decoration:none;">Photo</router-link></div> </span>
  <span  v-if="steps.pricing==1"><div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/price'+this.$route.params.id }" style="text-decoration:none;">Pricing</router-link></div></span>
  <span v-else> <div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/price'+this.$route.params.id }" style="text-decoration:none;">Pricing</router-link></div> </span>
  <span v-if="steps.booking==1"> <div class="p-2 mt-1 divborder"><router-link :to="{ path: '/booking'+this.$route.params.id }" style="text-decoration:none;">Booking</router-link></div> </span>
  <span v-else> <div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/booking'+this.$route.params.id }" style="text-decoration:none;">Booking</router-link></div> </span>
  </div>
</div>
<!--column div finish -->
</div>
</div>


<div class="col-md-6 border pb-3 pl-2 colh">
  
   <div class="backgrnd d-flex align-items-start row">
      <h4>Amenities</h4>
    </div>

     <div class="" style="height:350px;">
     <div class="h-100">
     <div class="" v-for="am in amenities" :key="am.id" >
              <div v-if="am.id<15">
                 <input class="" type="checkbox" :value="am.id" v-model="amen" id="flexCheckDefault" name="amenities[]" data-saving="1">
                   <label class="form-check-label" for="flexCheckDefault">
                     {{am.title}}
                    </label>
              </div>
        </div>
     </div>
     
        <h5 class="text-danger">{{errornameamen}}</h5>
     </div>
         



      <div class="" style="100px">
       <div class="d-flex justify-content-between h-100">
        <div style="margin-top:51px;">
           <router-link :to="{ path: '/location'+this.$route.params.id }" class="btn btn-primary" >Back</router-link>
        </div>
         <div style="margin-top:51px;">
          <button type="submit" class="btn btn-primary" :disabled="loading">
          <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Next</button>                    
        </div>
       </div>
      </div>
     
     
</div>


<div class="col-md-2">
	
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

      name:"",
      summary:"",
      step:'',
      steps:'',
      amenities:[],
      
      amen:[],
      loading:false,
      errornameamen:''
    };
  },

  mounted(){ 
    
   if (localStorage.getItem("amenities")&&localStorage.getItem("amen")){
    this.amenities = JSON.parse(localStorage.getItem("amenities"))
    this.amen = JSON.parse(localStorage.getItem("amen"))
    console.log("this.amenities");
    console.log(this.amenities);
  }else{ 
this.view();
    }
    
  },

 methods:{ 

view() {
       
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .get(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/amenities ",
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) =>{
         
            console.log(res.data);
            this.step=res.data.data.step;
            this.steps=res.data.data.steps;
            this.amenities=res.data.data.amenities;
            this.amen=res.data.data.property_amenities; 
            this.loading = false;
        });
    },
     
    add() { 
      this.loading=true;
      if(this.amen==''){ 
          this.errornameamen="fill up amenities field"
      } else { 
       
      localStorage.setItem("amenities", JSON.stringify(this.amenities));
      localStorage.setItem("amen", JSON.stringify(this.amen));

      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .post(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/amenities",
                      
          { 
           amenities:this.amen    
          },

          {
            headers: { Authorization: "Bearer " + user.token },
          }
        
        )             
        .then((res) =>{
         
          this.$router.push(`/photo${res.data.data.id}`);
            
        }).catch((res) => {
          this.loading = false;
          res.data
              
        });  
 }
    }, 
},

}

</script>
<style scoped>
.colh{
    flex: 0 0 auto;
    width: 50%;
    height: 500px;
    background: white;
}
.divborder{ 
border:1px solid black;
}

label{ 
  margin-left: 10px;
}
.height{ 
  height:700px;
}
.backgrnd{ 
background-color: #EEEEEE;
padding: 5px;
padding-left: 7px;
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
