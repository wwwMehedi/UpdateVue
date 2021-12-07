<template>
  
   


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
 <span v-if="steps.basics==1"><div class=" p-2  mt-1 divborder"> <router-link :to="{ path: '/basic'+this.$route.params.id }" style="text-decoration:none;">Basic</router-link>
  </div></span>
 <span v-else> <div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/basic'+this.$route.params.id }" style="text-decoration:none;">Basic</router-link></div></span>
 <span v-if="steps.description==1"><div class="p-2 mt-1 divborder"><router-link :to="{ path: '/description'+this.$route.params.id }" style="text-decoration:none;">Description</router-link></div></span>
 <span v-else><div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/description'+this.$route.params.id }" style="text-decoration:none;">Description</router-link></div></span> 
 <span v-if="steps.location==1"><div class="p-2 mt-1 divborder"><router-link :to="{ path: '/location'+this.$route.params.id }" style="text-decoration:none;">Location</router-link></div></span>
 <span v-else><div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/location'+this.$route.params.id }" style="text-decoration:none;">Location</router-link></div></span>
  <span v-if="steps.amenity==1"><div class="p-2 mt-1 divborder"><router-link :to="{ path: '/amenities'+this.$route.params.id }" style="text-decoration:none;">Amenities</router-link></div></span>
 <span v-else><div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/amenities'+this.$route.params.id }" style="text-decoration:none;">Amenities</router-link></div></span>
  <div class="ab p-2 mt-1 divborder">Photo</div>
  <span  v-if="steps.pricing==1"><div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/price'+this.$route.params.id }" style="text-decoration:none;">Pricing</router-link></div></span>
  <span v-else> <div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/price'+this.$route.params.id }" style="text-decoration:none;">Pricing</router-link></div> </span>
  <span v-if="steps.booking==1"> <div class="p-2 mt-1 divborder"><router-link :to="{ path: '/booking'+this.$route.params.id }" style="text-decoration:none;">Booking</router-link></div> </span>
  <span v-else> <div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/booking'+this.$route.params.id }" style="text-decoration:none;">Booking</router-link></div> </span>
  
 
</div>
</div>
</div>
	
</div>
<div class="col-md-6 border pb-3 pl-2 colh" v-if="loading"><Loading></Loading></div>
<div class="col-md-6 border pb-3 pl-2 colh" v-else>
  <div class="border d-flex flex-row row">
    <div class="backgrnd d-flex align-items-start">
      <h4>Photos</h4>
    </div>
    
    <div class="d-flex justify-content-between" style="height:150px;">
    <div class="mt-3">
     <input type="file" ref="file" multiple="multiple">
    </div>
    <div class="mt-3">
    </div>
    <div class="d-flex justify-content-between">
   <button v-on:click="ab()" class="btn btn-info" :disabled="loading" style="height:40px; color:white font-size:18px;">
                  <span
                  v-if="loading"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                 ></span>Upload</button>             
    </div>
    </div>
    <div class="row border-bottom">
    </div>
  
  <div class="d-flex justify-content-start pt-5" style="height:155px;">
  <div v-for="(pic,index) in uploadphoto" :key="pic.id" :value="index">
   <div class="p-1"><img :src="pic.photo_url" alt="nothing" class="float-start bg-success border" style="width:150px;height:100px; border-radius:10px;" > </div>
  </div>
  </div>
       
  </div>
   
  <div class="d-flex justify-content-between" style="height:60px;">
    <div>
    <router-link :to="{ path: '/amenities'+this.$route.params.id }" class="btn btn-primary mt-4">Back</router-link>  
    </div>
    <div>
   <router-link :to="{ path: '/price'+this.$route.params.id }" class="btn btn-primary mt-4">Next</router-link>
    </div>
  </div>
</div>

<div class="col-md-2">
	
</div>
	
</div>

</div>
    



</template>
<script>

import axios from "axios";
import Loading from './Loading.vue';
export default {
  components: { Loading },
  name: "user",
  data() {
    return {
     files:[],
      photos:'',
      summary:"",
      step:'',
      steps:'',
     loading:false,
     uploadphoto:[],
    };
  },
  mounted(){ 
    this.view();
  },
methods: { 
      ab() {
        this.loading=true;
     console.log("ab method in");
     let user = JSON.parse(localStorage.getItem("user"));
			let formData = new FormData();
console.log("form data in");
    for( var i = 0; i < this.$refs.file.files.length; i++ ){
        let file = this.$refs.file.files[i];
        formData.append('photos[' + i + ']', file);
        console.log(file);
    }			
				
				axios.post( "https://vrent.techvill.org/vrentapi/api/listing/"+
            this.$route.params.id +
            "/photos",
					formData,
					{
						
			headers: { Authorization: "Bearer " + user.token, 'Content-Type': 'multipart/form-data' },      
					},
console.log("after axios header in")
				).then((res) => {
            res.data
           this.loading=false;
            this.view();
        })
				.catch(function(){
          
					console.log('FAILURE!!');
				});
			},

   
view() {
      this.loading=true;
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .get(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/photos",
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
          
            this.step=res.data.data.step;
            this.steps=res.data.data.steps;
            this.uploadphoto=res.data.data.photos;
            console.log(this.steps);
            this.loading=false;
        });
    },
    
   
},

}
</script>
<style scoped>
.justify-content-between{ 
  margin-top:35px;
}
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