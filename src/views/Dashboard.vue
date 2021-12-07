<template>
   <div class="container">
  <div class="row mt-5">
  </div>

    <div class="row mt-5">
    <div class="col-12 col-md-4 col-xs-12 mt-2" >
   
     <div class="col-12 col-md-12 col-xs-12 mt-2 p-3" style="box-shadow: 0px 0px 10px 0px gray;">
   <p class="text-center font-weight-bold m-0">
   <i class="fa fa-list-alt mr-2 text-16 align-middle badge-dark rounded-circle p-3 vbadge-success" 
   style="background: rgba(0, 128, 0, 0.68); color: white;"></i> My Lists</p>
    <p class="text-center font-weight-bold m-0" style="font-weight: 700!important;">{{show.list}}</p>
    
    </div>
  
      </div>
    <div class="col-12 col-md-4 col-xs-12 mt-2" >
   
     <div class="col-12 col-md-12 col-xs-12 mt-2 p-3" style="box-shadow: 0px 0px 10px 0px gray;">
   <p class="text-center font-weight-bold m-0">
   <i class="fa fa-list-alt mr-2 text-16 align-middle badge-dark rounded-circle p-3 vbadge-success" 
   style="background: rgba(0, 128, 0, 0.68); color: white;"></i> My Trip</p>
    <p class="text-center font-weight-bold m-0" style="font-weight: 700!important;">{{show.trip}}</p>
    
    </div>
  
      </div>
    <div class="col-12 col-md-4 col-xs-12 mt-2" >
   
     <div class="col-12 col-md-12 col-xs-12 mt-2 p-3" style="box-shadow: 0px 0px 10px 0px gray;">
  <p class="text-center font-weight-bold m-0"><i class="fa fa-money mr-2 text-16 align-middle badge-dark rounded-circle p-3 badge-success" style="background: rgba(0, 128, 0, 0.68);
    color: white;
    color: white;"></i> My Wallet</p>
    <p class="text-center font-weight-bold m-0" style="font-weight: 700!important;">{{show.wallet.balance}}</p>
    
    </div>
  
      </div>
   
    
    
    </div>


    <div class="row mt-5">
    <div class="col-md-4" style="box-shadow: 0px 0px 2px 0px gray;">
    <div class=" row bg p-2 flex-row"><h5><i class="fa fa-bookmark p-2"></i>Latest Bookings</h5> </div>
      <div class="d-flex flex-row">
      <div class="mt-2"><img class="profile-img-card " src="https://i.imgur.com/iNFaRXx.jpg" /></div>
      <div class="d-flex flex-column">
      <div class="mt-2"><h5 style="padding-left:10px;padding-right:5px;">Techvillage</h5></div>
      <div><i class="fa fa-calendar" style="padding-left:10px;padding-right:5px;"></i>Dec01-01,2021</div>
      <div style="padding-left:10px;padding-right:5px;">
      <div>Test User</div>
      </div>
      </div>
      <div class="d-flex text-success" style="margin-left:40px; margin-top:65px;font-weight:bold;">
      <span>Accepted</span>
      </div>
      </div>
    <div class="row" style="border-bottom: 2px solid gray;">
    <!-- <span class="border-bottom-0 border border-dark"></span> -->
    </div>
     <div class="d-flex flex-row">
      <div class="mt-2"><img class="profile-img-card" src="https://i.imgur.com/iNFaRXx.jpg" /></div>
      <div class="d-flex flex-column">
      <div class="mt-2"><h5 style="padding-left:10px;padding-right:5px;">Techvillage</h5></div>
      <div><i class="fa fa-calendar" style="padding-left:10px;padding-right:5px;"></i>Dec01-01,2021</div>
      <div style="padding-left:10px;padding-right:5px;">
      <div>Test User</div>
      </div>
      </div>
      <div class="d-flex text-success" style="margin-left:40px; margin-top:65px;font-weight:bold;">
      <span>Accepted</span>
      </div>
      </div>
    </div>
    <div class="col-12 col-md-1">
    </div>
    <div class="col-12 col-md-6 ml-5" style="box-shadow: 0px 0px 2px 0px gray;">
     <div class=" row bg p-2 flex-row"><h5><i class="fa fa-exchange p-2 mr-2 text-16 
     align-middle badge-dark rounded-circle badge-success" ></i>Latest Bookings</h5> </div>
     <div>
     <table class="table">
  <thead>
    <tr>
      <th scope="col">Type</th>
      <th scope="col">Payment method</th>
      <th scope="col">Amount</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Booking</th>
      <td>Stripe</td>
      <td>$120</td>
      <td>@12-02-2020</td>
    </tr>
   <tr>
      <th scope="row">Booking</th>
      <td>Stripe</td>
      <td>$120</td>
      <td>@12-02-2020</td>
    </tr>
    <tr>
      <th scope="row">Booking</th>
      <td>Stripe</td>
      <td>$120</td>
      <td>@12-02-2020</td>
    </tr>
  </tbody>
</table>
     </div>
    </div>

    
    </div>
    

  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'user',
  data() {
    return {
      content: '',
      show:"",
    };
  },
  mounted() {
    
      this.view();
   
  },
  methods:{
      view(){
          let user = JSON.parse(localStorage.getItem('user'));
          axios.get('https://vrent.techvill.org/vrentapi/api/dashboard',{
                headers: { Authorization: 'Bearer ' + user.token
                  }
          }
          ).then(res=>{
            this.show=res.data.data 
          })
      }
      
  },
};
</script>
<style scoped>
.bg{ 
background-color: rgb(209, 206, 206);
}
.stl{ 
background: rgba(0, 128, 0, 0.68); 
color: white;
}
.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>