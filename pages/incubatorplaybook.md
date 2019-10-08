---
title: Incubator Playbook
layout: widepage
primary_nav_section: Resources
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
<script>
var playid = "Data Sharing";
var userid = "Federal Agencies";
var playnum = 1;
var usernum = 1;
var tenx = {title: "10x Process",
  opportunity: "10x provides start-up funding for new technology projects and products across government. It aims to uncover and elevate the most promising ideas from the Federal workforce. 10x is a program that lives within the  Technology Transformation Services (TTS), and is managed by the Office of Products and Programs of the General Services Administration. TTS manages the Digital Services Fund. 10x starts their funding small and increase their investment as an idea matures into a sustainable project. 10x accepts ideas from Federal employees throughout the year. A few times a year, 10x collects all the ideas and evaluates them for funding. The most promising ideas proceed to Phase 1.",
  elements: "The idea will be evaluated based on the following three criteria, each given equal weight: Clarity: The idea is no more than three sentences long and it explains a real problem. Alignment: The idea must help develop new, good-for-government technology and improve the public’s experience with government through technology. Impact: Solving this problem will have an important effect on the Federal government or the public.",
  success: "Past projects include the U.S. Web Design Systems, Federalist, and the TTS Bug Bounty Programs.",
  proof: "Federal Grantee Reporting This project will identify opportunities to improve the Federal grant reporting process, by eliminating redundancies and creating efficiencies through improved technology — with the goal of generating a prototype that could be adapted across Federal programs, thereby increasing Federal grant programs’ efficacy to those being served as well as taxpayers’ return on investment.<br><br><i>PRA.Gov</i><br>OMB’s Office of Information and Regulatory Affairs (OIRA) is charged with overseeing Federal compliance with the Paperwork Reduction Act (PRA). Agencies often cite frustration with accessing and understanding OMB’s policies on the PRA, which are spread across numerous inaccessible PDFs. This situation has reduced compliance and created delays in the approval of information collection requests (ICRs). Through outreach to PRA desk officers and agency staff, and in consultation with OIRA, TTS will explore what it would take to modernize the way agencies interact with OMB’s policies in order to design an accessible, user-friendly online interface to respond to agency inquiries.",
  gettingstarted: "<ul><li>Pitch an idea @ <a href='https://10x.gsa.gov/send-us-an-idea/'>https://10x.gsa.gov/send-us-an-idea/</a></li><li>Use their <a href='https://docs.google.com/forms/d/e/1FAIpQLSdJJXKYxW8PERXJ_33oHB1JqUB4wBomHiwM8B7nnYdgyjW2bQ/viewform/'>google form</a></li><li>or email them directly at <a href='mailto:10x@gsa.gov'>10x@gsa.gov</a></li></ul>Visit <a href='https://10x.gsa.gov/the-10x-process/'>this site</a> for more info"
};
var eighteenf = {title: "18f",
  opportunity: "18F helps agencies move paper processes online, increase data access, save millions of dollars on cloud hosting, and implement new acquisition techniques. 18F is an office of Federal employees, within the General Services Administration (GSA), collaborating with other agencies to fix technical problems, build products, and improve how government serves the public through technology. 18F is part of the Technology Transformation Services, within the Federal Acquisition Service.",
  elements: "18F partners with civilian and military Federal agencies to help you build or buy exceptional digital services. 18F works with partners who have Federal funding, and, as a cost recoverable office, they are required to charge for their work. 18F also offers procurement services to state and local governments with access to Federal funds.",
  success: "18F delivers websites, applications, and strategies to help agencies provide excellent value to public. The Federal Election Commission (FED) found success with their brand new website at FEC.gov. \“We engaged with 18F, and it was a game-changer for us. They came in and helped the IT team and business owners get involved in the agile development process. It changed our whole methodology. - Alec Palmer, FEC’s Chief Information Officer\”",
  proof: "The Contract-Awarded Labor Category (CALC) tool <br>In May, 18F and GSA’s Professional Services Category launched CALC, a powerful labor category and pricing research tool to help the Federal contracting community make smarter, faster buying decisions. CALC helps contracting officers determine the range of pricing at the highest level for a specific labor category across a database of contract awarded prices for 48,000 labor categories from more than 5,000 recent GSA contracts. The tool saved Federal contracting officers and the cities time and money.<br><br><i>New website at FEC.gov</i><br>The Federal Election Commission (FEC) new website at FEC.gov is the result of a years-long collaboration with GSA’s 18F and features completely revamped tools for exploring campaign finance data. It provides user-centered content for understanding the reporting and compliance requirements for people participating in Federal elections, redesigned tools for exploring legal resources, and more.",
  gettingstarted: "Email Kenny Daniel on their Agency Partnerships team to see if 18F can help your agency. For all inquiries, you can reach their outreach team at 18F@gsa.gov<br><BR>Visit <a href='https://18f.gsa.gov/'>18f.gsa.gov</a> for more info."
};
var adrf = {title : "Administrative Data Research Facility",
  opportunity : "NYU’s Administrative Data Research Facility (ADRF) is a secure cloud environment for hosting both confidential micro-data and analytics tools. Through a combination of data sharing agreements and trainings, the ADRF is evolving the empirical foundation of social science, statistical, and public agencies in the United States, in turn transforming our understanding of how society works.",
  elements: "The ADRF allows agencies within the same state or different states to agree to share their data in a common area in the cloud for specific approved projects. If approved, staff from multiple agencies can jointly access the common area, so that they can work together to develop new integrated datasets, share information about coding differences or similarities, and develop common measures. No personally identifiable information is stored in the cloud. The data are hashed and de-identified (with a common hash algorithm) before being transferred to the secure area. Moreover, data stewardship modules can be deployed so that agencies can track data use and work output.",
  success: "The ADRF has hosted almost 50 confidential government datasets from 12 different agencies at all levels of government. Over 175 agency staff, from about 50 agencies, have already accessed and used the ADRF. The ADRF has received Authorization to Operate from the Census Bureau, has achieved a FedRAMP Moderate approval, and is listed on the FedRAMP Marketplace.",
  proof: "RICH CONTEXT COMPETITION (2019) All too often, organizations provide data to the public without any way to track its use, and therefore the value of making those data available. Furthermore, researchers have a hard time determining what data has proved helpful to previous projects pursuing related research questions. The goal of this competition was to automate the discovery of research datasets and the associated research methods and fields in social science research publications. Participants used any combination of machine learning and data analysis methods to identify the datasets used in a corpus of social science publications and infer both the scientific methods and fields used in the analysis and the research fields. All submitted algorithms will be made publicly available as open source tools.",
  gettingstarted: "Contacting their Slack team is one method of communication for their Applied Data Analytics program. They include channels for programming specific issues (for example Python and SQL, training program specific topics, and general discussion. Contact Information POC: Julia Lane at fedramp-adrf@nyu.edu . Visit this site for more info, visit <a href='https://cusp.nyu.edu/coleridge-initiative'>cusp.nyu.edu/coleridge-initiative</a>."
  };
