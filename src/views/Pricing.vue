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
 <span v-if="steps.basics==1">  <div class="p-2 mt-1 divborder" > <router-link :to="{ path: '/basic'+this.$route.params.id }" style="text-decoration:none;">Basic</router-link>
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
  
  <div class="ab p-2 mt-1 divborder">Pricing</div>
  
  <span v-if="steps.booking==1"> <div class="p-2 mt-1 divborder" ><router-link :to="{ path: '/booking'+this.$route.params.id }" style="text-decoration:none;">Booking</router-link></div> </span>
  <span v-else> <div class=" p-2 mt-1 divborder"><router-link :to="{ path: '/booking'+this.$route.params.id }" style="text-decoration:none;">Booking</router-link></div> </span>
 
</div>
</div>
</div>
	
</div>

<div class="col-md-6 border pb-3 pl-2 colh">
  <div class="border d-flex flex-row row">
    <div class="backgrnd d-flex align-items-start">
      <h4>Base price</h4>
    </div>
   <div class="row" style="height:150px;">
    <div class="col-md-6">
   <label class="mt-1">Nightly pricing</label>
  <div class="input-group">
  <span class="input-group-text" id="basic-addon1">$</span>
  <input type="number" @keyup.prevent="price_validate()" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" v-model="price">
 </div>
 <p class="text-danger">{{error}}</p>
    </div>
    <div class="col-md-6">
    <label for="inputState" class="form-label">currency_code</label>
    <select id="inputState" class="form-select"  v-model="currency_code" required>
       <option value="USD">USD</option>
       <option value="GBR">GBR</option>
       <option value="EUR">EUR</option>
       <option value="AUD">AUD</option>
       <option value="SGD">SGD</option>
       <option value="SEK">SEK</option>
       <option value="DKK">DKK</option>
       <option value="MXN">MXN</option>
    </select>
    </div>
   </div>

  </div>
 
  <div class="border d-flex flex-row row" style="height:209px;">
    <div class="backgrnd d-flex align-items-start">
      <h4>Additional Pricing Options</h4>
    </div>
   <div class="col-md-6">
  <label>Cleaning fee</label>
  <div class="input-group">
  <span class="input-group-text" id="basic-addon1">$</span>
  <input type="number" @keyup.prevent="cleaning_fee_validate()" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" v-model="cleaning_fee">
 </div>
<p class="text-danger">{{errorclfee}}</p>

  <label>Security deposit</label>
  <div class="input-group">
  <span class="input-group-text" id="basic-addon1">$</span>
  <input type="number" @keyup.prevent="security_fee_validate()" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" v-model="security_fee">
 </div>  
<div class="">
<p class="text-danger">{{securitydeposit}}</p>
</div>
 </div>
    <div class="col-md-6">
    <label>Additional Guest</label>       
  <div class="input-group">
  <span class="input-group-text" id="basic-addon1">$</span>
  <input type="number" @keyup.prevent="guest_fee_validate()" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" v-model="guest_fee">
 </div>
 <p class="text-danger">{{erroradguestfee}}</p>

 <label>Weekend pricing</label>
  <div class="input-group">
  <span class="input-group-text" id="basic-addon1">$</span>
  <input type="number" @keyup.prevent="weekend_price_validate()" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" v-model="weekend_price">
 </div>
 <p class="text-danger">{{wkndprice}}</p>
 </div>

  </div>
  <div class="d-flex justify-content-between mt-3" style="height:60px;">
  <div>
    <router-link :to="{ path: '/photo'+this.$route.params.id }" class="btn btn-primary mt-4">Back</router-link>
  </div>

  <div>
   <button type="submit" class="btn btn-primary mt-4" :disabled="loading">
<span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Next</button>
  </div>


  </div>
</div>

<div class="col-md-2">
<div class="">
	
</div>
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
      weekend_price:'',
      guest_fee:'',
      security_fee:'',
      cleaning_fee:'',
      currency_code:'',
      price:'',
      step:'',
      steps:'',
      loading:false,
      error:'',
      errorclfee:'',
      erroradguestfee:'',
      securitydeposit:'',
      wkndprice:'',

    };
  },
  mounted(){ 
    this.view();
    
  },
methods: { 
  weekend_price_validate(){ 
  this.wkndprice=''
  },
  guest_fee_validate(){ 
  this.erroradguestfee=''
  },
  security_fee_validate(){ 
  this.securitydeposit=''
  },
  price_validate(){ 
  this.error=''
  },
   cleaning_fee_validate(){ 
   this.errorclfee=''
   },
view() {
      
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .get(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/pricing",
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
            this.step=res.data.data.step;
            this.steps=res.data.data.steps;
            this.price=res.data.data.pricing.price;
            this.currency_code=res.data.data.pricing.currency_code;
            this.cleaning_fee=res.data.data.pricing.cleaning_fee;
            this.guest_fee=res.data.data.pricing.guest_fee;
            this.weekend_price=res.data.data.pricing.weekend_price;
            this.security_fee=res.data.data.pricing.security_fee;
          
            
        });
    },
    add() {
        if(this.price=='' ||this.price<5){ 
          this.error="fill up at least 5 dollars"
        }
         if(this.cleaning_fee==''||this.cleaning_fee<5){ 
          this.errorclfee="fill up at least 5 dollars"
        }
        if(this.guest_fee=='' ||this.guest_fee<5) { 
           this.erroradguestfee="fill up at least 5 dollars"
        }
        if(this.security_fee=='' ||this.security_fee<5) { 
          this.securitydeposit="fill up at least 5 dollars"
        }
        if(this.weekend_price=='' ||this.weekend_price<5) { 
          this.wkndprice="fill up at least 5 dollars"
        }
        else { 
      this.loading=true;
           
      let user = JSON.parse(localStorage.getItem("user"));
      axios
        .post(
          "https://vrent.techvill.org/vrentapi/api/listing/" +
            this.$route.params.id +
            "/pricing",
          
          { 

        price:this.price,
        currency_code:this.currency_code,
        cleaning_fee:this.cleaning_fee,
        guest_fee:this.guest_fee,
        security_fee:this.security_fee,
        weekend_price:this.weekend_price
         
         },
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        )
        .then((res) => {
            
        this.$router.push(`/booking${res.data.data.id}`); 
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
</style>