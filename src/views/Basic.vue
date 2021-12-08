<template>
 
<form @submit.prevent="add()">

  <div class="row mt-5" >
	<div class="col-md-1">
		
	</div>
	<div class="col-md-3 ">
		<div class="row">
			<div class="col-md-3">
				
			</div>
			<div class="col-md-9">
  <div class="d-flex flex-column mb-3 justify-content-center text-center">
  
  <div class="ab p-2 mt-1 divborder">Basic</div>
  
  <span v-if="steps.description==1"><div class="p-2 mt-1 divborder"><router-link :to="{ path: '/description'+this.$route.params.id }" style="text-decoration:none;">Description</router-link></div></span>
  <span v-else><div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/description'+this.$route.params.id }" style="text-decoration:none;">Description</router-link></div></span> 
  <span v-if="steps.location==1"><div class="p-2 mt-1 divborder"><router-link :to="{ path: '/location'+this.$route.params.id }" style="text-decoration:none;">Location</router-link></div></span>
  <span v-else><div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/location'+this.$route.params.id }" style="text-decoration:none;">Location</router-link></div></span>
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

	<div class="" style="height:189px;">
  <div class="row">
		<div class="roomsandbeds d-flex align-items-start backgrnd"><h4>Rooms and Beds</h4></div>
		<div class="col-md-6">    
    
   <label for="inputState11" class="form-label">Bedrooms</label>
    <select id="inputState11" class="form-select" v-model="totalbedrooms" required>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="4">5</option>
      <option value="5">6</option>
      <option value="6">7</option>  
      <option value="7">8</option>
      <option value="8">9</option>    
      <option value="9">10</option>
      <option value="10">11</option>  
      <option value="12">12</option>  
      <option value="12">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16+</option>
      
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">Bed</label>
    <select id="inputState" class="form-select" v-model="totalbed" required>
      
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>  
      
    </select>
  </div>
	</div>
	<div class="row">
		<div class="col-md-6">
    
      
   <label for="inputState" class="form-label">Bathrooms</label>
    <select id="inputState"  class="form-select" v-model="bathroomss" required >
      <option value="0.50">0.5</option>
      <option value="1.00">1</option>
      <option value="1.50">1.5</option>
      <option value="2.00">2</option>
      <option value="2.50">2.5</option>
      <option value="3.00">3</option>
      <option value="3.50">3.5</option>
      <option value="4.00">4</option>
      <option value="4.50">4.5</option>
      <option value="5.00">5</option>
  
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">Bed Type</label>
    <select id="inputState" class="form-select" v-model="bed_type" required>
      <option  selected v-for="(bedtype,index) in bedtypes" 
      :key="bedtype.id" :value="index" >{{bedtype}}</option>          
    </select>
  </div>
	</div>
  </div>

