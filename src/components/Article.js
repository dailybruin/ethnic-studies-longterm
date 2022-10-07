import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../shared/config";
import Divider from "../images/divider.svg";
import TopDivider from "../images/top_divider.svg"

const Container = styled.div`
  margin: 8% auto;
  height: fit-content;
  text-align: left;
  font-weight: 200;
  font-size: 20px;
  line-height: 24px;
  position: relative;
  h2 {
    font-size: 64px;
    line-height: 1.5em;
    margin: 0;
  }
`;

const SectionHeader = styled.div`
  font-size: 35px;
  line-height: 1.5em;
  font-family: 'Bitter', serif;
  font-weight: bold;
  font-style: italic;
  color: white;
  text-align: center;
  margin-top: 1.5em;
  margin-bottom: 1em;
  ${mediaQueries.mobile} {
    font-size: 22px;
    line-height: 1em;
  }
`;

const Figure = styled.div`
  margin: 1em auto;
  width: 90%;
  
  img {
    width: 100%;
  }
`;

const SideImg = styled.div`
  float: right;
  width: 90%;
  font-size: 16px;
  padding: 20px;
  margin-right: 3%;

  p {
    margin: 0;
    font-weight: 700;
  }
  
  img {
    width: 100%;
  }
`;

const CapCred = styled.div`
  font-style: italic;
  color: white;
  font-size: 16px;
  margin-left: 1%;
  ${mediaQueries.mobile} {
    font-size: 12px;
    line-height: 1em;
  }
`;

const TextCred = styled.div`
  width: 90%;
  margin: auto;
  color: white;
  font-style: italic;
  font-family: 'Merriweather', serif;
  margin-top: 2.5em;
  ${mediaQueries.mobile} {
    font-size: 12px;
    line-height: 1em;
  }
`;

const TextContainer = styled.div`
  width: 90%;
  margin: auto;
  color: white;
  font-family: 'Merriweather', serif;
  ${mediaQueries.mobile} {
    font-size: 12px;
    line-height: 1em;
  }
`

const Related = styled.div`
  width: 90%;
  margin: auto;
  color: white;
  font-family: 'Merriweather', serif;
  a{
    color: lightblue;
  }
  ${mediaQueries.mobile} {
    font-size: 12px;
    line-height: 1em;
  }
`


