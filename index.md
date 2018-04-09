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
      <p class="text-lg leading-tight mt-0">Helping businesses solving automation challenges in distributed, highly-scalable and cost effective infrastructures.</p>
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

Activiti has been the leading lightweight, java-centric open-source BPMN process engine supporting real-world and important process needs everyday.

Activiti is now the new generation of process engine composed of a set of microservices designed for Cloud environments to solve business automation scenarios. 

This project is driven by a community of domain experts from different companies with strong industry experience.

----
</div>


<div class="bg-green">
  <div class="wrap pt-2 pb-8 md:py-8 xl:py-16 md:px-0 text-white text-center">
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
  </div>
</div>
  

<div class="wrap pt-8 md:pb-4 lg:py-16">
  <h3 class="section-heading">Activiti Community</h3>
  <div class="flex flex-wrap justify-center lg:flex-no-wrap -mx-3">
    <div class="max-w-sm mt-4 md:mt-8 mb-8 mx-3 lg:mx-8 lg:w-1/2">
      <img src="https://activiti.gitbooks.io/activiti-7-developers-guide/assets/infrastructure.png" title="placeholder"/>
      <h4 class="section-sub-heading">Activiti Cloud BluePrint Demo</h4>
      <p>Quick demo of the Twitter trending topics compaigns example using the Activiti Cloud BluePrint.</p>
    </div>
    <div class="max-w-sm mt-4 md:mt-8 mb-8 mx-3 lg:mx-8 lg:w-1/2">
      {% include video_embed.html %}
      <h4 class="section-sub-heading">Activiti Cloud Overview @ Alfresco Meetup</h4>
      <p>While we are working hard in getting our first Beta Release we wanted to give an overview of our work so far.</p>
    </div>
  </div>
</div>


<div class="bg-grey-light">
  <div class="wrap py-8 md:py-12 lg:py-16 text-center">
    <h3 class="section-sub-heading pb-8 md:pb-12 lg:pb-16">Get Involved</h3>
    <ul class="list-reset mt-0 flex flex-wrap items-start">
      {% for item in site.data.community_links %}
        <li class="mb-4 w-1/3 lg:w-1/6">
          <a class="text-grey-darker block" href="{{ item.url }}" alt="{{ item.title }}">
            <span class="inline-block">{% include {{ item.image }} %}</span>
            <span class="block">{{ item.title }}</span>
          </a>
        </li>
      {% endfor %}      
    </ul>

  </div>
</div>


<div id='get-started' class="wrap py-8 md:py-16 xl:py-24 text-center">
  <h3 class="section-heading">Get started with Activiti</h3>
  <div class="lg:flex">
    <div class="max-w-sm mx-auto my-6 lg:m-8">
      <h4 class="section-sub-heading md:mb-6">Kubernetes</h4>
    </div>
    <div class="max-w-sm mx-auto my-6 lg:m-8">
      <h4 class="section-sub-heading md:mb-6">Quickstart</h4>
      <p>This Quickstart is designed to help you get up and running with Activiti Cloud in 5 minutes.
* Step 1 (prerequisites): install Git & Docker
* Step 2: deploy the Docker images
* Step 3: test the Activiti Cloud application example</p>
    </div>
    <div class="max-w-sm mx-auto my-6 lg:m-8">
      <h4 class="section-sub-heading md:mb-6">Download v6</h4>
      <p>Quos, tempore eum consequuntur culpa soluta qui provident aspernatur adipisci praesentium optio perferendis voluptatibus harum accusamus, blanditiis possimus officia! Ad, veniam deleniti!</p>
    </div>
  </div>
  <a href="{% link before-you-start.html %}" data-modal="#before-you-start" class="btn btn--large px-8">Get Started Now</a>
</div>