var bdp = {title : "Big Data Project",
  opportunity : "The NOAA Big Data Project (BDP) was created to explore the potential benefits of storing copies of key observations and model outputs in the Cloud to allow computing directly on the data without requiring further distribution. Such an approach helps form new lines of business and economic growth while making NOAA’s data more accessible to the American public.",
  elements: "High-quality environmental data and expertise in NOAA Computing capabilities of our industry collaborators Innovative energy of the American economy.",
  success: "NOAA’s Big Data Collaborators and their partners (not an all-inclusive list)<ul><li>Amazon: Jed Sundwall, Arial Gold (now @DOT), Jeff Layton, Joe Flasher</li><li>Microsoft: Sam Khoury, Sid Krishna, Shannon</li><li>Google: Will Curran, Matt Hancher, Eli Bixby, Tino Tereshko, Amy Unruh, Tanya Shastri, Ossama Alami, Valliappa “Lak” Lakshmanan, Mike Hamberg</li><li>Open Commons Consortium: Walt Wells, Maria Patterson, Zac Flamig</li><li>Unidata: Mohan Ramamurthy, Jeff Weber</li><li>IBM: James Stevenson, Stefani Jones, Mary Glackin, Peter Neilley, John Aviles</li><li>The Climate Corporation: Adam Pasch</li></ul>",
  proof: "Big Data Project (BDP)‘s NOAA’s Cooperative Research and Development Agreement or CRADA with Saildrone, Inc. is providing mountains of data across multiple NOAA mission areas. See Adaptable and driven by renewable energy, Saildrones voyage into remote waters. Tampa Bay Times news team uses NOAA NEXRAD data provided through the Big Data Project (BDP) for an in-depth analysis of Hurricane Irma. See How the slightest shift kept Hurricane Irma from turning into an even worse disaster. More Big Data Project (BDP) successes at <a href='https://techpartnerships.noaa.gov/News-Successes/PID/7817/evl/0/CategoryID/197/CategoryName/CRADA'>techpartnerships.noaa.gov</a>.",
  gettingstarted: "There are access platforms developed by the CRADA Collaborators to provide free, full, and open access to the original NOAA data. Additionally, a more granular list of the available datasets through the BDP offsite link is available from the Cooperative Institute for Climate Satellites-North Carolina (CICS-NC). While the data access is free, you may have to register for an account with the website before you can access the data.<br><br>Visit <a href='https://www.noaa.gov/big-data-project'>noaa.gov/big-data-project</a> for more info."
  };
