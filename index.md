---
# This only sets the meta page title, as the visible one is set in the HTML 
# below, as it has a <br> tag in it.
title: Open Source Business Automation

latest_news: Activiti Core & Activiti Cloud Beta3 released!
latest_news_link: https://community.alfresco.com/community/bpm/blog/2018/11/13/activiti-core-activiti-cloud-beta3-are-out
redirect_from:
  - about
  - content/activiti-home
  - faq
---
<div class="bg-no-repeat bg-full-width bg-bottom bg-image-clouds-full md:bg-image-clouds">
  <div class="text-center md:text-left wrap max-w-lg pt-8 pb-16 md:pt-16 clearfix">
    <div class="md:w-1/2 md:float-left">
      <h1 class="text-green">Open Source <br>Business Automation</h1>
      <p class="text-lg leading-tight mt-0">Helping businesses solve automation
        challenges in distributed, highly-scalable and cost effective
        infrastructures.</p>
      <a href='#get-started' class="mt-4 btn btn--large">Learn More</a>
    </div>
    <div class="hidden md:block md:float-right">
      {% include svg/activiti-mark.svg %}
    </div>
  </div>
</div>

<p class="mt-0"><a href="{{ page.latest_news_link }}" class="block bg-green hover:bg-green-light border-t border-white md:border-0 px-3 py-4 text-center text-white hover:text-white transition-slow text-lg"><strong>Latest News: </strong>{{ page.latest_news }}</a></p>

<div class="bg-grey-light">
  <div class="hr-text-row">
    <p><a class="text-lg underline font-normal" href="https://github.com/Activiti/Activiti">Activiti</a> is the leading lightweight, java-centric open-source BPMN engine supporting real-world process automation needs. <a class="text-lg underline font-normal" href="https://activiti.gitbooks.io/activiti-7-developers-guide/content/introduction.html">Activiti Cloud</a> is now the new generation of business automation platform offering a set of cloud native building blocks designed to run on distributed infrastructures.</p>
  </div>
</div>


<div class="wrap py-8 md:py-12 lg:py-16 text-center">
  <h3 class="section-heading border-grey-dark">Cloud Native Building Blocks</h3>
  <div class="md:flex md:flex-wrap md:justify-center">
    <div class="max-w-xs mx-auto my-4 md:mx-0 md:px-6">
      <div class="inline-block"><img src="assets/images/Activiti_Icons_RuntimeBundle.png"></div>
      <h5>Runtime Bundle</h5>
      <p>Inmutable, scalable & pain free Process & Decision Runtimes designed to
        integrate with your cloud native infrastructure.</p>
    </div>
    <div class="max-w-xs mx-auto my-4 md:mx-0 md:px-6">
      <div class="inline-block"><img src="assets/images/Activiti_Icons_AuditService.png"></div>
      <h5>Audit Service</h5>
      <p>Scalable, storage independent and extensible audit service.</p>
    </div>
    <div class="max-w-xs mx-auto my-4 md:mx-0 md:px-6">
      <div class="inline-block"><img src="assets/images/Activiti_Icons_QueryService.png"></div>
      <h5>Query Service</h5>
      <p>Scalable, storage independent and extensible query service.</p>
    </div>
    <div class="max-w-xs mx-auto my-4 md:mx-0 md:px-6">
      <div class="inline-block"><img src="assets/images/Activiti_Icons_CloudConnectors.png"></div>
      <h5>Cloud Connectors</h5>
      <p>Simplified system to system interactions that can scale in distributed
        environments.</p>
    </div>
    <div class="max-w-xs mx-auto my-4 md:mx-0 md:px-6">
      <div class="inline-block"><img src="assets/images/Activiti_Icons_AppService.png"></div>
      <h5>Application Service</h5>
      <p>Distributed & Scalable application aggregation layer.</p>
    </div>
    <div class="max-w-xs mx-auto my-4 md:mx-0 md:px-6">
      <div class="inline-block"><img src="assets/images/Activiti_Icons_NotificationService.png"></div>
      <h5>Notification Service</h5>
      <p>Cloud ready secure WebSocket and subscription handling as part of
        GraphQL integration.</p>
    </div>
  </div>
</div> 

<div class="bg-grey-light">
  <div class="wrap py-8 md:py-12 lg:py-16">
  <h6>Designed for:</h6> 
      <div class="flex flex-wrap justify-around xl:justify-between">
          <img class="my-4 mx-2" src="assets/images/spring-cloud-horizontal.png">
          <img class="my-4 mx-2" src="assets/images/docker-horizontal.png">
          <img class="my-4 mx-2" src="assets/images/kubernetes-horizontal-color.png">
        </div>
   </div>
</div>
     
  

<div class="wrap py-8 md:py-12 lg:py-16 pb-0 md:pb-4 lg:pb-8">
  <h3 class="section-heading">Activiti Community</h3>
  <div class="flex flex-wrap justify-center lg:flex-no-wrap -mx-3">
    <div class="max-w-sm mt-4 md:mt-8 mb-8 mx-3 lg:mx-8 lg:w-1/2">
      {% include left_video_embed.html %}
      <h4 class="section-sub-heading">Activiti Cloud Beta2 Demo</h4>
      <p>Check out our Activiti Cloud Beta2 demo including the new bpmn modeling application and a cloud connector integrating with Slack.</p>
    </div>
    <div class="max-w-sm mt-4 md:mt-8 mb-8 mx-3 lg:mx-8 lg:w-1/2">
      {% include right_video_embed.html %}
      <h4 class="section-sub-heading">Activiti Cloud Overview &amp;
        BluePrint</h4>
      <p>Now that our first Beta Release is out, you can check in this post the <a class="text-lg underline font-normal" href="https://community.alfresco.com/community/bpm/blog/2018/08/30/activiti-activiti-cloud-roadmap-update-290818">roadmap updates</a> including details about what is keeping us busy.</p>
    </div>
  </div>
</div>


<div id='get-started' class="py-8 md:py-16 xl:py-24 text-center bg-grey-light">
  <div class="wrap">
    <h3 class="section-heading text-green border-grey-dark">Get started with
      Activiti</h3>
    <div class="wrap max-w-lg pb-4 md:py-4 text-center">
      <p class="text-lg">Follow our QuickStart Guide to get an Activiti Cloud Application up and running in 3 simple steps into a Kubernetes installation.</p>
    </div>
    <a href="{% link before-you-start.html %}" class="btn btn--large px-8">Try Now</a>
  </div>
</div>


