---
# This only sets the meta page title, as the visible one is set in the HTML 
# below, as it has a <br> tag in it.
title: Open Source Business Automation

latest_news: Something here, something here
latest_news_link: https://www.alfresco.com
---
<div class="bg-no-repeat bg-full-width bg-bottom bg-image-clouds">
  <div class="wrap max-w-md py-8 md:py-16 clearfix">
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

<p class="mt-0 bg-green"><a href="{{ page.latest_news_link }}" class="wrap block py-4 text-center text-white text-lg"><strong>Latest News: </strong>{{ page.latest_news }}</a></p>

<div class="wrap max-w-md md:py-4 text-center" markdown='1'>
----

Activiti has been the leading lightweight, java-centric open-source BPMN process engine supporting real-world and important process needs everyday.

Activiti is now the new generation of process engine composed of a set of microservices designed for Cloud environments to solve business automation scenarios. 

This project is driven by a community of domain experts from different companies with strong industry experience.

----
</div>

<div class="bg-green">
  <div class="wrap py-2 md:py-8 xl:py-16 md:px-0 text-white text-center">
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
  
<div id='get-started' class="wrap py-8 md:py-16 xl:py-24 text-center">
  <h3 class="section-heading">Get started with Activiti</h3>
  <div class="lg:flex">
    <div class="max-w-sm mx-auto my-6 lg:my-8 lg:mx-8">
      <h4 class="section-sub-heading md:mb-6">Kubernetes</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam maiores consectetur, voluptas. Autem deserunt animi omnis cupiditate laboriosam cumque iure.</p>
    </div>
    <div class="max-w-sm mx-auto my-6 lg:my-8 lg:mx-8">
      <h4 class="section-sub-heading md:mb-6">Docker</h4>
      <p>Velit ratione rem, voluptas possimus nesciunt, ad, labore qui porro incidunt. Possimus nesciunt, ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
    <div class="max-w-sm mx-auto my-6 lg:my-8 lg:mx-8">
      <h4 class="section-sub-heading md:mb-6">Download v6</h4>
      <p>Quos, tempore eum consequuntur culpa soluta qui provident aspernatur adipisci praesentium optio perferendis voluptatibus harum accusamus, blanditiis possimus officia! Ad, veniam deleniti!</p>
    </div>
  </div>
  <a href="{% link get-started.md %}" class="btn btn--large">Get Started Now</a>
</div>