---
# This only sets the meta page title, as the visible one is set in the HTML 
# below, as it has a <br> tag in it.
title: Open Source Business Automation

latest_news: Something here, something here
latest_news_link: https://www.alfresco.com
---
<div class="bg-no-repeat bg-full-width bg-bottom bg-image-clouds">
  <div class="wrap py-8 md:py-16 clearfix">
    <div class="md:w-1/2 md:float-left">
      <h1 class="text-green">Open Source <br>Business Automation</h1>
      <p class="text-lg leading-tight">Helping businesses solving automation challenges in distributed, highly-scalable and cost effective infrastructures.</p>
      <a href='#get-started' class="mt-4 btn btn--large">Learn More</a>
    </div>
    <div class="hidden md:block md:float-right">
      {% include svg/activiti-mark.svg %}
    </div>
  </div>
</div>

<a href="{{ page.latest_news_link }}" class="block bg-green py-4 text-center text-white text-lg"><strong>Latest News: </strong>{{ page.latest_news }}</a>
  
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
  <a href="{% link get-started.html %}" class="btn btn--large">Get Started Now</a>
</div>