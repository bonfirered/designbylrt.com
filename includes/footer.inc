<footer id="footer">
	<div class="footer-signup">
		<div class="content">
			<img data-no-retina src="../assets/img/logo-footer.png">
			<div class="form" id="newsletter-form">
				<form action="//cl.exct.net/subscribe.aspx?lid=16309" method="post" id="form-newsletter" name="subscribeForm" class="newsletter-form validate">
				  <input type="hidden" name="thx" value="http://<?php echo $_SERVER['HTTP_HOST'] ?>/?success" />
				  <input type="hidden" name="err" value="http://<?php echo $_SERVER['HTTP_HOST'] ?>" />
				  <input type="hidden" name="usub" value="" />
				  <input type="hidden" name="MID" value="7225425" />
				  <div class="form-group input first">
				    <div class="wrapper">
				      <label for="sub_firstname">First Name</label>
				      <input type="text" id="sub_firstname" name="First Name" required>
				    </div>
				  </div>
				  <div class="form-group input last">
				    <div class="wrapper">
				      <label for="sub_lastname">Last Name</label>
				      <input type="text" id="sub_lastname" name="Last Name" required>
				    </div>
				  </div>
				  <div class="form-group input email">
				    <div class="wrapper">
				      <label for="sub_email">Email address</label>
				      <input type="email" autocomplete="off" id="sub_email" name="Email Address" required>
				    </div>
				  </div>
				</form>
			</div>
			<div class="message" id="newsletter-message">
				<h3>We're changing <br>expectations.</h3>
				<p>And we want to keep you up to date. Sign up here for DragonFly news, upcoming events and more.</p>
			</div>
			<button class="btn footer-close sign-up" id="newsletter-action" data-show="message">Sign Up</button>
		</div>
	</div>
	<div class="social">
		<div class="column">
			<h3>company</h3>
			<ul>
				<li><a href="/index">About Us</a></li>
				<li><a href="/index#mission">Our Mission</a></li>
				<li><a href="/index#events">Events</a></li>
			</ul>
		</div>
		<div class="column">
			<h3>consulting</h3>
			<ul>
				<li><a href="/consulting#content">Services</a></li>
				<li><a href="/consulting#management">Lean Engineering</a></li>
				<li><a href="/consulting#leadership">Leadership</a></li>
			</ul>
		</div>
		<div class="column">
			<h3>connect</h3>
			<ul>
				<li>
					<a target="blank" href="https://www.linkedin.com/company/dragonfly-aeronautics-llc">
						<svg version="1.1" class="social-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25.2px" height="30px" viewBox="293.4 381 25.2 30"><circle fill="#998C86" cx="298.075" cy="388.123" r="2.551"/><rect x="295.91" y="392.528" fill="#998C86" width="4.329" height="13.914"/><path fill="#998C86" d="M302.944,406.442h4.329v-7.188c0,0-0.155-3.247,2.474-3.247 c2.628,0,2.396,2.472,2.396,3.247v7.188h4.328v-7.576c0,0,0.232-5.487-2.937-6.415c-3.248-0.927-5.334,0.155-6.417,2.01v-1.933 h-4.174V406.442L302.944,406.442z"/></svg>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="footer-links">
		<div class="copyright">
			<ul>
				<li>&copy; DragonFly <?php echo date("Y"); ?></li>
				<li><a target="blank" href="http://dragonfly.aero/privacy-legal.php"> Privacy Policy / Legal</a></li>
			</ul>
		</div>
	</div>
</footer>
<script src="//cdn.jsdelivr.net/g/jquery@2.1.4,jquery.ui@1.11.4,bootstrap@3.3.6,modernizr@2.8,skrollr@0.6.30,velocity@1.2.3,imagesloaded@4.1.0,retinajs@1.3.0"></script>
<script src="/assets/js/lib/jquery.waypoints.js"></script>
<script src="/assets/js/global.js"></script>