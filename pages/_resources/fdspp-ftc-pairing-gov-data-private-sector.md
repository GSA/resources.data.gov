---
name: Pairing Government Data with Private-Sector Ingenuity to Take on Unwanted Calls
slug: fdspp-ftc-pairing-gov-data-private-sector
description: The Federal Trade Commission (FTC) releases data from millions of
  consumer complaints about unwanted calls to help fuel a myriad of
  private-sector solutions to tackle the problem. The FTC’s work serves as an
  example of how agencies can work with the private sector to encourage the
  innovative use of government data toward solutions that benefit the public.
source: Federal Data Strategy
category: Case studies & examples
tags:
  - data cleaning
  - collaboration
  - internal-todo
policy_tags:
  - FDS Principle 05 Harness Existing Data
  - FDS Principle 07 Demonstrate Responsiveness
  - FDS Practice 02 Assess and Balance the Needs of Stakeholders
  - FDS Practice 04 Use Data to Guide Decision-Making
  - FDS Practice 12 Govern Data to Protect Confidentiality and Privacy
  - FDS Practice 28 Align Quality with Intended Use
  - FDS Practice 29 Design Data for Use and Re-Use
format: FDS Proof Point
details: >-
  ### Pairing Government Data with Private-Sector Ingenuity to Take on Unwanted
  Calls


  June 21, 2019


  The Federal Trade Commission (FTC) releases data from millions of consumer complaints about unwanted calls to help fuel a myriad of private-sector solutions to tackle the problem. By listening closely to the needs of companies working on call-blocking solutions, the agency optimized the timing and content of data releases to enhance the efficacy of these tools. The FTC’s work serves as an example of how agencies can work with the private sector to encourage the innovative use of government data toward solutions that benefit the public.


  #### The Challenge


  The FTC launched the National Do Not Call Registry® in 2003 to provide an easy and efficient way for consumers to tell companies they do not want to receive most live telemarketing sales calls. The FTC’s Robocall Rule, which went into effect on September 1, 2009, prohibits telemarketers from using pre-recorded messages to contact consumers, they have previously authorized them in writing to call. Telemarketers and sellers must remove numbers added to the Registry database from their call lists or face steep fines. About 235 million telephone numbers are currently registered, and nearly 18,000 organizations accessed the Registry last year.


  But even as the Registry proved effective in stopping unwanted sales calls by compliant companies, the advance of new telecommunications technologies began to make it possible for scammers and illegal telemarketers to easily call people from anywhere in the world at very little cost. In the year following the Registry’s launch, the FTC received about 580,000 complaints about unwanted calls, and by 2012 that number had soared to 3.8 million.


  > “Scammers have altered their randomization patterns to be faster…using more numbers with fewer calls for example. To combat this, the industry needs to use many data points to make decisions about call activity. As a component of analytics and machine learning, user feedback (complaints) can be very useful as hints as to what might be going on for a given phone number. However, that information has to be captured quickly and ingested into the various solutions as soon as possible to be effective. Moving from monthly to daily makes a big difference.”\

  > Kent Welch, Chief Data Officer - First Orion


  #### Collaborating to find an innovative solution


  The FTC recognized that call-blocking solutions were needed to stop unwanted calls from those who intentionally disregard the Registry to defraud consumers. In 2012, the agency organized the Robocall Challenge contest to help solve the problem by spurring innovation it the marketplace. The two winners, selected from nearly 800 submissions, proposed using automated algorithms that identify and block “spam” callers.


  In the years following the Robocall Challenge, numerous call-blocking solutions entered the market. FTC announced several more technology challenges targeted at illegal robocalls and other unwanted calls, while continuing to engage with technologists and private-sector innovators working to find solutions. Without promoting any specific solution, the FTC’s outreach and consumer education teams worked to raise consumer awareness of the availability of these tools.


  #### Putting Complaint Data to Work


  Like the winners of the Robocall Challenge, many call-blockers rely on carefully calibrated algorithms to make sure people get the calls they want and not the ones they don’t. They use “blacklists” – databases of telephone numbers that have received significant consumer complaints – as a way to determine which calls should be blocked or flagged before they reach consumers’ phones.


  In 2012, the FTC began making the caller ID numbers contained in millions of unwanted call complaints available for use by call-blockers. This was an unconventional move – the FTC collects complaints from the public primarily for investigation and enforcement purposes but did not typically release that information. But agency leadership saw that, just as technological advances were driving the problem of increased unwanted calls, technology would be a critical part of the solution for reducing unwanted calls.


  > “We’ve leveraged the FTC’s daily complaint data to improve our TrueSpam scores which help identify robocallers, telemarketers, scammers, and other un-wanted calls. Specifically, as a relatively large independent data source, the FTC’s data has assisted us in validating new data sources, methods and algorithms, and helped us improve our real-time robocall detection methods.”\

  > Greg Blumstein, Founder & CEO - TrueCNAM


  #### Fine Tuning the Data Feed


  Initially, unwanted call data was released every two weeks, and only the date of the unwanted call and the originating phone number was released. However, through continued dialogue with call-blocking companies, the agency learned that more data was needed and with much greater frequency. The FTC’s bi-weekly data releases became insufficient for call blockers to optimize their algorithms. Fraudsters had learned to evade call blocking by switching phone numbers frequently – using a number for just days or even just hours. Call blockers needed to match this pace but risked blocking legitimate numbers. With more information about the calls, they could become more aggressive in blocking calls without a corresponding increase in false positives.


  > “DNC complaint data provides an important signal used in RoboKiller’s call blocking algorithm. The spammers continuously update their tactics, so any data the call blocking industry can integrate to improve accuracy is valuable. Complaint data tells a story from the end customers perspective that helps us understand and learn how the telemarketers evolve their methods and messages over time.”\

  > Ethan Garr, SVP of Strategic Growth - RoboKiller


  #### National Do Not Call Registry® Complaints by Year


  ![A graph of National Do Not Call Registry® Complaints by Year](https://strategy.data.gov/assets/img/posts/2019-06-21-image001.png "A graph of National Do Not Call Registry® Complaints by Year")


  In response to industry input, the FTC began releasing unwanted call data each weekday beginning in August 2017. This dramatic improvement in the data’s “speed to market” would not have been possible without tackling bottlenecks in FTC’s data release process. First, the agency granted blanket authority to release specific categories of data on a daily basis. Next, manual work was successfully automated using Python. The following tasks together can now be completed every 24 hours, taking only 20 seconds and requiring minimal human oversight:


  1. pull the data from the database;

  2. filter the data as appropriate;

  3. save and back up data; and

  4. send file to a team that posts it to the ftc.gov/DNCData each weekday.


  With the automated process, the agency also began releasing specific categories of data about each complaint to provide richer detail than before. The consumer’s city and state and an indicator of whether the call was a robocall were relatively simple additions to the data released. But call blockers also needed an entirely new field identifying the subject matter of the call. Adding a new field to a consumer-facing form generally requires potentially costly corresponding changes to the back end of a database. FTC’s data analysts experimented in a newly available analytics sandbox to arrive at a creative solution to collect and store this information without any changes to the back end. Their code, again written in Python, appends data collected in a new dropdown field in the complaint form to an existing general comments field in the back end of the database. The data are then automatically isolated and extracted as part of the daily data pull. This solution is estimated to have saved the agency tens of thousands of dollars.


  > “The key to winning the war against robocalls is having fast, robust data. Having daily access to the FTC's DNC complaint data with no strings attached provides a huge benefit to the entire robocall blocking industry.”\

  > Aaron Foss, Founder - Nomorobo


  Today, the FTC’s database of consumer complaints about unwanted calls is the most robust in the country. In 2018 alone, the FTC received 5.8 million complaints from consumers about unwanted calls, and about 65 percent were robocalls (defined under FTC rules as calls using prerecorded messages). Industry members have noted that FTC data are tremendously important in helping them to adapt their detection and blocking algorithms in real-time. By giving call-blockers the ability to rapidly incorporate these data into their solutions, the FTC has converted consumer complaints into fuel for industry solutions aimed at solving the problem. There are a multitude of call blocking apps, devices, and built-in services to block calls in the marketplace today. There is more work to be done, but public sector data paired with private sector ingenuity is working to stem the tide.


  #### Postscript


  To download the most recent daily file, go to [ftc.gov/DNCData](https://www.ftc.gov/DNCData). To learn more about FTC open data sets go to [data.gov](https://catalog.data.gov/organization/federal-trade-commission).


  To receive updates on activities related to the Federal Data Strategy, please [sign up for the newsletter](https://public.govdelivery.com/accounts/USGSA/subscribers/new?topic_id=USGSA_756).


  ![Federal Data Strategy Incubator Project Logo](https://strategy.data.gov/assets/img/federal-data-strategy-incubator-project-logo.png)


  #### The Federal Data Strategy Incubator Project


  The Incubator Project helps federal data practitioners think through how to improve government services, enabling the public to get the most out of federal data. This Proof Point and others will highlight the many successes and challenges data innovators face every day, revealing valuable lessons learned to share with data practitioners throughout government.
examples: ""
link: https://strategy.data.gov/proof-points/2019/06/21/pairing-government-data-with-private-sector-ingenuity-take-on-unwanted-calls/
layout: resource
toc: true
publish: false
---