var ch = {title : "Challenge.gov",
  opportunity : "Challenge.gov allows Federal agencies to crowdsource ideas from the public and solves problems. The Challenge and Prize Toolkit joins the Federal Crowdsourcing and Citizen Science Toolkit, launched in February 2016, as open innovation resources designed to help to engage the public.",
  elements: "There are three main sections, Challenge Phases, Challenge Types, and Case Studies, any of which can be used as a starting point for learning about challenges. There are additional sections listing Mentors who can help you refine the challenges, and Resources like development tools, templates, and examples. There are steps involved: <ul><li>Agency announces a problem to the public</li><li>Participants create and submit solutions to the problem</li><li>Agency evaluates solutions and awards prizes to the best ones.</li></ul>",
  success: "Since 2010, the U.S. government has run nearly 1,000 challenges and offered well over $250 million in cash prizes for the best ideas. Students, hobbyists, small business owners, and academic researchers have won these challenges. Government users with a Federal agency may also run a challenge and/or post a challenge. Challenges have produced concepts for cost-effective clean water systems, gunshot detectors to improve responses to school shootings, and robots capable of setting up life support and communications infrastructure on Mars in preparation for future human missions.",
  proof: "The Agile Robotics for Industrial Automation Competition, ARIAC In June 2017, the National Institute of Standard and Technology (NIST) put on the first ARIAC Competition. The goal of the competition was to test the agility of industrial robot systems, with the goal of enabling industrial robots on the shop floors to be more productive, more autonomous, and to require less time from shop floor workers. For the second year of the competition, they introduced a cash prize to motivate and expand participation. This is the third year of the competition. Up to three winners will be selected.<br><br><b>Travel Data Challenge</b><br><br>General Service Administration (GSA)’s Office of Government-wide Policy (OGP) sponsored the GSA Travel Data Challenge. This was to bring a quantitative approach by attaining a tool that can provide better business decisions for Federal government travel data. Better accountability and cost-saving measures that save money for American taxpayers. The competition was launched on Feb. 14, 2014 and closed on April 11, 2014. The winner was announced on May 9, 2014. He designed an innovative technology tool using open-source code to help agencies better visualize and understand their data, compare their travel data against key benchmarks and identify behaviors to reduce costs on future travel.",
  gettingstarted: "Browse the challenges on the site for topics. Register for an account to participate. It is free. Need to create a username and password before you can submit an idea to challenge. Email them at team@challenge.gov for questions. If Federal worker and want to run a challenge and/or post a challenge on Challenge.gov, drop them a line at team@challenge.gov to get started.<br><br>Visit <a href='https://challenge.gov/a/buzz/challenge'>challenge.gov</a> for more info."
  };
var coe = {title : "Centers of Excellence",
  opportunity : "The Centers of excellence (CoE), a signature White House initiative, were designed by the Office of American Innovation (OAI), and implemented at GSA in October 2017, within the Technology Transformation Services (TTS) office at GSA. The CoE use IT modernization as a means to improve government services by leveraging private sector innovations.",
  elements: "<ul><li>Cloud Adoption—Analyzes current systems and applications to provide recommendations for planning cloud migration.</li><li>Contact Center—Helps improve contact center delivery services and customer interactions.</li><li>Customer Experience—Works to develop a better understanding of customer needs and helps translate those findings into actions.</li><li>Data Analytics—Helps make more efficient use of data management, analysis, and reporting capabilities.</li><li>Infrastructure Optimization—Assists in optimizing data centers and reducing infrastructure costs.</li></ul>",
  success: "The U.S. General Services Administration (GSA) and the U.S. Department of Housing and Urban Development (HUD) teamed up for a discovery sprint as part of GSA’s Centers of Excellence (CoE) initiative. CoE at GSA are working on the aging HUD technology.",
  proof: "<ul><li>Becoming A More Fact-Based and Data-Driven Organization , The Data Analytics Center of Excellence (CoE) is helping the United States Department of Agriculture (USDA by applying data tools and tactics such as: data sharing, data visualization, predictive analysis, and ad hoc analysis Through better access to timely, accurate information for leaders to be enabled to improve their decisions, program outcomes, and overall management of the Department’s resources.</li><li>Using USDA Datasets to Address Water Management Challenges at the IoT World Hackathon by CoE @ GSA.</li></ul>",
  gettingstarted: "If you are interested in learning more about the Centers of Excellence at GSA or discussing tools or solutions, please reach out to them at connectcoe@gsa.gov.. The CoE engage in a phased approach:<ul><li>Phase 0 - Engagement scoping, Inter-Agency Agreement (IAA) development, and funding identification</li><li>Phase I - A comprehensive department-wide discovery and planning effort to identify initial and high-impact modernization projects</li><li>Phase II - Implementation of the agreed upon Phase I recommendations and build sustainment for continue modernization beyond CoE Phase II.</li></ul><br><br>Visit <a href='https://coe.gsa.gov/connect/contact-us.html'>coe.gsa.gov</a> for more info."
  };
