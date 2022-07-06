<template>
  <section class="page page-thankyou">
    <div class="shape shape-left"></div>
    <div class="shape shape-right"></div>
    <IndexHeader />
    <div class="container">
      <div class="first" v-if="this.$store.state.result === 1">
        <h2>Your Results Are In!</h2>
        <div class="status">
          <div class="status-left">
            <div class="title">Loan Status</div>
            <span>Pre-Qualified</span>
          </div>
          <div class="status-center">
            <img src="@/assets/img/result-logo.svg">
          </div>
          <div class="status-right">
            <div class="title">Estimated Amount:</div>
            <span>${{ amount }}</span>
          </div>
        </div>
        <div class="text">
          <p>Would You Like That Transferred into Your Account?<br>
          A phone agent will be calling in 1-2 minutes to gather info and process all paperwork for you.<br>
          Make sure to answer this call!</p>
        </div>
        <div class="text-bottom">
          <p>Great you’ve qualified! The process will be quick and easy because you have W2 employees.
          We’ve found it easiest to let one of our phone specialists file directly for you. It shouldn’t take more than 5-10 minutes on the phone.
          Alternatively you can begin qualifying and entering documents here www.goercspecialists.com
          We’ll be asking for the things such as:</p>
          <ul>
            <li>Did you pay any W2 Wages in 2020 or 2021</li>
            <li>Company Name</li>
            <li>When did you start your business</li>
            <li>Did you have lower revenue in 2020 or 2021 compared to 2019?</li>
            <li>Did you experience a supply chain disruption?</li>
            <li>Did you experience a full or partial suspension due to a COVID government order?</li>
            <li>️How many Full-Time W2 employees did you average?</li>
            <li>Full name, phone number, email, job title, company address</li>
          </ul>
          <p>The only things you can gather are:</p>
          <b>Payroll summaries, Quarterly 941 payroll records.</b><br>
          <b>Email and name of individual who handles your payroll</b>
        </div>
      </div>
      <div class="second" v-if="this.$store.state.result === 2">
        <p class="second-title">Thank you,<br>
        our representative will contact you<br>
        shortly by the phone number provided.</p>
        <img src="@/assets/img/result-logo.svg">
      </div>
      <div class="third" v-if="this.$store.state.result === 3">
        <p class="third-title">Thank you,<br>
        unfortunately, you are not qualified for the claim.</p>
        <img src="@/assets/img/result-logo.svg">
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return{
      user: null,
      amount: 0
    }
  },
  mounted(){
    if (!this.$store.getters["result"]) this.$router.push("/");
    if(sessionStorage.user){
      this.user = JSON.parse(sessionStorage.user)
      const quiz = JSON.parse(this.user.quiz)
      this.amount = (Number(quiz[1].answer) * 26000).toFixed(2)
    } else {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.page-thankyou{
  .container{
    text-align: center;
    margin-bottom: 60px;
    h2{
      font-weight: 700;
      font-size: 35px;
      color: #002768;
      line-height: 1.2;
      margin-bottom: 40px;
      @media(min-width:768px){
        font-size: 40px;
      }
    }
    .status{
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 90px;
      @media(max-width:767px){
        margin-bottom: 40px;
        flex-direction: column;
      }
      div{
        &:not(:last-child){
          margin-bottom: 40px;
          @media(min-width:768px){
            margin-bottom: 0;
          }
        }
      }
      .title{
        font-weight: 700;
        font-size: 23px;
        color: #002768;
        line-height: 1.2;
        margin-bottom: 20px;
        @media(min-width:768px){
          margin-bottom: 0;
        }
      }
      span{
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 35px;
        color: #CF2C31;
        @media(min-width:768px){
          font-size: 40px;
        }
      }
    }
    p{
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      line-height: 1.2;
      color: #181818;
    }
    .text{
      p{
        font-size: 18px;
        margin-bottom: 30px;
      }
    }
    button{
      max-width: 585px;
      width: 100%;
      padding: 20px;
      border-radius: 15px;
      background: #FCD53F;
      border: none;
      color: #fff;
      font-weight: 700;
      font-size: 23px;
      line-height: 1.2;
      transition: .5s ease-in-out;
      margin-bottom: 40px;
      &:hover{
        outline: 2px solid #59595A;
      }
    }
    .text-bottom{
      text-align: left;
      p{
        font-size: 16px;
        margin-bottom: 20px;
      }
      ul{
        list-style-type: disc;
        margin-left: 20px;
        color: #002768;
        margin-bottom: 20px;
      }
    }
    .second, .third{
      &-title{
        font-weight: 700;
        font-size: 35px;
        color: #002768;
        line-height: 1.2;
        margin-bottom: 40px;
        @media(min-width:768px){
          font-size: 40px;
          margin-bottom: 60px;
        }
      }
    }
  }
  .shape{
    background: radial-gradient(79.88% 79.88% at 89.02% 20.12%, #EBF3FA 0%, #77A8EF 100%);
    filter: blur(5vw);
    width: 15vw;
    height: 15vw;
    position: absolute;
    z-index: 1;
    &-left{
      right: 0;
      top: 0;
    }
    &-right{
      left: 0;
      bottom: 0;
    }
  }
}
</style>