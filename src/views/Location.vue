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
  <span v-if="steps.basics==1"> <div class="p-2 mt-1 divborder"><router-link :to="{ path: '/basic'+this.$route.params.id }" style="text-decoration:none;">Basic</router-link></div></span>
  <span v-else> <div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/basic'+this.$route.params.id } " style="text-decoration:none;">Basic</router-link></div></span>
  <span v-if="steps.description==1"> <div class="p-2 mt-1 divborder"><router-link :to="{ path: '/description'+this.$route.params.id }" style="text-decoration:none;">Description</router-link></div></span>
  <span v-else> <div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/description'+this.$route.params.id }" style="text-decoration:none;">Description</router-link></div></span>
  <div class="ab p-2 mt-1 divborder">Location</div>
  <span v-if="steps.amenity==1"><div class="p-2 mt-1 divborder"><router-link :to="{ path: '/amenities'+this.$route.params.id }" style="text-decoration:none;">Amenities</router-link></div></span>
  <span v-else><div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/amenities'+this.$route.params.id }" style="text-decoration:none;">Amenities</router-link></div></span>
  <span v-if="steps.photos==1"> <div class="p-2 mt-1 divborder"><router-link :to="{ path: '/photo'+this.$route.params.id }" style="text-decoration:none;">Photo</router-link></div> </span>
  <span v-else> <div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/photo'+this.$route.params.id }" style="text-decoration:none;">Photo</router-link></div> </span>
  <span  v-if="steps.pricing==1"><div class="p-2 mt-1 divborder"><router-link :to="{ path: '/price'+this.$route.params.id }" style="text-decoration:none;">Pricing</router-link></div></span>
  <span v-else> <div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/price'+this.$route.params.id }" style="text-decoration:none;">Pricing</router-link></div> </span>
  <span v-if="steps.booking==1"> <div class="p-2 mt-1 divborder"><router-link :to="{ path: '/booking'+this.$route.params.id }" style="text-decoration:none;">Booking</router-link></div> </span>
  <span v-else> <div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/booking'+this.$route.params.id }" style="text-decoration:none;">Booking</router-link></div> </span>
  
  
</div>
</div>			
</div>
	
</div>

<div class="col-md-6 border pb-3 pl-2 colh">
  <div class="border d-flex flex-row row" style="height:408px;">
    <div class="backgrnd d-flex align-items-start">
      <h4>Location</h4>
    </div>
    <div class="mt-3">
      
     <h6>Country<span class="text-danger">*</span></h6>
    <select id="inputState" class="form-select" @change.prevent="countryvalidate()" v-model="country">
     <option  v-for="(countrylist,index) in countries" 
      :key="countrylist.id" :value="index">{{countrylist}}</option> 
    </select>
     <h5>{{countryone}}</h5>
    </div>
    <div class="mt-3">
   
    <h6>Address Line 1 <span class="text-danger">*</span></h6>
    <input type="text" @keyup.prevent="line1_validate()" class="form-control" id="listingName" placeholder="Entire home/apt in Dhaka" v-model="address_line_1" >
   <h5>{{line1}}</h5>
    </div>
   
    <div class="d-flex flex-row">
    <div class="col-md-5">
    <div>
   
     <h6>Address Line 2<span class="text-danger">*</span></h6>
   <input type="text"  @keyup.prevent="line2_validate()" class="form-control" id="listingName" placeholder="Entire home/apt in Dhaka" v-model="address_line_2">
   <h5>{{line2}}</h5>
    </div>
    </div>
    <div class="col-md-1">
    </div>
    <div class="col-md-6">
    <div>
  
     <h6>City/Town/ District <span class="text-danger">*</span></h6>
   <input type="text"  @keyup.prevent="cityone_validate()" class="form-control" id="listingName" placeholder="Entire home/apt in Dhaka" v-model="city">
   <h5>{{cityone}}</h5>
    </div>
    </div>      
    </div>