var gear = {title : "Government Effectiveness Advanced Research",
  opportunity : "The GEAR Center is looking for ideas from the public, academics, experts, and industry on how to establish the Government Effectiveness Advanced Research (GEAR) Center, a public-private partnership to improve mission delivery, citizen services, and stewardship of public resources. After review of 42 responses from the stakeholder to the request for information by selected Federal agencies, the role of GEAR center is set to be: <ul><li>Conducting applied research projects directly</li><li>Serving as a program management office (PMO)</li<li>Scaling successful practices</li><li>Facilitating data exchange Serving as a procurement lab</li><li>Providing other policy expertise.</li></ul>",
  elements: "GEAR Center Challenge Idea Submission Guidelines: The competition will run through three phases. In the first, Solvers will be evaluated on their proposal (including any proposal to scale or grow existing initiatives) to deliver a relevant solution to a PMA-related challenge. The second phase will evaluate invited semi-finalists to share a more in-depth project plan and [evaluate] how this could be executed, as well as how this project supports a longer-term GEAR Center vision. In the third phase, finalists will be invited to present their proposals to a panel of Federal executives through 60-minute virtual meetings.",
  success: "This center is intended to provide innovation and modernization of the Federal government for the 21st century.",
  proof: "Fill Critical Professions: The Office of Personnel Management (OPM) created new direct hire authorities for Scientific, Technical, Engineering, and Mathematics (STEM) and cybersecurity workers. Hiring top talent in these fields is vital to long-term security and national competitiveness. Federal Cyber Reskilling Academy: The Chief Information Officers Council and Department of Education (ED) launched the first-ever Cyber Reskilling Academy, selecting a first cadre of 25 high-quality candidates from over 1,500 applicants. Top cyber talent in Government is essential to keeping America safe, secure, and competitive.  Learn to Buy Technology: USDS and the Office of Management and Budget (OMB) trained Contracting Officers to better understand and adopt technology industry language. Previously, the Federal Government bought technology the same way it acquired tanks and helicopters. The demands of tech procurement require new approaches.",
  gettingstarted: "Email your submissions to <a href='mailto:GEARCenter@gsa.gov'>GEARCenter@gsa.gov</a> and for more info visit <a href='https://www.challenge.gov/challenge/gear-center-challenge/'>challenge.gov/challenge/gear-center-challenge</a> and <a href='https://www.performance.gov/GEARcenter/'>performance.gov/GEARcenter</a>."
  };
var ntis = {title : "National Technical Information Service",
  opportunity : "The National Technical Information Service (NTIS) is part of the U.S. Department of Commerce. NTIS helps Federal agencies make better decisions about data, with data. They provide the support and structure to help their partners store, analyze, sort, and aggregate data in new ways securely.",
  elements: "NTIS will help implement: Open access and open data, using its existing legal authorities and capabilities to deliver government data services through agile partnerships with the private sector to rapidly execute innovative projects; Enable the private sector to develop new and improved data products and services; and support the entire delivery pipeline for trusted data networks with stringent privacy and security, including discovery, usability, analytics, interoperability, and standards.",
  success: "NTIS has also successfully implemented controlled access to critical Federal datasets with stringent privacy and security requirements such as the DEA Controlled Substance Data- base and the Federal Wage Determination Database. In addition, NTIS plans to collaborate with the National Institute of Standards and Technology for private sector delivery of Internet time and custom services. Just as making Global Positioning System (GPS) data publicly available in the early 1980s led to an explosion of GPS-related innovations, access to precision network timing could lead to another innovation surge.",
  proof: "Innovation Projects Involving Blockchain Technology: This project explains how Blockchain Technology is being utilized to develop solutions for the Office of Personnel Management and the U.S. Food and Drug Administration. NTIS manages an expanding portfolio of innovation projects that address important national issues such as fraud, waste and abuse; improvements to internal government operations; or enhancements to external citizen-facing services. As a trusted Fed-to-Fed advisor, NTIS helps other Federal programs improve their mission outcomes by leveraging data science services and emerging technologies.",
  gettingstarted: "After identifying a technical project need in your agency; prepare a proposal, submit it to the NTIS using this link businessopportunities@ntis.gov . After the project proposal is submitted to the NTIS advisory board.<br><br>Visit <a href='https://www.ntis.gov/'>ntis.gov</a> for more info."
  };