export default function Article(props) {
    return (
      <Container>
          {props.content.map((info) => {
              if (info.type == "section_header")
              {
                return (
                  <TextContainer>
                    <SectionHeader>
                      {info.value.section}
                    </SectionHeader>
                  </TextContainer>
                )
              } else if (info.type == "text") {
                return (
                  <TextContainer>
                    <p>{info.value}</p>
                  </TextContainer>
                );
              } 
              else if (info.type == "text_credits") {
                return (
                  <TextCred>
                    <p>{info.value.data}</p>
                  </TextCred>
                );
              } 
              else if (info.type == "related") {
                return (
                  <Related>
                    <p>[Related: 
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    ]
                    </p>
                  </Related>
                );
              } 
              else if (info.type == "hyperlink1") {
                return (
                  <Related>
                    <p>Much of the field of ethnic studies originated at the university level in the 1960s at UC Berkeley and San Francisco State University. The movement to found an ethnic studies discipline stemmed from students of color aiming to institutionalize studies of their own communities, according to 
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    . However, many of them were met with violence from the state as they protested for its inclusion in academia.
                    </p>
                  </Related>
                );
              } 
              else if (info.type == "hyperlink2") {
                return (
                  <Related>
                    <p>In November, BOARS addressed revisions made by the writing team to the proposed A-G ethnic studies course criteria, a
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    &nbsp;of course guidelines, course expectations and skills in order to meet the requirement. BOARS previously issued concerns in October that the criteria’s language was inaccessible.
                    </p>
                  </Related>
                );
              }
              else if (info.type == "hyperlink3") {
                return (
                  <Related>
                    <p>Despite the concerns, BOARS still 
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    &nbsp;10-1-1 to advance the measure to the UC Academic Council, the administrative arm of the Assembly of the Academic Senate.
                    </p>
                  </Related>
                );
              }
              else if (info.type == "hyperlink4") {
                return (
                  <Related>
                    <p>BOARS members 
                    <a href={info.value.url1} target="_blank"> {info.value.data1}</a>
                    &nbsp;in an April meeting that under-resourced schools were California’s responsibility to address, adding that ethnic studies would be a graduation requirement for high school students in 2030 regardless. 
                    <a href={info.value.url2} target="_blank"> {info.value.data2}</a> 
                    , a state law signed by Gov. Gavin Newsom on Oct. 8, separately designates a one-semester ethnic studies course as a graduation requirement for California high school students by the 2029-2030 academic year.
                    </p>
                  </Related>
                );
              }  
              else if (info.type == "hyperlink5") {
                return (
                  <Related>
                    <p>Some campus senates also said the course criteria were more narrowly defined in the proposal in comparison to the California State Board of Education 
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    , Horwitz and Sopaure added in the emailed statement. The ESMC provides guidelines for courses to meet the AB 101 requirement, detailing implementation practices for school districts, an introduction to ethnic studies and sample courses. 
                    </p>
                  </Related>
                );
              }
              else if (info.type == "hyperlink6") {
                return (
                  <Related>
                    <p>The Academic Council 
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    &nbsp;to BOARS for further revision in late March after systemwide review, asking BOARS and the proposal’s authors to clarify how the ESMC related to the UC’s proposed criteria, how high school students could fulfill the requirement without access to a qualifying course and the ways in which the criteria language could be made more accessible.
                    </p>
                  </Related>
                );
              }
              else if (info.type == "hyperlink7") {
                return (
                  <Related>
                    <p>According to May
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    , BOARS members echoed critiques from the prior systemwide feedback and continued seeking alignment with ESMC.
                    </p>
                  </Related>
                );
              }
              else if (info.type == "hyperlink8") {
                return (
                  <Related>
                    <p>The writing team provided BOARS with 30 to 40 documented citations that its course criteria were in alignment with the ESMC, said Andrew Jolivette, chair of the department of ethnic studies at UCSD and a member of the writing team. Additionally, some members on the Instructional Quality Commission – which developed the ESMC under the California State Board of Education – said the requirement aligns with the ESMC in a 
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    .
                    </p>
                  </Related>
                );
              }
              else if (info.type == "hyperlink9") {
                return (
                  <Related>
                    <p>On May 12, Hong and Jolivette released a
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    &nbsp;defending the proposal from criticisms issued by BOARS. They said BOARS members also expressed fears of external pressures from organizations such as Fox News and extremists such as white supremacists. In documents obtained by The Bruin, Rebecca Plant – chair of UCSD’s committee on admissions during systemwide review – said the UCSD committee had concerns about far-right news pundits propagandizing the academic language of the proposal.
                    </p>
                  </Related>
                );
              }
              else if (info.type == "hyperlink10") {
                return (
                  <Related>
                    <p>The proposed UC ethnic studies requirement has also received backlash in a 
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    &nbsp;from the AMCHA Initiative – an organization that describes itself as dedicated to investigating and combatting antisemitism in higher education – stating that the proposal is politically motivated, ideological and antisemitic. The online version of the letter – signed by over 1,200 unnamed UC stakeholders – said the proposal was rooted in critical ethnic studies which would situate Jewish students as oppressors.
                    </p>
                  </Related>
                );
              }
              else if (info.type == "hyperlink11") {
                return (
                  <Related>
                    <p>The proposal also received pushback from conservative groups, as well as UC San Francisco, UCLA and UCSD academic senate members attempting to circulate a petition to end the requirement, according to minutes from 
                    <a href={info.value.url1} target="_blank"> {info.value.data1}</a>
                    &nbsp;and 
                    <a href={info.value.url2} target="_blank"> {info.value.data2}</a>
                    &nbsp;admissions committees. Some accusations of antisemitism, Hong and Jolivette said in their statement, are from organizations with a history of racism. 
                    </p>
                  </Related>
                );
              }
              else if (info.type == "hyperlink12") {
                return (
                  <Related>
                    <p>The co-founder of AMCHA, Tammi Rossman-Benjamin, is a former UCSC faculty member who in 2013 
                    <a href={info.value.url1} target="_blank"> {info.value.data1}</a>
                    &nbsp;students from the Muslim Students Association and Students for Justice in Palestine had ties to terrorism. In response to backlash, she denied accusations of Islamophobia and racism in a 2013 
                    <a href={info.value.url2} target="_blank"> {info.value.data2}</a>
                    &nbsp;to Mark Yudof, the UC’s president at the time.
                    </p>
                  </Related>
                );
              }
              else if (info.type == "hyperlink13") {
                return (
                  <Related>
                    <p>Several Jewish studies professors from across the UC system and other universities also criticized AMCHA’s definition of antisemitism as too broad in a 2014 
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    .
                    </p>
                  </Related>
                );
              }
              else if (info.type == "hyperlink14") {
                return (
                  <Related>
                    <p>A May 31 
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    &nbsp;from nearly 200 UC faculty also voiced concerns about the ethnic studies requirement, adding that it offers no academic benefits and should no longer be considered. The letterhead was signed by Joseph Manson, a former professor of anthropology at UCLA.
                    </p>
                  </Related>
                );
              }
              else if (info.type == "hyperlink15") {
                return (
                  <Related>
                    <p>In an 
                    <a href={info.value.url1} target="_blank"> {info.value.data1}</a>
                    &nbsp;explaining his 2022 resignation, Manson said K-12 schools are indoctrinating students, including in his claim a link to 
                    <a href={info.value.url2} target="_blank"> {info.value.data2}</a>
                    &nbsp;claiming white children are coming out as LGBTQ+ as a result of feelings of guilt resulting from ethnic studies curriculum.
                    </p>
                  </Related>
                );
              }
              else if (info.type == "hyperlink16") {
                return (
                  <Related>
                    <p>Over 1,300 signatories – including UC faculty, ethnic studies professionals, educational organizations and ethnic studies educators – signed a written 
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    &nbsp;in support of the requirement in May. It said the curriculum was being targeted by those who have no expertise in ethnic studies.
                    </p>
                  </Related>
                );
              } 
              else if (info.type == "hyperlink17") {
                return (
                  <Related>
                    <p>Critical race theory analyzes how race impacts society, people, legal systems and other institutions, according to the
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    . According to the CSBA, while some elements of the theory are found in some perspectives taught in ethnic studies, the two fields are not synonymous or interchangeable.
                    </p>
                  </Related>
                );
              } 
              else if (info.type == "hyperlink18") {
                return (
                  <Related>
                    <p>In April, the UC Academic Council 
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    &nbsp;attempts to prohibit the study of CRT and limit the ability to teach history in K-12 classrooms. 
                    </p>
                  </Related>
                );
              } 
              else if (info.type == "hyperlink19") {
                return (
                  <Related>
                    <p>But the writing team was invited to BOARS’ final meeting of the academic year in July. And BOARS members 
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    &nbsp;about under-resourced schools. 
                    </p>
                  </Related>
                );
              } 
              else if (info.type == "hyperlink20") {
                return (
                  <Related>
                    <p>Writing team members noted that UC admissions criteria already exceed state graduation requirements in six out of the seven categories. They also said AB 101 will specifically require ethnic studies courses for high school graduation, adding that there are state 
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    &nbsp;for developing ethnic studies courses.
                    </p>
                  </Related>
                );
              }
              else if (info.type == "hyperlink21") {
                return (
                  <Related>
                    <p>One study authored by professors from UCI and Stanford University found students at risk of dropping out of high school experienced an improvement in GPA, number of credits obtained and attendance from being assigned to an ethnic studies course. BOARS members familiar with the study’s methods found its analysis to be strong, though it did 
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    &nbsp;over its methodology and findings.
                    </p>
                  </Related>
                );
              } 
              else if (info.type == "hyperlink22") {
                return (
                  <Related>
                    <p>According to 
                    <a href={info.value.url} target="_blank"> {info.value.data}</a>
                    &nbsp;from a June meeting, some local committees disapproved of the current area H proposal, despite previous support for the requirement. 
                    </p>
                  </Related>
                );
              }  
              else if (info.type == "graphic") {
                return (
                  <Figure>
                    <img src = {info.value.url}/>
                    <CapCred>{info.value.credits}</CapCred>
                  </Figure>
                )
              }
              else if (info.type == "photo" || info.type == "illo") {
                return (
                  <SideImg>
                    <img src = {info.value.url}/>
                    <CapCred>{info.value.credits}</CapCred>
                  </SideImg>
                )
              }
              else if (info.type == "divider") {
                return (
                  <img style={{"width": "100%"}} src={Divider}/>
                )
              }
              else if (info.type == "top_divider") {
                return (
                  <img style={{"width": "100%"}} src={TopDivider}/>
                )
              }
          })}
      </Container>
    );
}