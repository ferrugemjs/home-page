/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const Remarkable = require('../../core/Remarkable');
const hljs = require('highlight.js');

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('new-logo-home.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('getting-started.html', language)}>Getting Started</Button>
            <Button href="#cod_exa_case">Example</Button>
            <Button target="_blank" href="https://github.com/ferrugemjs/library">GitHub</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'Inspired from <a target="_blank" href="http://aurelia.io/">Aurelia</a>.',
        image: imgUrl('easy-use.png'),
        imageAlign: 'top',
        title: 'Simple and Convencional',
      },
      {
        content: 'Inspired from <a target="_blank" href="https://reactjs.org/">React</a>.',
        image: imgUrl('reactivity.png'),
        imageAlign: 'top',
        title: 'Reactive',
      },
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection"
    style={{textAlign: 'center', backgroundColor: '#fff'}}>
    <img src={ imgUrl('feather_80x80.png') }/>
    <h2>Lite and Powerfull</h2>
    <MarkdownBlock>No jquery required, only 2kB!</MarkdownBlock>
  </div>
);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'left',
        title: 'Example',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="light">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

const CodeExample = props => (
<div id="cod_exa_case" className="container paddingBottom">
  <div className="wrapper">
    <div className="gridBlock">
      <div className="blockElement threeByGridBlock">
        <h2>{"Template"}</h2>
          <Remarkable>
{`
\`\`\`xml
<template>
  <div>
    <ol>
      <li each="todo in this.todos">
        <em>\${todo}</em>
      </li>
    </ol>
    <input 
      type="text" 
      value="\${this.desc}" 
      change.bind="this.desc"/>
  </div>
</template>
\`\`\`
`} 
          </Remarkable>
      </div>
      <div className="blockElement threeByGridBlock">
        <h2>{"JavaScript"}</h2>
          <Remarkable>
{`
\`\`\`javascript
export class TodoList{  
  constructor(){
    this.todos = ['do a test'];
  }
  set desc(desc){
     this.todos.push(desc);
  }
  get desc(){
     return "";
  }
}
\`\`\`
`}  
          </Remarkable>
      </div>
      <div className="blockElement threeByGridBlock">
        <h2>{"Result"}</h2>
        <iframe 
          src="https://ferrugemjs.github.io/examples/index.html" 
          border="0"
          style={{height:"260px",width:"100%"}}>
        </iframe>
      </div>       
    </div>
  </div>   
</div>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';
    // <Showcase language={language} />
    // <HomeSplash language={language} />
    return (
      <div>    
        <div className="mainContainer" style={{backgroundColor:'#fff'}}>
          <Features />
          <FeatureCallout />
        </div>
        <CodeExample/>
      </div>
    );
  }
}

module.exports = Index;