var op = {title : "Opportunity Project",
  opportunity : "The Opportunity Project of the U.S. Census Bureau is a collaborative effort between government agencies, technology companies, and nongovernment organizations to translate into user-friendly tools to solve real world problems for families, communities, and businesses nationwide.",
  elements: "Relevant sectors and groups such as Federal agencies, educational institutions, business, industry, and public-private partnerships are identified with specific suggestions for each group.",
  success: "To date, 30 Federal agencies and more than 100 technology companies, universities, and local communities have come together to develop solutions to improve access to economic opportunity, resulting in the creation of over 70 digital tools now helping families, schools, local officials and other members of the public.",
  proof: "Nepris Teachers and students connect with the right industry experts, virtually without having to spend much planning time or leaving the classroom while providing an effective way for companies to extend education outreach and create equity of access.<br><br><i>Disaster Awareness Games</i><br>Geoslug, a partnership between University of California, Santa Cruz, and Motiv, created a serious game using Federal disaster declaration and protective action data to engage young adults in preparing for emergencies.",
  gettingstarted: "To start with, this process view the opportunity project toolkit @ https://opportunity.census.gov/toolkit.html this is a step-by-step guide to the process used by the Census Bureau team, and adapt it for your own project. Use this process to run your own sprint. Visit <a href='https://opportunity.census.gov'>opportunity.census.gov</a> for more info."
  };
var pifs = {title : "Presidential Innovation Fellows",
  opportunity : "The Presidential Innovation Fellows program is housed for administrative purposes in the General Services Administration and all Fellows are hired by the General Services Administration (GSA), and then detailed to agencies. It pairs talented, diverse technologists and innovators with top civil servants and change-makers working at the highest levels of the Federal government to tackle some of the nation’s biggest challenges.",
  elements: "This position require ability to work in a modern technical, design and product environment. Many of the fellows have significant experience and records of accomplishment for delivering at a high-level, are proven leaders, and innovative thinkers. They look at domain expertise, functional expertise, and many other factors, including how the overall group will work together. the Presidential Innovation Fellowship is a twelve-month program. They accept applications in the spring, for the summer cohort of fellows.",
  success: "Check the link for the projects that the fellows have worked on: <a href='https://presidentialinnovationfellows.gov/projects/'>presidentialinnovationfellows.gov/projects</a><br><br>See the recent biography of 2019 fellows here: <a href='https://presidentialinnovationfellows.gov/fellows/'>presidentialinnovationfellows.gov/fellows</a>",
  proof: "Blue Button Initiative The Blue Button symbol signifies a website has functionality for customers download health records. It helps patients find places to get their health records electronically across the internet securely. A team of Presidential Innovation Fellows, in partnership with the Office of the National Coordinator for Health Information Technology (ONC), VA, DoD, & CMS to expand the Blue Button Initiatives including connector, Fast Healthcare Interoperability Resources (FHIR) API standards for interoperability and a FHIR test server in SITE and CMS. This increased the transparency and access to the health information, in order to make more informed decisions about their health, to care for their family members, and to share information with their providers.<br><br><i>FBI Risk Management</i><br>In collaboration with the FBI, the Presidential Innovation Fellows focused on the challenge of defining an ecosystem to help the private sector manage risk and mitigate threats, as part of the overall strategy to protect the US economy. To understand the challenge, Fellows met with a broad range of stakeholders in private sector companies—those on the front lines who are responsible for preventing attacks—to see firsthand their challenges.",
  gettingstarted: "Visit <a href='https://presidentialinnovationfellows.gov/'>presidentialinnovationfellows.gov</a> for more info on this program and how you can contact the program head at GSA."
  };
var tmf = {title : "Technology Modernization Fund",
  opportunity : "The Technology Modernization Fund (TMF) is an innovative funding vehicle to give agencies additional ways to deliver services to the American public more quickly, better secure sensitive systems and data, and use taxpayer dollars more efficiently. It is not a free source of money. Approved projects receive incremental funding and technical expertise to ensure project success. The Technology Modernization Board, comprised of Government IT leaders representing proven expertise in technology, transformation, and operations, oversees the TMF. The Modernizing Government Technology Act of 2017 authorized the TMF.",
  elements: "Agencies have a number of reasons to consider the Technology Modernization Fund (TMF) as the funding source for their proposed solution. The TMF reimagines how IT modernization projects are funded and executed. The five-year repayment window provides agencies with flexibility to invest in new IT modernization projects and leverage savings generated to repay the Fund.",
  success: "The TMF received $100 million in FY 2018 to fund modernization projects, and another $25 million in FY 2019. The President’s FY 2020 Budget requests an additional $150 million. A bill appropriating funding for a host of government agencies referred to as the Financial Services and General Government spending package is currently in conference between the House and Senate.",
  proof: "To date, the fund has awarded a total of $45 million to three projects, each of which has received initial funding to begin their modernization work. An additional $55 million remains in the fund and the board is continuing to review proposals for future awards: <ul><li>HUD Moves Away From Mainframe – $20 million</li><li>Energy Wants One Email Platform – $15 million</li><li>Farming Goes Digital—USDA – $10 million.</li></ul>",
  gettingstarted: "Agencies submit IT-related project proposals for the Board to review and consider. Agencies submit technology modernization proposals to the Board through a two-phased approval process. Proposal templates for the IPP and FPP phases are available in the Document & Templates. <br><br>Visit <a href='https://tmf.cio.gov'>tmf.cio.gov</a> for more info."
  };
