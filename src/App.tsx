import React from "react";
import styled from "styled-components";

const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopDiv = styled.div`
  display: flex;
  flex-direction: row;

  background: #3b393a;
  color: #ececec;
`;

const TopImageDiv = styled.div`
  width: 420px;
`;

const TopContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
`;

const HeaderSpan = styled.span`
  font-size: 25px;
  font-weight: 400;
  margin: 5px 0;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftBarDiv = styled.div`
  float: left;
  width: 420px;
  padding: 0px 40px 20px;
  background: #cfd4d2;
  color: #2f2d2d;
  font-family: "Helvetica CE";
  font-size: 21px;
`;

const ContentMainDiv = styled.div`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

const ProjectDiv = styled.div``;

class App extends React.Component<{}> {
  render() {
    return (
      <PageStyle>
        <TopDiv>
          <TopImageDiv></TopImageDiv>
          <TopContentDiv>
            <h1>Piotr Rutkowski</h1>
            <HeaderSpan>https://www.linkedin.com/in/piorutko/</HeaderSpan>
            <HeaderSpan>https://github.com/Dpio</HeaderSpan>
          </TopContentDiv>
        </TopDiv>
        <ContentDiv>
          <LeftBarDiv>
            <h2>PROFILE</h2>
            <p>
              I started working as a software engineer in 2014. During this time
              I was dealing with creating user interfaces, web services,
              microservices and complex databases. I'm always interested in
              finding the best approach with end-users, even if there is a need
              to visit them. In my day-to-day work, I strongly believe that
              sharing knowledge and cooperate with teammates improve quality of
              code in the same way as writing tests, code reviews and using
              design patterns.
            </p>

            <h2>EDUCATION</h2>
            <h3>2010 – 2015</h3>
            <p>
              Bachelor of Engineering. University of Technology in Gdansk
              Faculty: Electronics, Telecommunications And Informatics
              Specialization: Algorithms and System Modelling
            </p>

            <h2>SKILLS</h2>
            <h3>Programming Languages:</h3>
            <p>C#, TypeScript, JavaScript, CoffeeScript, HTML, CSS</p>
            <h3>Frameworks:</h3>
            <p>
              WPF, WinForms, Entity Framework, NHibernate, Xamarin,
              Telerik.Data-Access, ASP.NET MVC, .NET Core
            </p>
            <h3>.NET Libraries:</h3>
            <p>
              Ninject, MVVM light toolkit, AutoFixture, NHapi, PostSharp, MVVM
              Cross, MassTransit, SemanticComparison, IdentityServer3, Swagger,
              AutoMapper, MassTransit
            </p>
            <h3>Web:</h3>
            <p>Angular, Webpack, Node.js, HAML, Mobx</p>
            <h3>Containers & Servers:</h3>
            <p>Hangfire, RabbitMq</p>
            <h3>Databases:</h3>
            <p>PostgreSQL, MySql, MSSql, Elastic- Search, SQLite</p>
            <h3>Testing, Version Control System:</h3>
            <p>
              nUnit, xUnit, Moq, Autofixture, FluentAssertions,
              SemanticComparison, Git, SVN
            </p>
            <h3>Tools:</h3>
            <p>
              VSTS, Jira, VisualStudio + R#, Microsoft SQL Server Management
              Studio, Visual Studio Code, Teamcity, AppVeyor
            </p>
            <h3>Other:</h3>
            <p>
              WebApi, REST, SOAP, Scrum, Kanban, Kibana, DDD, CQRS, Owin, JWT,
              IBM Watson
            </p>

            <h2>ADDITIONAL ACTIVITIE</h2>
            <p>
              Participate in :
              <ul>
                <li>Agile3m</li>
                <li>3camp</li>
                <li>MeetJs meetings</li>
                <li>Xamarin meetings</li>
              </ul>
            </p>

            <h2>LANGUAGES</h2>
            <p>
              <b>Polish</b> - native <br />
              <b>English</b> - advanced/fluent <br />
              <b>German</b> - basic <br />
            </p>

            <h2>INTERESTS</h2>
            <p>
              <ul>
                <li>Surfing</li>
                <li>Board sports</li>
                <li>Cooking</li>
              </ul>
            </p>
          </LeftBarDiv>
          <ContentMainDiv>
            <div>
              <h2>ACADEMIC EXPERIENCE</h2>
              <h3>Gdańsk, University of Technology 09.2014 – 02.2015</h3>

              <ProjectDiv>
                <h4>
                  09.2014 – 02.2015 Project: Application that supports memory
                  training
                </h4>

                <p>
                  Description: Implementation of few training methods that are
                  used in classic memory training. <br />
                  Technologies: XAML, Windows Phone, MVVM Light Toolkit,
                  Ninject, SCRUM
                </p>
              </ProjectDiv>

              <ProjectDiv>
                <h4>02.2015 – 02.2016 Project: ERD Contractor 2</h4>
                <p>
                  Description: Application helping with designing ERD diagrams
                  for database schemas. It's was designed to replace the old
                  version of ERD Constructor that was used for many years at the
                  Gdańsk University of Technology on classes on curses for
                  projecting databases. It is stand-alone desktop application so
                  it also could be used by anyone that would like to design
                  diagram of his database. <br />
                  Source: https://bitbucket.org/piotrek91/erdconstructor2 <br />
                  Technologies: Java 8, SCRUM
                </p>
              </ProjectDiv>
            </div>
            <div>
              <h2>OTHER PROJECTS EXPERIENCE</h2>
              <ProjectDiv>
                <h3>
                  2017: Let’s Code – Gdańsk Competition url -
                  http://letscode.sii.pl/ <br />
                  Project: Room reservation
                </h3>

                <p>
                  Description: The application that allows the user to reserve a
                  room for a meeting with few clicks. The user can also find a
                  pair of special relax rooms – for example, to play table
                  tennis. If the user is looking for someone to play he needs to
                  mark himself as interested and if the system will find a pair
                  for him it will reserve the room for the nearest slot. <br />
                  Technologies: C#, .NET Core 2.0, Angular4, TypeScript,
                  SignalR, WebApi, IdentityServer4, MSSql
                </p>
              </ProjectDiv>

              <ProjectDiv>
                <h3>
                  2016: Let’s Code – Gdansk Competition url -
                  http://letscode.sii.pl/ <br />
                  Project: GitHub for a non-IT person
                </h3>

                <p>
                  Description: The application that gathers people with
                  different skills to cooperate and build a project together.
                  For example, Alice has an idea for creating some short movie
                  to collect money for nearest animal shelter, and she wrote
                  scenario. She also knows Bob that has camera and skills to do
                  post-production, but they still need someone that be an actor,
                  someone for sound etc. so they create a project, define what
                  skills they have, describe the project and who they are
                  looking for. Other persons can contribute. Application ended
                  with the possibility to create a project, define it and be
                  able to contribute but only in the simplest approach. <br />
                  Technologies: C#, .NET Core 1.0, Angular2, SignalR, WebApi,
                  MSSql
                </p>
              </ProjectDiv>
            </div>
          </ContentMainDiv>
        </ContentDiv>
      </PageStyle>
    );
  }
}

export default App;
