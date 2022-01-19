import React from 'react';
import './style.css';

// function FirstComponent({content}) {
//   return(
//     <SecondComponent content={content}/>
//   );
// }

// function SecondComponent({content}) {
//   return(
//     <ThirdComponent content={content}/>
//   );
// }

// function ThirdComponent({content}) {
//   return(
//     <FinalComponent content={content}/>
//   );
// }

// function FinalComponent({content}) {
//   return(
//     <h3>{content}</h3>
//   );
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <FirstComponent content='This is the content'/>
//       </div>
//     );
//   };
// }

// export default App;

function FirstComponent({ children }) {
  return <div>{children}</div>;
}

function SecondComponent({ children }) {
  return <div>{children}</div>;
}

function ThirdComponent({ children }) {
  return <div>{children}</div>;
}

function FinalComponent({ content }) {
  return <h3>{content}</h3>;
}

class App extends React.Component {
  constructor() {
    super();
    this.content = 'This is the content';
  }

  render() {
    return (
      <div>
        <FirstComponent>
          <SecondComponent>
            <ThirdComponent>
              <FinalComponent content={this.content} />
            </ThirdComponent>
          </SecondComponent>
        </FirstComponent>
      </div>
    );
  }
}

export default App;