var usds = {title : "United States Digital Service",
  opportunity : "USDS deploys small, responsive groups of designers, engineers, product managers, and bureaucracy specialists to work with and empower civil servants. Like 10x, USDS program live within the Technology Transformation Service (TTS), and is managed by the Office of Products and Programs of the General Services Administration. TTS manages the Digital Services Fund. USDS provides consultation services to Federal agencies on information technology. It seeks to improve and simplify digital service, and to improve Federal websites.",
  elements: "<ul><li>Design and user experience</li><li>Engineering</li><li>Product, strategy, and operations</li></ul>",
  success: "USDS’s Federal agency work spans across the Veterans Affairs, Department of Defense, Small Business Administration, General Services Administration, Department of Homeland Security, Department of Education, and Health and Human Services.",
  proof: "Creator of A Digital Services Playbook, to improve digital government, Draft Web Design Standards, building consistent, beautiful, Federal government websites, TechFAR Handbook, on Federal contracting and procurement, and College Scorecard, to help students and their families make more informed decisions about college selection.<br><br><i>Medicare Payment System Modernization</i><br>The Centers for Medicare and Medicaid Services (CMS) modernize its legacy system. Scott Haselton, a Senior Software Engineer on the Health and Human Services team at the United States Digital Service (USDS) who is the lead on the Medicare Payment Modernization project took on this challenge. They stand up a new cloud environment to continue processing claims; they started to migrate off the mainframe. The new cloud environment positions Medicare systems to scale and flex rapidly with how CMS processes claims and pays providers, transforming technology from a policy inhibitor to a multiplier.",
  gettingstarted: "<ul><li>Use the playbook to get started: <a href='https://playbook.cio.gov'>https://playbook.cio.gov</a></li><li>Check this site to see how USDS works: <a href='https://www.usds.gov/how-we-work'>https://www.usds.gov/how-we-work</a></li></ul>Visit <a href='https://www.usds.gov'>usds.gov</a> for more info."
  };
