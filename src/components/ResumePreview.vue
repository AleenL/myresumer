<template>
  <div id=resumePreview>
    <div class='slide_left_content'>
      <div class='layout_inside'>
        <div class='self_content' data-name="profile" v-if="resume.profile && resume.profile.name">
          <div class='auther'>{{resume.profile.name}}</div>
          <div class='job_list'>
            <p>{{resume.profile.title}}</p>
            <p>{{resume.profile.english}}</p>
          </div>
          <div class='about_me'>
            <ul class='layout_inside' >
              <li v-if="resume.profile.title"><span>意向职位：</span>{{resume.profile.title}}</li>
              <li v-if="resume.profile.money"><span>期望薪资：</span>{{resume.profile.money}}</li>
              <li v-if="resume.profile.workhistory"><span>工作经验：</span>{{resume.profile.workhistory}}</li>
              <li v-if="resume.profile.city"><span>居住地址：</span>{{resume.profile.city}}</li>
              <li v-if="resume.profile.wantcity"><span>求职城市：</span>{{resume.profile.wantcity}}</li>
              <li v-if="resume.profile.birthday"><span>生日：</span>{{resume.profile.birthday}}</li>
              <li v-if="resume.education && resume.education.length > 0" v-for="item in resume.education"><span>毕业院校：</span>{{item.school}}</li>
              <li v-if="resume.education && resume.education.length > 0" v-for="item in resume.education"><span>学历：</span >{{item.details}}</li>
              <li  v-for="item in resume.contacts" ><span>{{item.contact}}：</span>{{item.details}}</li>
            </ul>
          </div>
          <div class='technical' data-name="awards" v-if="resume.awards && resume.awards.length > 0" >
              <div v-for="item in resume.awards">
                <h2 >{{item.name}}</h2>
                <div class='progress'>
                  <div class='progress_bar active' :id="item.details">
                    <div class='progress_value' v-show="item.details">{{item.details}}</div >
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='slide_right_content'>
      <div class='layout_inside'>
        <div class='my_technical' data-name="workHistory" v-if="resume.workHistory && resume.workHistory.length > 0">
          <h3 class='title'>工作经历</h3>
            <ul>
              <li v-for="item in resume.workHistory">
                <h3>{{item.company}}</h3>
               <p v-show="item.details"> {{item.details}} </p>
              </li>
            </ul> 
        </div>
        <div  class='my_projects' data-name="projects" v-if="resume.projects && resume.projects.length > 0">
          <h3 class='title'>项目经历</h3>
          <ul>
            <li v-for="item in resume.projects">
              <img src="http://upload-images.jianshu.io/upload_images/3257837-4f08826149215bbd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="">
              <div class='project_message'>
                <h3><a :href="item.link">{{item.name}}</a></h3>
                <p v-show="item.details"> {{item.details}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class='preview'>
      <button class='button' @click='save'>保存</button>
      <router-link class='button' to='/preview'>预览</router-link>
    </div>
      
  </div>
  <!--<div id="resumePreview">
	<button class='button' @click='save'>保存</button>
	<router-link class='button' to='/preview'>预览</router-link>
    <section data-name="profile" v-if="resume.profile && resume.profile.name">
      <h1>
        {{resume.profile.name}}
      </h1>
      <h2>{{resume.profile.title}}</h2>
      <p>
        <small>{{resume.profile.city}}</small>
        <small>{{resume.profile.birthday}}</small>
      </p>
    </section>
    <section data-name="projects" v-if="resume.projects && resume.projects.length > 0">
      <h2>项目经历</h2>
      <ol>
        <li v-for="item in resume.projects">
          <h3>{{item.name}}</h3>
          <p v-show="item.details"> {{item.details}} </p>
        </li>
      </ol>
    </section>

    <section data-name="workHistory" v-if="resume.workHistory && resume.workHistory.length > 0">
      <h2>工作经历</h2>
      <ol>
        <li v-for="item in resume.workHistory">
          <h3>{{item.company}}</h3>
          <p v-show="item.details"> {{item.details}} </p>
        </li>
      </ol>
    </section>

    <section data-name="education" v-if="resume.education && resume.education.length > 0">
      <h2>毕业院校</h2>
      <ol>
        <li v-for="item in resume.education">
          <h3>{{item.school}}
            <span v-show="item.details"> - {{item.details}} </span>
          </h3>
        </li>
      </ol>
    </section>

    <section data-name="awards" v-if="resume.awards && resume.awards.length > 0">
      <h2>获奖情况</h2>
      <ol>
        <li v-for="item in resume.awards">
          <h3>{{item.name}}</h3>
          <p v-show="item.details"> {{item.details}} </p>
        </li>
      </ol>
    </section>

    <section data-name="contacts" v-if="resume.contacts && resume.contacts.length > 0">
      <h2>联系方式</h2>
      <table>
        <tr v-for="item in resume.contacts">
          <td>{{item.contact}}</td>
          <td v-show="item.details"> {{item.details}} </td>
        </tr>
      </table>
    </section>
  </div>-->
</template>

<script>
  export default {
    name: 'ResumePreview',
    computed: {
      resume() {
        return this.$store.state.resume
      }
    },
    methods:{
    	save(){
    		this.$store.dispatch('saveResume')
    	}
    }
  }
</script>
 
<style lang="scss">

  #resumePreview{ background:white; box-shadow:0 1px 3px 0 rgba(0,0,0,0.25); padding: 2em;
    color: #333; line-height: 1.2; overflow: auto;}
  #resumePreview::after{
    content: "";
    display: block;
    clear: both;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  .slide_left_content{
      width: 38.196%;
      height: 1000px;
      float: left;
      background: #223;
    }
    .slide_right_content{
      width: 61.804%;
      height: 1000px;
      float: left;
      background: rgba(233,233,233,.7);
    }
    .layout_inside{
      width: 85%;
      margin: 0 auto;
    }
    .slide_left_content .layout_inside .self_content>div{
      text-align: center;
      width: 100%;
      color: white;
      border-bottom: 2px solid white;
    }
    .slide_left_content .layout_inside .self_content .auther{
      margin-top: 20px;
      height: 50px;
      font-size: 24px;
      line-height: 50px
    }
    .slide_left_content .layout_inside .job_list{
      margin-top: 20px;
      line-height: 1.3em;
      font-size: 18px;
    }
    .slide_left_content .layout_inside .job_list p:nth-child(2){
      font-size: 14px;
      margin-bottom: 16px;
    }
    .slide_left_content .layout_inside .about_me>ul{
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .slide_left_content .layout_inside .about_me>ul>li{
      list-style: none;
      text-align: left;
      width: 100%;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
    }
    .slide_left_content .layout_inside .about_me ul li span {
      text-align: right;
      display: inline-block;
      width: 70px;
    }
    .slide_left_content .layout_inside .technical h2{
      width: 40%;
      height: 49px;
      line-height: 49px;
      font-size: 14px;
      float: left;
    }
    .slide_left_content .layout_inside .technical>div{
      height: 49px;
    }
    .slide_left_content .layout_inside .technical:after{
      content: '';
      display: block;
      clear: both;
    }
    .slide_left_content .layout_inside .technical .progress{
        float: left;
      width: 60%;
        height: 10px;
        background: #262626;
        padding: 0px;
        margin-bottom: 15px;
        overflow: visible;
        border-radius: 5px;
        border-bottom: 1px solid #7992a8;
        margin-top: 20px;
      }
      .slide_left_content .layout_inside .technical .progress .progress_bar{
        border-radius: 5px;
        height: 10px;
        position: relative;
        animation: animate-positive 2s;
        background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
        background-size: 20px 20px;
        transition: width .6s ease;

      }
      .slide_left_content .layout_inside .technical .progress .progress_value{
        display: block;
        padding: 3px 7px;
        font-size: 10px;
        color: #fff;
        border-radius: 4px;
        background: #191919;
        border: 1px solid #000;
        position: absolute;
        top: -30px;
        right: -10px;
      }
      .slide_left_content .layout_inside .technical .progress .progress_value:after{
        content: " ";
        border-top: 10px solid #191919;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        position: absolute;
        bottom: -6px;
        left: 26%;
      }
      .slide_left_content .layout_inside .technical .progress_bar.active{
        background-color: #5bc0de;
        animation: reverse progress_bar 0.40s linear infinite, animate-positive 2s;
      }
      @-webkit-keyframes animate-positive{
        0% { width: 0; }
      }
      @keyframes animate-positive{
        0% { width: 0; }
      }
      @keyframes progress_bar{
        0%{
          background-position: 20px 0;
        }
        100%{
          background-position: 0 0;
        }
      }
       .slide_right_content .title{
      margin:20px 0 10px 0;
      border-radius: 5px;
      background: #222;
      color: white;
      padding: 5px 20px;
      }
      .slide_right_content .my_technical ul li h3{
        line-height: 1.5em;
        text-align: right;
        width: 100%;
        border-bottom: 2px dashed black;
      }
      .slide_right_content .my_technical ul li p{
        margin-top: 20px;
      }
       .slide_right_content .my_technical ul li{
        line-height: 1.5em;
      }
      .slide_right_content .my_projects ul li{
        width: 100%;
        height: 120px;
        margin-bottom: 10px;
      }
      .slide_right_content .my_projects ul li .project_message{
        padding-left: 145px;
        line-height: 1.3em;
      }
      .slide_right_content .my_projects ul li a{
        display: inline-block;
        border-bottom: 2px solid #222;
        color: #222;

      }
      .slide_right_content .my_projects ul li img{
        width: 130px;
        float: left;
      }
      .use_style{
        padding: 0px 6px;
        margin-left: 4px;
        display: inline-block;
        border-radius: 5px;
        color: #fff;
      }
      #熟悉{
        width: 70%;
      }
      #精通{
        width: 90%;
      }
      #一般{
        width: 60%;
      }
      #了解{
        width: 40%;
      }
      #resumePreview .preview {
        height: 50px;
        width: 50%;
        margin: 0 auto;
      }
      #resumePreview .preview .button{
        width: 160px;
        height: 50px;
        border-radius: 5px;
        background: #1abc9c;
      }
</style>