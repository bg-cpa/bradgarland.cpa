---
title: About
layout: page
---
![Profile Image]({% if site.external-image %}{{ site.alt_picture }}{% else %}{{ site.url }}/{{ site.alt_picture }}{% endif %})

{% assign word1 = "civic,creative,organized,efficient,poetic,professional,reluctant" | split: "," %}
{% assign word2 = "leader,organizer,creative,accountant,innovator,Huntsvillian,adoptee" | split: "," %}


<p>Brad is a Certified Public Accountant and <span id="title"></span>. He recieved his B.S.B.A. in accounting from Auburn Univesity and currently practices as a CPA with <a href="https://brandblackwell.com/">Brand Blackwell & Co.</a></p>

<!-- Random title generator -->
<script>
	var word1_list = ["civic","creative","organized","efficient","poetic","professional","reluctant"]
	var word1 = word1_list[Math.floor(Math.random() * word1_list.length)];
	var word2_list = ["leader","organizer","creative","accountant","innovator","Huntsvillian","adoptee"]
	var word2 = word2_list[Math.floor(Math.random() * word2_list.length)];	
    
    document.getElementById("title").innerHTML = word1 + " " + word2;
</script>

<p>Brad is also a founding member of the <a href="http://bnialabama.com/bnicove/">Cove chapter of BNI</a>; is the Treasurer for Kinertia, the entity that curates <a href="http://tedxhuntsville.com/site/">TEDxHuntsville</a>; is Treasurer of <a href="http://www.rockethatch.org/">Rocket Hatch</a>; serves on Auburn University's <a href="http://harbert.auburn.edu/academics/departments/school-of-accountancy/">School of Accountancy Advisory Council</a>; and is a co-founder of <a href="https://rocketsgo.org/">Rocket City Scholarship Granting Organization</a>.</p>

<h2>Areas of Emphasis</h2>

<ul class="skill-list">
	<li>Business, Individual, and not-for-profit taxation</li>
	<li>Small/local business and start-up/entrepreneurship consulting</li>
	<li>QuickBooks Online Certified ProAdvisor</li>
</ul>

<h2>Professional Organizations</h2>

<ul>
	<li><a href="http://www.aicpa.org/">American Institute of Certified Public Accountants</a></li>
	<li><a href="http://www.ascpa.org/">Alabama Society of Certified Public Accountants</a></li>
</ul>