function resolvePlayList(item,index) {
  resolved_play = "<h3>"+item.title+"</h3><b>Opportunity</b><p>"+item.opportunity+"</p><b>Elements</b><p>"+item.elements+"</p><b>Finding Success</b><p>"+item.success+"</p><b>Evidence and Examples</b><p>"+item.proof+"</p><b>Getting Started</b><p>"+item.gettingstarted+"</p><hr>";
  resolved_play_list.push(resolved_play);
}
function handleClick(type,num,val) {
    if(type == "1")
    {
      playid = val
      playnum = num
    }
    if(type == "2")
    {
      userid = val
      usernum = num
    }
    if(playnum == 1)
    {
      if(usernum == 1)
      {
        play_list = [eighteenf,ntis,usds,coe]
      }
      if(usernum == 2)
      {
        play_list = []
      }
      if(usernum == 3)
      {
        play_list = [op]
      }
      if(usernum == 4)
      {
        play_list = [op,ch]
      }
      if(usernum == 5)
      {
        play_list = [op,ch]
      }
      if(usernum == 6)
      {
        play_list = [op,ch]
      }
    }
    if(playnum == 2)
    {
      if(usernum == 1)
      {
        play_list = [tmf,coe]
      }
      if(usernum == 2)
      {
        play_list = []
      }
      if(usernum == 3)
      {
        play_list = []
      }
      if(usernum == 4)
      {
        play_list = [gear]
      }
      if(usernum == 5)
      {
        play_list = [gear]
      }
      if(usernum == 6)
      {
        play_list = [gear]
      }
    }
    if(playnum == 3)
    {
      if(usernum == 1)
      {
        play_list = [tenx]
      }
      if(usernum == 2)
      {
        play_list = []
      }
      if(usernum == 3)
      {
        play_list = []
      }
      if(usernum == 4)
      {
        play_list = [gear]
      }
      if(usernum == 5)
      {
        play_list = [gear]
      }
      if(usernum == 6)
      {
        play_list = [gear]
      }
    }
    if(playnum == 4)
    {
      if(usernum == 1)
      {
        play_list = [adrf,bdp,usds,ntis,coe]
      }
      if(usernum == 2)
      {
        play_list = [adrf,bdp]
      }
      if(usernum == 3)
      {
        play_list = [adrf,bdp,op]
      }
      if(usernum == 4)
      {
        play_list = [bdp,gear,op]
      }
      if(usernum == 5)
      {
        play_list = [bdp,gear,op]
      }
      if(usernum == 6)
      {
        play_list = [bdp,gear,op]
      }
    }
     if(playnum == 5)
    {
      if(usernum == 1)
      {
        play_list = [ntis,coe]
      }
      if(usernum == 2)
      {
        play_list = []
      }
      if(usernum == 3)
      {
        play_list = []
      }
      if(usernum == 4)
      {
        play_list = [gear]
      }
      if(usernum == 5)
      {
        play_list = [gear]
      }
      if(usernum == 6)
      {
        play_list = [gear,pifs]
      }
    }
    if(playnum == 6)
    {
      if(usernum == 1)
      {
        play_list = [tenx,tmf]
      }
      if(usernum == 2)
      {
        play_list = []
      }
      if(usernum == 3)
      {
        play_list = []
      }
      if(usernum == 4)
      {
        play_list = []
      }
      if(usernum == 5)
      {
        play_list = []
      }
      if(usernum == 6)
      {
        play_list = []
      }
    }    
    if(playnum == 7)
    {
      if(usernum == 1)
      {
        play_list = [eighteenf]
      }
      if(usernum == 2)
      {
        play_list = []
      }
      if(usernum == 3)
      {
        play_list = []
      }
      if(usernum == 4)
      {
        play_list = [ch]
      }
      if(usernum == 5)
      {
        play_list = [ch]
      }
      if(usernum == 6)
      {
        play_list = [ch]
      }
    }
    if(playnum == 8)
    {
      if(usernum == 1)
      {
        play_list = [coe]
      }
      if(usernum == 2)
      {
        play_list = []
      }
      if(usernum == 3)
      {
        play_list = []
      }
      if(usernum == 4)
      {
        play_list = [ch,op]
      }
      if(usernum == 5)
      {
        play_list = [ch,op]
      }
      if(usernum == 6)
      {
        play_list = [ch,op]
      }
    }
    if(play_list.length == 0)
    {
      document.getElementById("play_display_lede").innerHTML = "For <b>" + userid + "</b> interested in <b>" + playid + "</b>, there are no relevant plays at this time. Why not try a different combination for inspiration!";
      document.getElementById("play_display_body").innerHTML = " ";
    }
    if(play_list.length == 1)
    {
      resolved_play_list = [];
      play_list.forEach(resolvePlayList);
      document.getElementById("play_display_lede").innerHTML = "For <b>" + userid + "</b> interested in <b>" + playid + "</b>, check out the following opportunity:";
      document.getElementById("play_display_body").innerHTML = resolved_play_list;
    }
    if(play_list.length > 1)
    {
      resolved_play_list = [];
      play_list.forEach(resolvePlayList);
      document.getElementById("play_display_lede").innerHTML = "For <b>" + userid + "</b> interested in <b>" + playid + "</b>, check out the following <b>" + play_list.length + "</b> opportunities:";
      document.getElementById("play_display_body").innerHTML = resolved_play_list;
    }
}
</script>

#### Resources to improve the management and use of Federal Data through discreet projects and programs <a name="top-of-page"></a>
##### *Prepared by the Federal Data Strategy Incubator Team*