<!-- This is second row -->
<div class="" style="200">
<div class="row mt-5">
		<div class=" Listings d-flex align-items-start backgrnd"><h4>Listings</h4></div>
		<div class="col-md-6">
    <label for="inputState" class="form-label">Property Type</label>
    <select class="form-select p-1"  v-model="property_type" required>
    <option  v-for="(propertyviewlist,index) in propertyviewlists" 
      :key="propertyviewlist.id" :value="index" :selected="property_type==propertyviews.property_type_name">{{propertyviewlist}}</option> 
    </select>
    </div>
    <div class="col-md-6">
    <label for="inputState" class="form-label">Room Type</label>
    <select id="inputState" class="form-select" v-model="space_type" required>
      <option  v-for="(room,index) in rooms" 
      :key="room.id" :value="index" >{{room}}</option>
      
    </select>
  </div>
	</div>
	<div class="row">
		<div class="col-md-6">
   <label for="inputState" class="form-label">Accommodates</label>
  
    <select id="inputState" class="form-select" v-model="accommodates" required>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
       
      
    </select>
  </div>
  
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
      totalbed:"",
      totalbathroom:"",
      totalbedrooms:"",
      propertyviews:"",
      accommodates:"",
      propertyviewlists:"",
      bathroomss:"",
      bedtype:"",
      rooms:"",
      beds:"",
    
      property_type:"",
      space_type:"",
      bed_type:"",
      step:'',
      steps:'',
      bedtypes:'',
      loading: false,
    };
  },
  mounted(){ 
    if(localStorage.getItem("totalbedrooms")&&localStorage.getItem("totalbed")
    &&localStorage.getItem("bathroomss")&&localStorage.getItem("bed_type")
    &&localStorage.getItem("bedtypes")&&localStorage.getItem("property_type")
    &&localStorage.getItem("propertyviewlists")
    &&localStorage.getItem("space_type")&&localStorage.getItem("rooms")
    &&localStorage.getItem("accommodates")){ 
      console.log("succesfully show from localstorage")
    this.totalbedrooms = JSON.parse(localStorage.getItem("totalbedrooms"))
    this.totalbed = JSON.parse(localStorage.getItem("totalbed"))
    this.bathroomss = JSON.parse(localStorage.getItem("bathroomss"))
    this.bed_type = JSON.parse(localStorage.getItem("bed_type"))
    this.bedtypes = JSON.parse(localStorage.getItem("bedtypes"))
    this.property_type = JSON.parse(localStorage.getItem("property_type"))
    this.propertyviewlists = JSON.parse(localStorage.getItem("propertyviewlists"))
    this.space_type = JSON.parse(localStorage.getItem("space_type"))
    this.rooms = JSON.parse(localStorage.getItem("rooms"))
    this.accommodates = JSON.parse(localStorage.getItem("accommodates"))
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
            "/basics",
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
          console.log('server is running');
          this.propertyviews = res.data.data.property;
          this.propertyviewlists = res.data.data.property_type;
          this.rooms = res.data.data.space_type;
          this.bedtypes = res.data.data.bed_type;
         // this.accommodates = res.data.data.accommodates;
          if(res.data.data.property.bedrooms==null){    
           this.totalbedrooms=1     
          }else{
           this.totalbedrooms = res.data.data.property.bedrooms;
          }
         // this.bed_type = res.data.data.property.bed_type;
          if(res.data.data.property.bed_type==null){ 
               this.bed_type=1    
          }else { 
             this.bed_type=res.data.data.property.bed_type
          } 
         
           if(res.data.data.property.beds==null){ 
             this.totalbed=1
           }else { 
           this.totalbed = res.data.data.property.beds;
           }

           if(res.data.data.property.bathrooms==null){ 
             this.bathroomss="1.00"  
           
          }else{
           this.bathroomss = res.data.data.property.bathrooms;
          }
          this.property_type= res.data.data.property.property_type,
          this.space_type=res.data.data.property.space_type,
          this.accommodates=res.data.data.property.accommodates,
         
          this.step=res.data.data.step
          this.steps=res.data.data.steps;
         
        });
    },
    add() {
        this.loading = true;

        localStorage.setItem("totalbedrooms", JSON.stringify(this.totalbedrooms));
        localStorage.setItem("totalbed", JSON.stringify(this.totalbed));
        localStorage.setItem("bathroomss", JSON.stringify(this.bathroomss));
        localStorage.setItem("bed_type", JSON.stringify(this.bed_type));
        localStorage.setItem("bedtypes", JSON.stringify(this.bedtypes));
        localStorage.setItem("property_type", JSON.stringify(this.property_type));
        localStorage.setItem("propertyviewlists", JSON.stringify(this.propertyviewlists));
        localStorage.setItem("space_type", JSON.stringify(this.space_type));
        localStorage.setItem("rooms", JSON.stringify(this.rooms));
        localStorage.setItem("accommodates", JSON.stringify(this.accommodates));
        console.log("succesfully added into localstorage")
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .post(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/basics",
          
          { 
            
        property_type:this.property_type,
        space_type:this.space_type,
        accommodates:this.accommodates,
        bed_type:this.bed_type,
        bathrooms:this.bathroomss,
        beds:this.totalbed,
        bedrooms:this.totalbedrooms
          },
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
            this.loading=false;
            this.$router.push(`/description${res.data.data.id}`);
          
         // this.$router.push('/description');
 
        }).catch((res) => {
          res.data
          this.loading = false         
        });
    },
 
  }
}
</script>

<style scoped>
.colh{
    flex: 0 0 auto;
    width: 50%;
    height: 500px;
    background: white;
}
.heights{ 
  height: 510px;
}
.divborder{ 
border:1px solid black;
}
.stl{ 
border:1px solid black;
}
.bgg{
font-size: 42px;
color:red;
}
.roomsandbeds{ 
background-color:red
}
.backgrnd{ 
background-color: #EEEEEE;
padding: 5px;
padding-left: 14px;
}
.ab{
background-color:#74992e;
}
.bgcolor{
background-color: #DFDBD2;
border: 1px solid gray;
}
.bgcolor a{
color:#353935;
}
.bgcolor a:hover{ 
text-decoration: none;
color: white;
}
.bgcolor:hover{
background-color: #6C757D;
color: white;
font-size: 18px;
font-weight:bold
}
.roomsandbeds:hover{ 
background-color: #6C757D;
color:white;
}
.Listings:hover{
background-color:#6C757D;
color: white;
}
.bgbasic{
background-color: rgb(199, 183, 183);
}
</style>