<div class="d-flex flex-row">
    <div class="col-md-5">
    <div>
     <h6>State/Province/County/Region<span class="text-danger">*</span></h6>
   <input type="text" @keyup.prevent="stateone_validate()" class="form-control" id="listingName" placeholder="Entire home/apt in Dhaka" v-model="state">
   <h5>{{stateone}}</h5>
    </div>
    </div>
    <div class="col-md-1">   
    </div>
    <div class="col-md-6">
    <div>
    
   
   <h6>ZIP/Postal Code<span class="text-danger">*</span></h6>
   <input type="text" @keyup.prevent="postal_code_validate()" class="form-control" id="listingName" placeholder="Entire home/apt in Dhaka" v-model="postal_code">
    <h5>{{postalcodeone}}</h5>
    </div>
    </div>      
    </div>
  </div>
  <div class="d-flex justify-content-between mt-3">
    <div>
   <router-link :to="{ path: '/description'+this.$route.params.id }" class="btn btn-danger mt-4">Back</router-link>
    </div>
    <div>
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

      country:'',
      countries:'',
      address_line_1:'',
      address_line_2:'',
      latitude:'15.486476',
      longitude:'73.809443',
      city:'',
      state:'',
      postal_code:'',
      
      step:'',
      steps:'',

      loading: false,
      line1:'',
      line2:'',
      countryone:'',
      cityone:'',
      stateone:'',
      postalcodeone:'',
      location:'',
      mysteps:'',
      
      
    };
  },
  mounted(){ 
     //console.log("this.mysteps");
    
    if (localStorage.getItem("country")&&localStorage.getItem("countries")&&localStorage.address_line_1&&localStorage.address_line_2
    &&localStorage.country&&localStorage.countries&&localStorage.city
      &&localStorage.state&&localStorage.latitude&&localStorage.longitude 
      &&localStorage.postal_code) {
      console.log("localstorage is calling");
      console.log(localStorage.mysteps);
         
    this.address_line_1 = localStorage.address_line_1;
    this.address_line_2 = localStorage.address_line_2;
    this.country = JSON.parse(localStorage.getItem("country"))
    this.countries = JSON.parse(localStorage.getItem("countries"))
    
    this.city = localStorage.city;
    this.state = localStorage.state;
    this.latitude = localStorage.latitude; 
    this.longitude = localStorage.longitude;
    this.postal_code = localStorage.postal_code;
    console.log("localStorage.countries");
       console.log(this.country);
        console.log(this.countries);
    } 
    else{ 
      console.log("Server is called");
      this.view();
    }
   
    
    
    

    
 },
methods: { 
  countryvalidate(){ 
this.countryone=''
  },
  line1_validate(){ 
this.line1=''
  },
  line2_validate(){ 
this.line2=''    
  },
  postal_code_validate(){ 
this.postalcodeone=''
  },
  stateone_validate(){ 
 this.stateone=''
  },
  cityone_validate(){ 
    this.cityone=''
  },
view() {
       //this.loading=true;
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .get(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/location", 
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
          
          this.countries=res.data.data.country,
          this.country=res.data.data.address.country,
          this.address_line_1=res.data.data.address.address_line_1,
          this.address_line_2=res.data.data.address.address_line_2,
          this.city=res.data.data.address.city,
          this.state=res.data.data.address.state,
          this.postal_code=res.data.data.address.postal_code,
          this.step=res.data.data.step,
          this.steps=res.data.data.steps;
          this.mysteps=res.data.data.steps.location;
          console.log( "this is curent step//");
          console.log( this.mysteps);
       //   this.loading=false;
          console.log(res.data);
          
              
        });
    },

    add() {
      if(this.address_line_1=='' || this.address_line_1==null){ 
        this.line1="address fild is empty"  
      }
     
      if(this.address_line_2=='' || this.address_line_2==null){ 
        this.line2="address fild is empty"  
      }
      if(this.country=='' || this.country==null){ 
        this.countryone="select your country"  
      }
      if(this.city =='' || this.city==null){ 
        this.cityone="select your city"  
      }
       if(this.state =='' || this.state==null){ 
        this.stateone="select your state"  
      }
      if(this.postal_code =='' || this.postal_code==null){ 
        this.postalcodeone="select your postalcodeone"  
      }
      else{ 
        this.loading = true;
        localStorage.address_line_1 = this.address_line_1;
        localStorage.address_line_2 = this.address_line_2;
        localStorage.setItem("country", JSON.stringify(this.country));
        localStorage.setItem("countries", JSON.stringify(this.countries));
        
        localStorage.city=this.city;
        localStorage.state=this.state;
        localStorage.postal_code=this.postal_code;
        localStorage.latitude=this.latitude;
        localStorage.longitude=this.longitude;
        localStorage.mysteps=this.mysteps;
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .post(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/location",
          
          { 
           latitude:this.latitude,
           longitude:this.longitude,
           country:this.country,
           address_line_1:this.address_line_1,
           address_line_2:this.address_line_2,
           city:this.city,
           state:this.state,
           postal_code:this.postal_code
          },
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
         
          this.loading = false
          this.$router.push(`/amenities${res.data.data.id}`);            
        }).catch((res) => {
          res.data
          this.loading = false         
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
h6{ 
  font-size: 14px;;
}
h5{ 
  font-size: 12px;
  color:red;
}
</style>