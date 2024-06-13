<template>
  <div class="container">
    
    <div style="display: flex; justify-content: center;">
      <h1>Apply Our Insights</h1>
      <img height="50px" src="../assets/resources/flag.png" style="margin-left: 5px;"/>
    </div>

    <div class="row" style="padding-top: 2rem">                       
      <div class="col-sm-6 col-12" style="margin-top: 1rem">
        <h5 style="font-weight: 600; margin-bottom: 8px">FAQ</h5>
        <div style="margin-bottom: 20px">The most common questions. Read more <a href="https://www.selfpetitionusa.com/faq" class="link">HERE</a></div>
          <div class="box" v-on:click="faqToggle('one')">1. Disclaimer<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
            <div v-if="descriptionVisible.one" class="description">
              <div>This website, shares my family personal immigration journey along with a general overview of U.S. immigration laws and practices. Please note that all information provided here is for general and informational purposes only and does not constitute legal advice. I am not an attorney, nor aiming to provide a legal advice. Additionally, I cannot assure the approval of any petitions because I have no control what and when you file. Ensure to verify that the information on this website remains up to date when you are reading it and applicable to your situation before taking any action.</div>
              <div>Given the complexities and potential risks involved in the immigration process, it is recommended that you consult with an experienced immigration attorney before making any decisions about your individual situation.</div>
            </div>
          <div class="box" v-on:click="faqToggle('two')">2. What self-petitioning options are there?<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
           <div v-if="descriptionVisible.two" class="description">
              <div>Self-petitioning options allow certain individuals to apply for a U.S. Green Card without the need for a family member or employer to sponsor them. The main self-petitioning options include:</div>
              <div><span style="font-weight: 600">EB-1A Visa for Aliens with Extraordinary Ability:</span> This category is for individuals who have demonstrated extraordinary ability in the sciences, arts, education, business, or athletics through sustained national or international acclaim.</div>
              <div><span style="font-weight: 600">National Interest Waiver (NIW):</span> This option under the EB-2 visa category is divided into two sub-categories.</div>
              <ul>
                <li><span style="font-weight: 600">Advanced Degree:</span> This is for individuals who hold an advanced degree (beyond a bachelor's) and whose employment in the United States would greatly benefit the nation.</li>
                <li><span style="font-weight: 600">Exceptional Ability:</span> This is for individuals who possess exceptional ability in the sciences, arts, or business, and whose employment would substantially benefit the U.S. nationally.</li>
              </ul>
              <div><span style="font-weight: 600">EB-5 Investor Visa:</span> It requires a significant investment in a U.S. business that creates jobs for American workers.</div>
              <div>Comparing EB-1A and EB-2 NIW: The EB-1A visa is reserved for individuals who are among the very top of their field, while EB-2 NIW category may be easier to obtain as it focuses on the national impact of an applicant's work and does not require to be at the pinnacle of the field (however generally considered a lower priority for processing time).</div>
            </div>
          <div class="box" v-on:click="faqToggle('three')">3. What's the difference between PERM and Self-petitioning?<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
           <div v-if="descriptionVisible.three" class="description">
              <div><span style="font-weight: 600">PERM</span> is an employer-driven process where a U.S. employer must demonstrate that there are no qualified U.S. workers available for a specific job, thus justifying the hiring of a foreign worker. This process is primarily used for EB-2 and EB-3 visa categories and requires the employer to undergo labor certification.</div>
              <div><span style="font-weight: 600">Self-petitioning</span>, on the other hand, allows individuals to apply for a U.S. green card without needing an employer's sponsorship. This option is typically available under categories like EB-1A (for extraordinary ability) and EB-2 NIW (National Interest Waiver), where the applicant can demonstrate exceptional qualifications or that their work significantly benefits the U.S. national interest.</div>
              <div>For PERM-based applications, a job change (volountary, layoffs) before green card approval can necessitate restarting the labor certification process, as it is specifically tied to the original job description and location. In contrast, self-petitioning applicants have more flexibility, as their petitions are not employer-specific, but they must continue working in their field of national importance.</div>
            </div>
          <div class="box" v-on:click="faqToggle('four')">4. Can I self-petition from overseas?<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
           <div v-if="descriptionVisible.four" class="description">
              <div>Yes, you can self-petition from overseas (EB-2 NIW, EB-1A). Once approved, if you are already in the U.S., you can apply for an adjustment of status to change your current visa to a green card without leaving the country. If you are overseas, you will undergo consular processing, which involves applying for an immigrant visa at a U.S. consulate or embassy in your home country.</div>
              <div><span style="font-weight: 600">Consular Processing (If Overseas):</span> You will undergo consular processing through a U.S. embassy or consulate in your home country. This will involve submitting additional forms, undergoing an interview, and obtaining an immigrant visa. Once you have the visa, you can enter the U.S. as a permanent resident.</div>
              <div><span style="font-weight: 600">Adjustment of Status (If in the U.S.):</span> If you are already in the U.S. on a non-immigrant visa, you can file Form I-485, Application to Register Permanent Residence or Adjust Status. This allows you to change your status to that of a permanent resident without leaving the country.</div>
            </div>
          <div class="box" v-on:click="faqToggle('five')">5. Shall I-485 be filed together with I-140?<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
           <div v-if="descriptionVisible.five" class="description">
              <div>Answer largely depends on your individual needs and visa status.</div>
              <div><span style="font-weight: 600">Once Form I-485 is filed, the applicant can legally stay in the U.S. until a decision is made</span>, even if their previous nonimmigrant status expires. Filing only Form I-140 does not confer interim benefits like employment authorization (change employers while green card application is pending) or advance parole (travel internationally and re-enter the U.S. without jeopardizing application), and the applicant must maintain a valid legal status in the U.S. until they can file Form I-485 or complete the green card process.</div>
              <div><span style="font-weight: 600">For individuals on H1B or L1 visas</span>, filing I-485 concurrently with I-140 is generally an option worth to consider. These visas allow for dual intent, meaning you can intend to immigrate permanently while holding a temporary work visa. Filing I-485 concurrently provides benefits such as Employment Authorization Document (EAD) during the time your petition is pending. This allows you to change the employer, which would not be otherwise possible on L1, or maintain your legal status in the event your H1B is not renewed or is terminated. Additionally, concurrent filing can safeguard you against potential delays caused by future changes in visa availability or retrogression in the Visa Bulletin. The downside is that if your I-140 is denied, you will lose the money paid for the I-485 filing fee.</div>
              <div>Since the <span style="font-weight: 600">premium processing</span> was introduced and expedites the adjudication of Form I-140, the need for concurrent filing might seem less urgent - USCIS provides their decision within a couple of weeks (exact timeframe depends on the petition type).</div>
              <div>There are however situations when filing I-485 concurrently with I-140 can be very risky, for example while on F-1 OPT. <span style="font-weight: 600">If your I-140 is denied, you would immediately lose your F-1 status and could become out of status</span>. There are a couple of exceptions where you might still want to consider concurrent filing on F-1 OPT:</div>
              <ul>
                <li><span style="font-weight: 600">Retrogression:</span> If your home country is experiencing visa retrogression (a backlog in available visa numbers), filing I-485 early can help you secure a place in line and avoid potential delays.</li>
                <li><span style="font-weight: 600">End of OPT:</span> If your OPT is about to expire and you haven't secured an H-1B visa, filing I-485 could be a way to maintain your legal status while waiting for a decision on your green card application.</li>
              </ul>
            </div>
          <div class="box" v-on:click="faqToggle('six')">6. What is the EB-2 NIW processing time?<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
           <div v-if="descriptionVisible.six" class="description">
              <div>Visit the USCIS website to view current processing times: <a target="a_blank" class="link" style="font-weight: 500" href="https://egov.uscis.gov/processing-times/">USCIS Processing Times</a></div>
              <div>For historical data, check: <a target="a_blank" class="link" style="font-weight: 500" href="https://egov.uscis.gov/processing-times/historic-pt">Historic Processing Times</a></div>
              <div>In 2019, our concurrent filing was approved in 9.5 months, and we received our green card documents within the following three weeks (see above a seperate section with a detailed timeline).</div>
              <div>Since 2012, processing times have increased, partly due to the new requirement for a personal interview. By 2018, some applicants experienced over a year's wait for decisions on I-140 petitions without premium processing. Remember that processing times for similar applications submitted simultaneously can differ greatly, and it seems that no one has successfully identified a reliable method to predict these timelines.</div>
              <div>Since January 2023, premium processing has been available for both EB1-A and EB2-NIW petitions, which guarantees a decision within 15 days for EB-1A and 45 days for EB2-NIW. However, there are mixed opinions on whether premium processing increases the likelihood of receiving a Request for Evidence (RFE).</div>
            </div>
          <div class="box" v-on:click="faqToggle('seven')">7. How to source reference letters?<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
           <div v-if="descriptionVisible.seven" class="description">
              <div>Reference letters play a crucial role in the success of your application. The stronger the praise from your referrers, the better your chances of approval. This is NOT the time for humility. This IS the time to cast yourself in as positive light as possible.</div>
              <div>It's important to remember that the primary objective of reference letters is to verify the accuracy of the statements in your petition. Therefore, it's crucial that these letters contain arguments that enhance your credibility and substantiate the assertions you've presented in your cover letter, but with additional supporting details. It's also essential to avoid generic content that might not hold up under the scrutiny of USCIS. To address these concerns, we have determined that <span style="font-weight: 600">creating the reference letters yourself and then sending them to your referers yields the most effective results</span>.</div>
            </div>
          <div class="box" v-on:click="faqToggle('eight')">8. How many reference letters do I need?<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
           <div v-if="descriptionVisible.eight" class="description">
              <div>The USCIS doesn't require a specific number of reference letters for EB-2 NIW petitions, but typically, at least three are submitted. Many petitioners choose to include 5-7 letters; we submitted three and were successfully approved.</div>
              <div>The focus should be on the quality of the referrers and the content of the letters rather than the quantity. These letters should effectively showcase your qualifications, achievements, and how your work serves the national interest. Letters from recognized experts, authorities in your field, or objective third parties carry more significance (including letters from your clients). Letters from people who are closely related or not well-known in the field may be seen as biased and, while they are unlikely to negatively affect your application, they may not significantly strengthen it either.</div>
            </div>
          <div class="box" v-on:click="faqToggle('nine')">9. What nationalities can file EB-2 NIW?<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
           <div v-if="descriptionVisible.nine" class="description">
              <div>There are no restrictions based on nationality when submitting Form I-140. However, those intending to apply for adjustment of status or consular processing must ensure that the priority date for their nationality (based on the country of birth) is currently valid. It's worth noting that there is often a significant backlog for individuals from China and India.</div>
              <div>The priority dates are subject to monthly changes, and the USCIS is actively dedicated to addressing the existing backlog. To stay updated, you can review the current and upcoming bulletin through the following link: <a target="a_blank" class="link" style="font-weight: 500" href="https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html">Visa Bulletin</a></div>
            </div>
          <div class="box" v-on:click="faqToggle('ten')">10. How much does EB-2 NIW cost?<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
           <div v-if="descriptionVisible.ten" class="description">
              <div>Typically, when pursuing EB-2 NIW, you have the option to initiate the process independently or with the assistance of an attorney.</div>
              <div>The USCIS filing fees have recently increased. Please always ensure to check the latest fees on USCIS website.</div>
              <div style="font-weight: 600">Form I-140, Immigrant Petition for Alien Worker</div>
                <ul>
                  <li>Starting April 1, 2024, the fee increased from $700 to $1,015</li>
                  <li>This amount includes an additional Asylum Program Fee of $300 (50% of $600 applicable to self-petitioning individuals)</li>
                </ul>
              <div style="font-weight: 600">Form I-485, Application to Register Permanent Residence or Adjust Status</div>
                <ul>
                  <li>Starting April 1, 2024, the fee increased to $1,440 (or $950 for applicants under 14 under certain conditions)</li>
                  <li>The biometrics fee, previously $85, is now included in the filing fee</li>
                </ul>
              <div style="font-weight: 600">Form I-765, Application for Employment Authorization Document (EAD)</div>
                <ul>
                  <li>This is optional, the fee is $550. If filed together with Form I-485, the fee is dicounted by 50% to $260</li>
                </ul>
              <div style="font-weight: 600">Form I-131, Application for Travel Document</div>
                <ul>
                  <li>This is optional, the fee is $630</li>
                </ul>
              <div style="font-weight: 600">Premium Processing:</div>
                <ul>
                  <li>This is optional, the fee is $2,500</li>
                </ul>
              <div style="font-weight: 600">Form I-693, Medical Examination:</div>
                <ul>
                  <li>Costs vary but usually range from a few hundred dollars to more</li>
                </ul>
              <div>You can self petition with or without an attorney. Based on our research involving over 30 attorneys (California, New York) during our preparation for filing an EB-2 NIW application, enlisting the services of an attorney typically entails standard legal charges of approximately $8,000-15,000 for the main applicant. Dependents, including children and spouses, often receive a discounted rate of approximately 50%. The exact fee might differ depending on factors such as the complexity of your case, the state where the attorney practices, and the particular attorney you decide to work with.</div>
            </div>
          <div class="box" v-on:click="faqToggle('eleven')">11. Do I need to file ETA 9089?<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
           <div v-if="descriptionVisible.eleven" class="description">
              <div>When we submitted the application, Form ETA-750B was primarily in use, but it has since been superseded by ETA-9089. It's important to always check the USCIS and DOL websites for the latest form requirements.</div>
              <div>Pay attention to the version of ETA-9089 you choose to use. Clicking the <a target="a_blank" class="link" style="font-weight: 500" href="https://www.uscis.gov/forms/filing-guidance/checklist-of-required-initial-evidence-for-form-i-140-for-informational-purposes-only">"FORM ETA 9089" link on the USCIS website</a> directs you to an outdated version of the form, with an expiration date of 2021. Conversely, the <a target="a_blank" class="link" style="font-weight: 500" href="https://www.dol.gov/agencies/eta/foreign-labor/forms">DOL website offers the updated form</a>, which is valid until 2025. This discrepancy is due to an oversight by USCIS in not refreshing their website to display the current form.</div>
              <div>Although USCIS has not formally published instructions about the updated ETA-9089 form, the American Immigration Lawyers Association (AILA) has disseminated an internal memo indicating that USCIS has informed lawyers to utilize the new version of ETA-9089, rather than the outdated version (still listed on the USCIS website with a 2021 expiration date) or the ETA-750, which was accepted before.</div>
            </div>
          <div class="box" v-on:click="faqToggle('twelve')">12. Why are your templates in the third person (Mr. Appleseed, etc)?<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
           <div v-if="descriptionVisible.twelve" class="description">
              <div>Employing the "third form" or "lawyer perspective" language, while not mandatory, can enhance the formality of your application, whether you submit it yourself or via an attorney. However, it's important to note that your application will not be rejected based solely on the style of language used. Both approaches are perfectly valid. Remember, you serve dual roles in this process: as the petitioner, the one who files the application, and as the beneficiary, the one for whom the application is filed.</div>
            </div>
          <div class="box" v-on:click="faqToggle('thirteen')">13. Why do you use repetitions across the templates?<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
           <div v-if="descriptionVisible.thirteen" class="description">
              <div>In our I-140 cover letter and reference letters we deliberately incorporated repetitions, a strategy proven successful granting us a green card. Given that USCIS clerks often skim through documentation, these repetitions ensure that the core message was effectively conveyed. The review process of each application follows a specific order:</div>
              <ul>
                <li><span style="font-weight: 600">Step 1:</span> Determine if the applicant meets the Advance Degree criteria by assessing the relevant section in the cover letter.</li>
                <li><span style="font-weight: 600">Step 2:</span> Evaluate whether the applicant satisfies Prong 1.</li>
                <li><span style="font-weight: 600">Step 3:</span> Evaluate whether the applicant satisfies Prong 2.</li>
                <li><span style="font-weight: 600">Step 4:</span> Evaluate whether the applicant satisfies Prong 3.</li>
                <li><span style="font-weight: 600">Step 5:</span> Conclude the review by approving the petition if all criteria are met; otherwise, issue a Request for Evidence (RFE) letter. In rare instances, a straight deny may occur.</li>
              </ul>
              <div>Evidence presented, such as degree, serves as support for both Step 1 (Advance Degree criteria) and Step 3 (Prong 2 criteria). Similarly, reference letters address criteria for Prong 1 (national importance of job and its substantial merit) and Prong 2 (capacity to advance the proposed endeavor), sometimes even Prong 3. This triggers repetitions and reusing the same evidence.</div>
            </div>
          <div class="box" v-on:click="faqToggle('fourteen')">14. List of evidence that we used in our petition<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
           <div v-if="descriptionVisible.fourteen" class="description">
              <div>The specific documents required for your application can vary based on your individual background and whether you choose to file separately (I-140 only) or concurrently (I-140 with Adjustment of Status).</div>
              <div>In our experience with concurrent filing, apart from the forms which one shall take from USCIS website (to make sure they are up to date), we included the below documents. Some of these were referenced in the appendix of the cover letter, while others, being more general and not specifically relevant to the National Interest Waiver discussion, were not listed in the cover letter.</div>
              <ul>
                <li>Copies of Birth Certificates, with certified English translation (for petitioner and relatives also applying for permanent residence).</li>
                <li>Marriage Certificate, with certified English translation.</li>
                <li>Passport information pages, all U.S. visas, and I-94 (google I-94 and download the most recent admission record).</li>
                <li>All I-797 Approval Notices for previous visa petitions, DS-2019s, and/or I-20s.</li>
                <li>Three most recent pay statements for the current employment (3 recent pay stubs for the spouse, as well).</li>
                <li>W-2s for all years in the United States that we filed tax returns (and spouse, as well if taxes were filed separately).</li>
                <li>Certified criminal dispositions (not applicable to us).</li>
                <li>Sealed Medical Exam Reports we didn’t provide with initial filing, but when requested by USCIS, to avoid the Report to expire by the time Adjustment of Status Application(s) was adjudicated.</li>
              </ul>
              <div>For National Interest Waiver:</div>
              <ul>  
                <li>Current Resume.</li>
                <li>Copies of all Bachelor’s and Master’s Diplomas; including transcripts and certified English translation.</li>
                <li>Professional certifications, with criteria for granting that certification.</li>
                <li>Copies Membership cards in professional organizations, with criteria for joining.</li>
                <li>Reference Letters - in our case, we included letters from a list of experts and clients. The petitioner had not worked directly with some of these individuals, they had received services from the petitioner. We also provided their Resumes and LinkedIn profiles to detail the referrers' backgrounds, establish their expertise, and explain why they support the case.</li>
                <li>Articles about the field of endeavor, and its importance to the United States. Highlighted petitioner’s name everywhere where it was mentioned.</li>
              </ul>
            </div>
          <div class="box" v-on:click="faqToggle('fifteen')">15. How long should be my petition?<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
           <div v-if="descriptionVisible.fifteen" class="description">
              <div>Keep in mind that when you see 50+ or 100+ pages application, it includes a number of attachments and scans, which is far more than a sole cover letter. The whole petition includes, among others: cover letter, reference letters, I-140 and ETA-9089 forms, copies and certified translations of your diplomas, certificates, Resume, quoted articles, e-mails & letter correspondence (...).</div>
              <div>Below, I will delve into the details of the appropriate lengths for cover letters and reference letters, noting that the number of scanned pages for forms and supporting evidence naturally varies from individual to individual.</div>
              <div>The required length for a NIW cover letter or reference letters is not strictly defined by law or USCIS guidelines, which may contribute to the ongoing debate about the ideal length. Typically, the length varies depending on the necessity to present information clearly and comprehensively. For the cover letter, a concise version usually ranges from <span style="font-weight: 600">5-10 pages</span> and often references supporting documents and exhibits to clarify specific details. On the other hand, a more detailed approach might result in a cover letter spanning <span style="font-weight: 600">20-40 pages</span>, incorporating essential details and extensive quotations directly. Similarly, the length of reference letters can vary. Typically, concise letters are about 1-2 pages each. However, it is not uncommon to encounter reference letters that extend up to 5-7 pages. The goal is always to ensure clarity and thoroughness, tailored to the specifics of the individual case.</div>
              <div>Our application featured a <span style="font-weight: 600">cover letter that was 9 pages long</span>, including a list of appendices, and three reference letters, <span style="font-weight: 600">each ranging from 1 to 2 pages</span> in length.</div>
            </div>
          <div class="box" v-on:click="faqToggle('sixteen')">16. What is Request for Evidence (RFE)?<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
           <div v-if="descriptionVisible.sixteen" class="description">
              <div>A Request for Evidence (RFE) is a notice sent by the USCIS when an application or petition lacks required documentation or when the USCIS needs more information to proceed with the processing of an application. Receiving an RFE does not necessarily indicate that the application will be denied, but it does require the applicant to provide additional evidence to support their case within a specified timeframe. Failure to respond adequately to an RFE can result in the denial of the application.</div>
              <div>The issues highlighted in a RFE can vary from minor lapses, such as forgetting to sign Form I-140, missing a diploma's translation, or submitting an expired medical Form I-693 required for Form I-485, to more substantial critiques that underscore the weaknesses of the petition.</div>
              <div>It is crucial that all documents submitted were valid as of the priority date of the initial filing of the petition. Therefore, careful attention should be paid to the dates on any evidence used.</div>
              <div>Although our petition did not receive an RFE, I have had the opportunity to examine numerous RFEs shown to me by others and to study many AAO Non-Precedent Decisions. A recurring issue in EB-2 NIW RFEs pertains to Prong-1, focusing on the national importance of the petitioner's proposed endeavor. Petitioners often err by emphasizing the significance of their industry or field instead of their specific project. The essential evaluation concentrates on the specific project or activity the foreign national intends to undertake, not just the overall importance of the field or industry.</div>
            </div>
          <div class="box" v-on:click="faqToggle('seventeen')">17. What if my petition is denied?<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
           <div v-if="descriptionVisible.seventeen" class="description">
              <div>An I-140 denial doesn't automatically end your nonimmigrant status. You can typically continue working and living in the U.S. under your existing visa, as long as it remains valid. It's also possible to reapply for a denied I-140 with stronger evidence or to simultaneously file multiple I-140 petitions under different employment-based categories, like EB1-A or EB2-NIW. If one petition gets approved, you can move forward with your green card application.</div>
              <div>However, while a denied I-140 doesn't immediately affect your current visa status, it could make future nonimmigrant visa applications more challenging. Consular officers may scrutinize your intent to return to your home country after your authorized stay, especially if you've expressed immigrant intent in the past by filing for a green card.</div>
              <div>Filing an I-140 petition concurrently with an I-485 Adjustment of Status application can be riskier. If the I-140 is denied, it can also lead to the denial of the I-485, potentially jeopardizing your legal status in the U.S. Since the I-485 involves adjusting your status to that of a permanent resident, if it's denied due to the I-140 denial, you could potentially lose your nonimmigrant status as well. This could mean having to leave the U.S. if you don't have other valid visas or options.</div>
              <div>It's important to remember that not all nonimmigrant visas are the same. Some categories, such as the H-1B visa, allow for "dual intent," meaning you can pursue a green card while maintaining your nonimmigrant status.</div>    
            </div>
          <div class="box" v-on:click="faqToggle('eighteen')">18. What is Visa Bulletin backlog?<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
           <div v-if="descriptionVisible.eighteen" class="description">
              <div>The Visa Bulletin backlog refers to the waiting list for individuals seeking green cards in the United States who are subject to annual numerical limits. These limits are set by Congress and vary depending on the category of the green card (family-sponsored or employment-based) and the applicant's country of origin.</div>
              <div>The backlog exists because the demand for green cards often exceeds the available supply within a given fiscal year. This means that even if an applicant is eligible for a green card, they may have to wait several years before a visa number becomes available for them. The wait time can vary significantly depending on the category and the country of origin, with some countries experiencing much longer backlogs than others.</div>
              <div>The U.S. Department of State publishes the Visa Bulletin each month. It lists the cut-off dates for each category and country of chargeability. If an applicant's priority date (PD) is earlier than the cut-off date listed in the Visa Bulletin, they can move forward with the final stages of the green card process, such as filing for Adjustment of Status or attending a visa interview.</div>
            </div>
          <div class="box" v-on:click="faqToggle('nineteen')">19. Do I need an attorney to file EB-2 NIW?<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
           <div v-if="descriptionVisible.nineteen" class="description">
              <div>While filing an EB-2 NIW petition doesn't legally require an attorney, allowing you to self-petition, it's important to understand the limitations of their assistance. Attorneys can help draft the cover letter and reference letters, but the heavy lifting of gathering evidence and crafting a compelling narrative showcasing your qualifications rests solely on your shoulders.</div>
              <div>Many busy professionals choose to hire attorneys to save time and potentially expedite the process. However, attorney experiences vary, and some clients have reported delays, errors, and even additional requests for evidence (RFEs) from USCIS due to their attorney's work. While some attorneys may offer to refund their fees if a case is denied, this is not a common practice.</div>
              <div>Given these factors, thoroughly weigh your options and research potential attorneys before making a decision. Our personal experience involved consultations with over 30 attorneys in California and New York, highlighting the importance of due diligence in selecting the right legal representation.</div>
            </div>
          <div class="box" v-on:click="faqToggle('twenty')">20. Where to send the petition?<i class="fa fa-circle-plus" style="margin-left: 8px"></i></div>
            <div v-if="descriptionVisible.twenty" class="description">
              <div>I printed all the necessary documents and attachments and arranged them in the sequence outlined in the Table of Contents, placing the bank checks for the fee payment at the top. I then sent this package through UPS. The USCIS website <a target="a_blank" class="link" style="font-weight: 500" href="https://www.uscis.gov/i-140">provides addresses (see "Where to File")</a> for sending petitions, which vary based on the forms being sent, the postal service used, and the state where you plan to work, as well as tips for organizing your petition.</div>
            </div>
      </div>

      <div class="col-sm-6 col-12" style="margin-top: 1rem">
        <h5 style="font-weight: 600; margin-bottom: 8px">BLOG</h5>
        <div style="margin-bottom: 20px">The most popular success stories. Read more <a href="https://www.selfpetitionusa.com/blog/1" class="link">HERE</a></div>
          <a href="https://www.selfpetitionusa.com/success-story-software-engineer-2" class="box">1. EB-2 NIW approval for software engineer <i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>
          <a href="https://www.selfpetitionusa.com/success-story-data-scientist" class="box">2. EB-2 NIW approval for data scientist<i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>
          <a href="https://www.selfpetitionusa.com/success-story-data-analyst" class="box">3. EB-2 NIW approval for data analyst<i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>
          <a href="https://www.selfpetitionusa.com/success-story-product-manager" class="box">4. EB-2 NIW approval for product manager<i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>
          <a href="https://www.selfpetitionusa.com/success-story-chips-engineer" class="box">5. EB-2 NIW approval for chips engineer<i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>
          <a href="https://www.selfpetitionusa.com/success-story-network-engineer" class="box">6. EB-2 NIW approval for 5G network engineer<i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>
          <a href="https://www.selfpetitionusa.com/success-story-automotive-engineer" class="box">7. EB-2 NIW approval for automotive engineer<i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>
          <a href="https://www.selfpetitionusa.com/success-story-venture-capitalist" class="box">8. EB-2 NIW approval for the Head of Investments & Portfolio Capital<i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>
          <a href="https://www.selfpetitionusa.com/success-story-investment-banker" class="box">9. EB-2 NIW approval for investment banker<i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>
          <a href="https://www.selfpetitionusa.com/success-story-human-resources" class="box">10. EB-2 NIW approval for HR employee<i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>

        <div style="margin-bottom: 20px; margin-top: 20px">The most popular blog articles. Read more <a href="https://www.selfpetitionusa.com/blog/1" class="link">HERE</a></div>
          <a href="https://www.selfpetitionusa.com/stem-approvals" class="box">11. EB-2 NIW approval rates for STEM<i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>
          <a href="https://www.selfpetitionusa.com/ai-blog" class="box">12. Write EB-2 NIW with artificial intelligence<i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>
          <a href="https://www.selfpetitionusa.com/our-track-record" class="box">13. Building a thriving community<i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>
          <a href="https://www.selfpetitionusa.com/new-eta9089" class="box">14. Use new ETA-9089 form for EB-2 NIW<i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>
          <a href="https://www.selfpetitionusa.com/eb2niw-mistakes-to-avoid-2" class="box">15. EB-2 NIW cases that fail - avoid these mistakes!<i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>
          <a href="https://www.selfpetitionusa.com/adjustment-of-status-vs-consular-processing" class="box">16. Adjustment of Status vs. Consular Processing<i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>
          <a href="https://www.selfpetitionusa.com/eb2-national-interest-waiver-documents-checklist" class="box">17. EB-2 NIW documents checklist<i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>
          <a href="https://www.selfpetitionusa.com/prepare-eb2-niw-recommendation-letters" class="box">18. Prepare EB-2 NIW recommendation letters<i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>
          <a href="https://www.selfpetitionusa.com/independent-recommendation-letters" class="box">19. EB-2 NIW independent recommendation letters<i class="fa fa-arrow-up-right-from-square" style="margin-left: 8px"></i></a>
      </div>
      
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'SelPetitionUsa',
  data() {
    return {
      descriptionVisible: {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
        nine: false,
        ten: false,
        eleven: false,
        twelve: false,
        thirteen: false,
        fourteen: false,
        fifteen: false,
        sixteen: false,
        seventeen: false,
        eighteen: false,
        nineteen: false,
        twenty: false,
      }
    };
  },
  methods: {
    faqToggle(faqNumber) {
      // First, set all entries to false
      Object.keys(this.descriptionVisible).forEach(key => {
        this.descriptionVisible[key] = false;
      });
      // Then toggle the clicked section to true
      this.descriptionVisible[faqNumber] = true;
    }
  }
}
</script>
