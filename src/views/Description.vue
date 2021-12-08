<template>
  
   <form action="form" @submit.prevent="add()">
    <div class="">
    <div class="row mt-5">
	<div class="col-md-1">
		
	</div>
	<div class="col-md-3 ">
		<div class="row">
			<div class="col-md-3">
				
			</div>
			<div class="col-md-9">
  <div class="d-flex flex-column mb-3 justify-content-center text-center">
  <span v-if="steps.basics==1"> <div class="p-2 mt-1 divborder"> <router-link :to="{ path: '/basic'+this.$route.params.id}" style="text-decoration:none;">Basic</router-link>
  </div></span>
  <span v-else> <div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/basic'+this.$route.params.id }" style="text-decoration:none;">Basic</router-link></div></span>
  <div class="ab p-2 mt-1 divborder">Description</div>
  <span v-if="steps.location==1"><div class="p-2 mt-1 divborder"><router-link :to="{ path: '/location'+this.$route.params.id }" style="text-decoration:none;">Location</router-link></div></span>
  <span v-else><div class="p-2 mt-1 divborder"><router-link :to="{ path: '/location'+this.$route.params.id }" style="text-decoration:none;">Location</router-link></div></span>
  <span v-if="steps.amenity==1"><div class="p-2 mt-1 divborder"><router-link :to="{ path: '/amenities'+this.$route.params.id }" style="text-decoration:none;">Amenities</router-link></div></span>
  <span v-else><div class="p-2 mt-1 divborder"><router-link :to="{ path: '/amenities'+this.$route.params.id }" style="text-decoration:none;">Amenities</router-link></div></span>
  <span v-if="steps.photos==1"> <div class="p-2 mt-1 divborder"><router-link :to="{ path: '/photo'+this.$route.params.id }" style="text-decoration:none;">Photo</router-link></div> </span>
  <span v-else> <div class="p-2 mt-1 divborder"><router-link :to="{ path: '/photo'+this.$route.params.id }" style="text-decoration:none;">Photo</router-link></div> </span>
  <span v-if="steps.pricing==1"><div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/price'+this.$route.params.id }" style="text-decoration:none;">Pricing</router-link></div></span>
  <span v-else> <div class="p-2 mt-1 divborder"><router-link :to="{ path: '/price'+this.$route.params.id }" style="text-decoration:none;">Pricing</router-link></div> </span>
  <span v-if="steps.booking==1"> <div class="p-2 mt-1 divborder"><router-link :to="{ path: '/booking'+this.$route.params.id }" style="text-decoration:none;">Booking</router-link></div> </span>
  <span v-else> <div class="p-2 mt-1 divborder"><router-link :to="{ path: '/booking'+this.$route.params.id }" style="text-decoration:none;">Booking</router-link></div> </span>
</div>
</div>		
</div>
</div>

<div class="col-md-6 border pb-3 pl-2 colh">
  <div class="border d-flex flex-row row" style="height:408px;">
    <div class="backgrnd d-flex align-items-start">
      <h4>Description</h4>
    </div>
    <div class="mt-3">
   <label class="form-label" for="listingName">
     <h5>Listing Name<span class="text-danger">*</span></h5>
     <p class="text-danger">{{errorname}}</p>
   </label>
   <input type="text" @keyup.prevent="name_validate()" class="form-control" id="listingName" placeholder="Entire home/apt in Dhaka" v-model="name">
    </div>
    <div class="mt-3">
      <label for="summery" class="form-label">
        <h5>Summery<span class="text-danger">*</span></h5>
        <p class="text-danger">{{errorsumary}}</p>
      </label>
    <textarea  @keyup.prevent="summary_validate()" class="form-control text-16 valid" id="summery" rows="6" aria-invalid="false" v-model="summary"></textarea>
    </div>
    <div>
      <p class="pt-3">You can add more <span class="text-success">details</span> Tell travelers about your space and hosting style.</p>
    </div>
    <div class="mt-3">
      
    </div>

  </div>
  <div class="d-flex justify-content-between mt-3">
    <div>
    <router-link :to="{ path: '/basic'+this.$route.params.id }" class="btn btn-danger mt-4">Back</router-link>
    </div>
<div class="d-flex justify-content-end">
               <button type="submit" class="btn btn-danger mt-4" :disabled="loading">
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
      name:"",
      summary:"",
      step:'',
      steps:'',
      loading: false,
      errorsumary:'',
      errorname:''

    };
  },

  mounted(){ 
    if(localStorage.getItem("name")&&localStorage.getItem("summary")){ 
    console.log("succesfully show from localstorage")
    this.name = JSON.parse(localStorage.getItem("name"))
    this.summary = JSON.parse(localStorage.getItem("summary"))
         }
  else{ 
      this.view();
      }
      },
methods: { 
  name_validate(){ 
   this.errorname=''
  },
  summary_validate(){ 
 this.errorsumary=''
  },
view() {
  
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .get(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/description",
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
            this.step=res.data.data.step;
            this.steps=res.data.data.steps;
            this.name=res.data.data.property.name;
            this.summary=res.data.data.description.summary;
            
        });
    },
    add() {
       if(this.name==''){ 
          this.errorname="fill up name field"
        }
         if(this.summary=='' || this.summary==null){ 
           this.loading=false;
           this.errorsumary="fill up summary field"
        }else
      this.loading = true;
      localStorage.setItem("name", JSON.stringify(this.name));
      localStorage.setItem("summary", JSON.stringify(this.summary));
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .post(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/description",
          
          { 
           
           name:this.name,
           
           summary:this.summary,
           
          },
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
            this.loading = false    
            this.$router.push(`/location${res.data.data.id}`);
          
       
              
        }).catch((res) => {
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
    background: white;
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