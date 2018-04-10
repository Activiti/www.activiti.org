---
# This only sets the meta page title, as the visible one is set in the HTML 
# below, as it has a <br> tag in it.
title: Open Source Business Automation

latest_news: Try the new Activiti 7 Early Access (EA) release
latest_news_link: https://community.alfresco.com/community/bpm/blog/2018/03/21/activiti-activiti-cloud-7-201802-ea-are-out
redirect_from:
  - about
  - content/activiti-home
  - faq
---
<div class="bg-no-repeat bg-full-width bg-bottom bg-image-clouds-full md:bg-image-clouds">
  <div class="text-center md:text-left wrap max-w-lg pt-8 pb-16 md:pt-16 clearfix">
    <div class="md:w-1/2 md:float-left">
      <h1 class="text-green">Open Source <br>Business Automation</h1>
      <p class="text-lg leading-tight mt-0">Helping businesses solve automation challenges in distributed, highly-scalable and cost effective infrastructures.</p>
      <a href='#get-started' class="mt-4 btn btn--large">Learn More</a>
    </div>
    <div class="hidden md:block md:float-right">
      {% include svg/activiti-mark.svg %}
    </div>
  </div>
</div>

<p class="mt-0"><a href="{{ page.latest_news_link }}" class="block bg-green hover:bg-green-light border-t border-white md:border-0 px-3 py-4 text-center text-white hover:text-white transition-slow text-lg"><strong>Latest News: </strong>{{ page.latest_news }}</a></p>


<div class="wrap max-w-lg md:py-4 text-center" markdown='1'>
----

<p class="text-lg"><a class="text-2xl font-normal" href="https://activiti.gitbooks.io/activiti-7-developers-guide/content/introduction.html">Activiti</a> is the leading lightweight, java-centric open-source BPMN engine supporting real-world process automation needs. Activiti Cloud is now the new generation of business automation platform offering a set of cloud native building blocks designed to run on distributed infrastructures and help application teams be more efficient.</p>


----
</div>


<div class="bg-grey-light">
  <div class="wrap pt-2 pb-8 md:py-8 xl:py-16 md:px-0 text-center">
  <h3 class="section-heading border-grey-dark text-green">Cloud Native Building Blocks</h3>
    <div class="md:flex md:flex-wrap md:justify-center">
      <div class="max-w-xs mx-auto my-4 md:mx-0 md:px-6">
        <div class="inline-block">{% include svg/process-runtime.svg %}</div>
        <h5>Runtime Bundle</h5>
        <p>Inmutable, scalable & pain free Process & Decision Runtimes designed to integrate with your cloud native infrastructure.</p>
      </div>
      <div class="max-w-xs mx-auto my-4 md:mx-0 md:px-6">
        <div class="inline-block">{% include svg/decision-runtime.svg %}</div>
        <h5>Audit Service</h5>
        <p>Scalable, storage independent and extensible audit service.</p>
      </div>
      <div class="max-w-xs mx-auto my-4 md:mx-0 md:px-6">
        <div class="inline-block">{% include svg/form-runtime.svg %}</div>
        <h5>Query Service</h5>
        <p>Scalable, storage independent and extensible query service.</p>
      </div>
      <div class="max-w-xs mx-auto my-4 md:mx-0 md:px-6">
        <div class="inline-block">{% include svg/cloud-infra.svg %}</div>
        <h5>Cloud Connectors</h5>
        <p>Simplified system to system interactions that can scale in distributed environments.</p>
      </div>
      <div class="max-w-xs mx-auto my-4 md:mx-0 md:px-6">
        <div class="inline-block">{% include svg/case-management.svg %}</div>
        <h5>Application Service</h5>
        <p>Distributed & Scalable application aggregation layer.</p>
        </div>
       <div class="max-w-xs mx-auto my-4 md:mx-0 md:px-6">
        <div class="inline-block">{% include svg/form-runtime.svg %}</div>
        <h5>Notification Service</h5>
        <p>Cloud ready secure WebSocket and subscription handling as part of GraphQL integration.</p>
      </div>
    </div>
    <div class="wrap pt-4 pb-4">
        <div class="md:flex md:flex-wrap md:justify-center md:items-center">
        <img src="assets/images/spring.png">    
        <p class="section-heading border-none my-4 md:mx-0 md:px-6">+</p>
        <img src="assets/images/docker.png">
        <p class="section-heading border-none my-4 md:mx-0 md:px-6">+</p>
        <img src="assets/images/kubernetes.png">
    </div>
   </div> 
 </div>
</div>
     
  

<div class="wrap pt-8 md:pb-4 lg:py-16">
  <h3 class="section-heading">Activiti Community</h3>
  <div class="flex flex-wrap justify-center lg:flex-no-wrap -mx-3">
    <div class="max-w-sm mt-4 md:mt-8 mb-8 mx-3 lg:mx-8 lg:w-1/2">
      {% include left_video_embed.html %}
      <h4 class="section-sub-heading">Activiti Cloud BluePrint Demo</h4>
      <p>A demo of the Twitter trending topics compaigns, using the Activiti Cloud BluePrint.</p>
    </div>
    <div class="max-w-sm mt-4 md:mt-8 mb-8 mx-3 lg:mx-8 lg:w-1/2">
      {% include right_video_embed.html %}
      <h4 class="section-sub-heading">Activiti Cloud Overview &amp; BluePrint</h4>
      <p>While we are working hard in getting our first Beta Release at the end of March (beginning of April) we wanted to share a couple of introductory videos about our work so far.</p>
    </div>
  </div>
</div>



<div id='get-started' class="py-8 md:py-16 xl:py-24 text-center bg-grey-light">
  <div class="wrap">
    <h3 class="section-heading text-green border-grey-dark">Get started with Activiti</h3> 
    <div class="wrap max-w-lg md:py-4 text-center">
       <p class="text-lg">Following our Quickstart guide, you will be able to deploy in 3 steps your first Activiti Cloud application composed of a cloud infrastructure, a runtime bundle, an audit and a query service all running as microservices on the Docker platform.</p>  
    </div> 
      <a href="{% link before-you-start.html %}" data-modal="#before-you-start" class="btn btn--large px-8">Get Started Now</a>
  </div>
</div>


