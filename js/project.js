		$(document).ready(function(){
			// var height = ($("#proj-box").width())*0.32;
			// $("#proj-box").css("height",height);
		});

		$(window).resize(function(){
			// var height = ($("#proj-box").width())*0.32;
			// $("#proj-box").css("height",height);
		});

		$(".proj-all").mouseenter(function(){
			$(".proj-all").css("opacity","1");
			// $("#proj-box").css("background-image","url(img/bg2.png)");
			$(".skill-all").css("opacity","0.2");
		});

		$(".skill-all").mouseenter(function(){
			$(".skill-all").css("opacity","1");
			// $("#proj-box").css("background-image","url(img/bg1.png)");
			$(".proj-all").css("opacity","0.2");
		});

		/* Project Entering */
		$("#proj-pmp").mouseenter(function(){
			$("#skill-js,#skill-html,#skill-node,#skill-ang2,#skill-express,#skill-mongo,#skill-ps,#skill-bootstrap").css("opacity","1");
		});

		$("#proj-cruz").mouseenter(function(){
			$("#skill-js,#skill-html,#skill-python,#skill-jquery,#skill-postgresql,#skill-bootstrap,#skill-django,#skill-sql").css("opacity","1");
		});

		$("#proj-kims").mouseenter(function(){
			$("#skill-js,#skill-java,#skill-html,#skill-sql,#skill-jquery,#skill-jsp,#skill-postgresql,#skill-bootstrap").css("opacity","1");
		});

		$("#proj-foottracker").mouseenter(function(){
			$("#skill-js,#skill-html,#skill-express,#skill-node,#skill-jquery,#skill-bootstrap,#skill-ps").css("opacity","1");
		});

		$("#proj-funko").mouseenter(function(){
			$("#skill-js,#skill-html,#skill-jquery,#skill-bootstrap,#skill-firebase,#skill-ps").css("opacity","1");
		});

		$("#proj-groupup").mouseenter(function(){
			$("#skill-js,#skill-html,#skill-node,#skill-express,#skill-jquery,#skill-bootstrap,#skill-ps").css("opacity","1");
		});
		$("#proj-busbuzz").mouseenter(function(){
			$("#skill-java,#skill-android,#skill-ps").css("opacity","1");
		});

		$("#proj-britney").mouseenter(function(){
			$("#skill-html,#skill-js,#skill-ps").css("opacity","1");
		});

		/* Skills Entering */

		$("#skill-js").mouseenter(function(){
			$("#proj-pmp,#proj-cruz,#proj-kims,#proj-foottracker,#proj-funko,#proj-groupup,#proj-britney").css("opacity","1");

			$("#proj-box").html(`<h3>Programming Language: <strong>JavaScript (ES6)</strong></h3><hr>
				<p><div class="col-sm-2"><strong>"Proficient"</strong></div>
                  	<div class="col-sm-10"><div class="progress">
                      	<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%">80%</div>
                    	</div>
                    </div>
					<li><b>Web projects:</b> Post My Pic, Cruz Roja Project, KimsMarket... etc</li>
					<li>Preferred language, with knowledges of ES 6 & TypeScript</li>
			</p>`);
		});

		$("#skill-java").mouseenter(function(){
			$("#proj-kims,#proj-busbuzz").css("opacity","1");
			$("#proj-box").html(`<h3>Programming Language: <strong>Java</strong></h3><hr>
				<p><div class="col-sm-2"><strong>"Familiar"</strong></div>
                  	<div class="col-sm-10"><div class="progress">
                      	<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%">70%</div>
                    	</div>
                    </div>
                    <li>Android app project(BusBuzz), Server-side language(JSP) for KimsMarket</li>
					<li><b>School projects:</b> Mini slot machine, Matching game, Nachos Operating System</li>
			</p>`);
		});

		$("#skill-cplus").mouseenter(function(){
			$("#proj-box").html(`<h3>Programming Language: <strong>C++</strong></h3><hr>
				<p><div class="col-sm-2"><strong>"Familiar"</strong></div>
                  	<div class="col-sm-10"><div class="progress">
                      	<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style="width:65%">65%</div>
                    	</div>
                    </div>
					<li><b>School projects:</b> Stack calculator, Advanced Data structures(BST, Randomized Search Tree, Huffman Coding), Boggle, GLSL Compiler Design</li>
			</p>`);
		});

		$("#skill-c").mouseenter(function(){
			$("#proj-box").html(`<h3>Programming Language: <strong>C</strong></h3><hr>
				<p><div class="col-sm-2"><strong>"Familiar"</strong></div>
                  	<div class="col-sm-10"><div class="progress">
                      	<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%">60%</div>
                    	</div>
                    </div>
					<li><b>School projects:</b> Linux command design: mydiff with assembly language (SPARK), Design mini CPU with Verilog, MIPS architecture</li>
			</p>`);
		});

		$("#skill-html").mouseenter(function(){
			$("#proj-pmp,#proj-cruz,#proj-kims,#proj-foottracker,#proj-funko,#proj-groupup,#proj-britney").css("opacity","1");
			$("#proj-box").html(`<h3>Web lang.: <strong>HTML 5/CSS 3</strong></h3><hr>
				<p><div class="col-sm-2"><strong>"Advanced"</strong></div>
                  	<div class="col-sm-10"><div class="progress">
                      	<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:75%">75%</div>
                    	</div>
                    </div>
					<li>Utilized <b>all web projects</b></li>
					<li>Experienced <b>Sass: pre-CSS compiler</b></li>
			</p>`);
		});

		$("#skill-sql").mouseenter(function(){
			$("#proj-cruz,#proj-kims").css("opacity","1");
			$("#proj-box").html(`<h3>Programming Language: <strong>SQL</strong></h3><hr>
				<p><div class="col-sm-2"><strong>"Familiar"</strong></div>
                  	<div class="col-sm-10"><div class="progress">
                      	<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%">60%</div>
                    	</div>
                    </div>
                    <li>Utilized for project KimsMarket with PostgreSQL & JSP</li>
					<li>Learn Relational Database from UCSD class, and learn MySQL + PHP by myself</li>
			</p>`);
		});

		$("#skill-python").mouseenter(function(){
			$("#proj-cruz").css("opacity","1");
			$("#proj-box").html(`<h3>Programming Language: <strong>Python</strong></h3><hr>
				<p><div class="col-sm-2"><strong>"Experienced"</strong></div>
                  	<div class="col-sm-10"><div class="progress">
                      	<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%">50%</div>
                    	</div>
                    </div>
                    <li>Utilized for project Cruz Roja with Python in Django (Experienced)</li>
					<li>Learn Python language(+Decorator, OOP, etc) from UCSD class (CSE 130)</li>
			</p>`);
		});

		$("#skill-node").mouseenter(function(){
			$("#proj-pmp,#proj-foottracker,#proj-groupup").css("opacity","1");
		});

		$("#skill-express").mouseenter(function(){
			$("#proj-pmp,#proj-foottracker,#proj-groupup").css("opacity","1");
		});

		$("#skill-ang2").mouseenter(function(){
			$("#proj-pmp").css("opacity","1");
		});

		$("#skill-jquery").mouseenter(function(){
			$("#proj-cruz,#proj-kims,#proj-foottracker").css("opacity","1");
		});

		$("#skill-jsp").mouseenter(function(){
			$("#proj-kims").css("opacity","1");
		});

		$("#skill-postgresql").mouseenter(function(){
			$("#proj-cruz,#proj-kims").css("opacity","1");
		});

		$("#skill-android").mouseenter(function(){
			$("#proj-busbuzz").css("opacity","1");
		});

		$("#skill-bootstrap").mouseenter(function(){
			$("#proj-pmp,#proj-cruz,#proj-kims,#proj-foottracker,#proj-funko,#proj-groupup").css("opacity","1");
		});

		$("#skill-django").mouseenter(function(){
			$("#proj-cruz").css("opacity","1");
		});

		$("#skill-firebase").mouseenter(function(){
			$("#proj-funko").css("opacity","1");
		});

		$("#skill-mongo").mouseenter(function(){
			$("#proj-pmp").css("opacity","1");
		});

		$("#skill-ps").mouseenter(function(){
			$("#proj-pmp,#proj-foottracker,#proj-funko,#proj-groupup,#proj-busbuzz,#proj-britney").css("opacity","1");
		});