<table>
  <tr>
    <th><b>What type of challenge are you solving for?</b></th>
    <th><b>What type of user are you solving for?</b></th>
  </tr>

  <tr>
    <td>
      <form>
      <b>Policy:</b><br>
        <input type="radio" name="playnum" onclick="handleClick(1,5,this.value);" value="Policy Expertise, Data Management, Legal and Consulting Practices">Policy Expertise, Data Management, Legal and Consulting Practices<br>
      <br><b>People:</b><br>
        <input type="radio" name="playnum" onclick="handleClick(1,3,this.value);" value="Partnership, Collaboration">Partnership, Collaboration<br>
        <input type="radio" name="playnum" onclick="handleClick(1,7,this.value);" value="Workforce Training and Development">Workforce Training and Development<br>
      <br><b>Process:</b><br>
        <input type="radio" name="playnum" onclick="handleClick(1,4,this.value);" value="Data Sharing">Data Sharing<br>
        <input type="radio" name="playnum" onclick="handleClick(1,6,this.value);" value="Finance and Administration">Finance and Administration<br>
      <br><b>Platform:</b><br>
        <input type="radio" name="playnum" onclick="handleClick(1,1,this.value);" value="Product Support (Website, Application, Tools)">Product Support (Website, Application, Tools)<br>
        <input type="radio" name="playnum" onclick="handleClick(1,2,this.value);" value="IT and Database (Fix Technical Problems)">IT and Database (Fix Technical Problems)<br>
        <input type="radio" name="playnum" onclick="handleClick(1,8,this.value);" value="Innovation, Technology, Analytics (Services)">Innovation, Technology, Analytics (Services)<br>
      </form>
    </td>
    <td>
      <form>
        <input type="radio" name="user" onclick="handleClick(2,1,this.value);" value="Federal Agencies">Federal Agencies<br>
        <input type="radio" name="user" onclick="handleClick(2,2,this.value);" value="State Agencies">State Agencies<br>
        <input type="radio" name="user" onclick="handleClick(2,3,this.value);" value="Local Agencies">Local Agencies<br>
        <input type="radio" name="user" onclick="handleClick(2,4,this.value);" value="Research Institutions or Other Non-Profits">Research Institutions or Other Non-Profits<br>
        <input type="radio" name="user" onclick="handleClick(2,5,this.value);" value="Commercial Entities">Commercial Entities<br>
        <input type="radio" name="user" onclick="handleClick(2,6,this.value);" value="Private Citizens">Private Citizens<br>
      </form>
    </td>
  </tr>
  <tr>
    <td colspan="2">
      <h4 id="play_display_lede">Selecting from the choices above will generate recommended plays here. To read more about the purpose and thinking behind the playbook, read the sections that follow below.</h4>
      <p id="play_display_body"> </p>
    </td>
  </tr>
</table>

##### *Prepared by the Federal Data Strategy Incubator Team*

1. [Purpose of the Data Incubator Playbook](#purpose)
2. [Goals of the Data Incubator Playbook](#goals)
3. [Key Plays](#key-plays)
4. [Finding the Right Opportunity](#decision-table)

## Purpose of the Data Incubator Playbook <a name="purpose"></a>
Q. How will Data Incubator Playbook Interactive Support Users?  
  
A. By using the Data Incubator Playbook Interactive, the user will choose their Play and will be directed to the latest available opportunity. The Opportunity Structure Page shows where and how to get help with the issue. Also, the Opportunity Structure Page provides the latest guidance and the website most relevant to the user’s challenge, circumstances, and interests.

[Back to Go](#top-of-page)

## Goals of the Data Incubator Playbook  <a name="goals"></a>
* To find information on new opportunities in data management and technology for public and private data users as of FY2020
* To identify resources to help agencies accelerate, replicate, and/or scale data proof points
* To provide lessons learned and various methods for agencies to launch their own data incubator process
* To improve management and use of Federal Data through discrete project and programs

[Back to Go](#top-of-page)

### Examples of challenges for users
* Collect and store data in a way that enables it to be easily managed and analyzed securely 
* Plan and use new technologies to make certain analyses more efficient
* Find Tools and Services that allow users of varying skill levels to interact with data
* Find Front-end user interface and visualizations as the back-end technology

[Back to Go](#top-of-page)

## Key Plays  <a name="key-plays"></a>
* Play 1:  Product Support (Website, Application, Tools) 
* Play 2:  IT and Database (Fix Technical Problems) 
* Play 3:  Partnership, Collaboration 
* Play 4:  Data Sharing 
* Play 5:  Policy Expertise, Data Management, Legal and Consulting Practices 
* Play 6:  	Finance and Administration 
* Play 7:  Workforce Training and Development 
* Play 8:  Innovation, Technology, Analytics (Services)  

![Key plays include product support, IT and database, partnership and collaboration, data sharing, policy expertise, finance and administration, workforce training and development, as well as innovation technology and analytics]({{ site.baseurl }}/assets/img/incubatorplaybook/keyPlays.png "Key plays")  

### Opportunities		
* 10x Process
* 18F
* Administrative Data Research Facility (ADRF), New York University
* Big Data Project (BDP)
* Challenge.gov (CH)
* Government Effectiveness Advanced Research (GEAR) Center
* National Technical Information Service (NTIS)
* Opportunity Project (OP)
* Presidential Innovation Fellows Program (PIF)
* Technology Modernization Fund (TMF)
* Phase One: Initial Project Proposal (IPP)
* Phase Two: Full Project Proposal (FPP)
* United States Digital Service (USDS) 
* Center of Excellence (CoE) 

[Back to Go](#top-of-page)