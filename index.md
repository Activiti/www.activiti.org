---
# This only sets the meta page title, as the visible one is set in the HTML 
# below, as it has a <br> tag in it.
title: Open Source Business Automation

latest_news: Something here, something here
latest_news_link: https://www.alfresco.com
redirect_from:
  - about
  - content/activiti-home
  - faq
---
<div class="bg-no-repeat bg-full-width bg-bottom bg-image-clouds-full md:bg-image-clouds">
  <div class="text-center md:text-left wrap max-w-md pt-8 pb-16 md:pt-16 clearfix">
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

<p class="mt-0 bg-green"><a href="{{ page.latest_news_link }}" class="border-t border-white md:border-0 wrap block py-4 text-center text-white text-lg"><strong>Latest News: </strong>{{ page.latest_news }}</a></p>


<div class="wrap max-w-md md:py-4 text-center" markdown='1'>
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
        <h5>Activiti Process Runtime</h5>
        <p>Cloud native, lightweight BPMN Process Runtime, you can still use and embed activiti in your java apps, but we have fine tuned it to work for cloud deployments.</p>
      </div>
      <div class="max-w-xs mx-auto my-4 md:mx-0 md:px-6">
        <div class="inline-block">{% include svg/decision-runtime.svg %}</div>
        <h5>Activiti Decision Runtime</h5>
        <p>Cloud native, lightweight and reactive Decision Runtime</p>
      </div>
      <div class="max-w-xs mx-auto my-4 md:mx-0 md:px-6">
        <div class="inline-block">{% include svg/form-runtime.svg %}</div>
        <h5>Activiti Form Runtime</h5>
        <p>Cloud native, lightweight Runtime Form Service.</p>
      </div>
      <div class="max-w-xs mx-auto my-4 md:mx-0 md:px-6">
        <div class="inline-block">{% include svg/cloud-infra.svg %}</div>
        <h5>Activiti Cloud Connectors</h5>
        <p>Simplified system to system interactions that can scale in distributed environments.</p>
      </div>
      <div class="max-w-xs mx-auto my-4 md:mx-0 md:px-6">
        <div class="inline-block">{% include svg/case-management.svg %}</div>
        <h5>Activiti Cloud Application / Case Management Router</h5>
        <p>Bridging the gap between content, data and processes for cloud native environments.</p>
      </div>
    </div>
  </div>
</div>
  

<div class="wrap pt-8 md:pb-4 lg:py-16">
  <h3 class="section-heading">Activiti Community</h3>
  <div class="flex flex-wrap justify-center lg:flex-no-wrap -mx-3">
    <div class="max-w-sm mt-4 md:mt-8 mb-8 mx-3 lg:mx-8 lg:w-1/2">
      <img src="http://via.placeholder.com/1280x720" title="placeholder"/>
      <h4 class="section-sub-heading">Blog: Form Stencil Examples</h4>
      <p>“Stencils” provide a very powerful set of capabilities to Alfresco Process Services powered by Activiti (APS) and can be used within the BPMN 2.0 Editor, the Step Editor and the Forms Editor.</p>
    </div>
    <div class="max-w-sm mt-4 md:mt-8 mb-8 mx-3 lg:mx-8 lg:w-1/2">
      {% include youtube_embed.html youtube_id="Y5bA3efD95U" %}
      <h4 class="section-sub-heading">Activiti Cloud Overview &amp; BluePrint</h4>
      <p>While we are working hard in getting our first Beta Release at the end of March (beginning of April) we wanted to share a couple of introductory videos about our work so far.</p>
    </div>
  </div>
</div>


<div class="bg-grey-light">
  <div class="wrap py-8 md:py-12 lg:py-16 text-center">
    <h3 class="section-sub-heading pb-8 md:pb-12 lg:pb-16">Get Involved</h3>
    <ul class="list-reset mt-0 flex flex-wrap items-start">
      {% for item in site.data.community_links %}
        <li class="mb-4 w-1/3 lg:w-1/6">
          <a class="block text-grey-darker" href="{{ item.url }}" alt="{{ item.title }}">
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
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam maiores consectetur, voluptas. Autem deserunt animi omnis cupiditate laboriosam cumque iure.</p>
    </div>
    <div class="max-w-sm mx-auto my-6 lg:m-8">
      <h4 class="section-sub-heading md:mb-6">Docker</h4>
      <p>Velit ratione rem, voluptas possimus nesciunt, ad, labore qui porro incidunt. Possimus nesciunt, ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
    <div class="max-w-sm mx-auto my-6 lg:m-8">
      <h4 class="section-sub-heading md:mb-6">Download v6</h4>
      <p>Quos, tempore eum consequuntur culpa soluta qui provident aspernatur adipisci praesentium optio perferendis voluptatibus harum accusamus, blanditiis possimus officia! Ad, veniam deleniti!</p>
    </div>
  </div>
  <a href="{% link before-you-start.html %}" data-modal="#before-you-start" class="btn btn--large px-8">Get Started Now</a>
</div>