import React from 'react';

export const ThemeContext = React.createContext(null);

export class AClass extends React.Component {
    render() {
        return (
            <>
                <h1>React's Context Provider and Consumer</h1>
                <div className="ContextSample" >
                    <p>A Class</p>
                    <ThemeContext.Provider value={'green'} >
                        <DClass />
                    </ThemeContext.Provider>
                </div>
            </>
        )
    }
}

class DClass extends React.Component {
    render() {
        return (
            <div className="ContextSample">
                <p>D Class</p>
               <CClass />
            </div>
        )
    }
}

class CClass extends React.Component {
    render () {
        return (
            <div className="ContextSample">
                <p>C Class</p>
                <ThemeContext.Consumer>
                    {value => <div style={{color: value}}>
                        Hello green world! Using context.
                    </div>}
                </ThemeContext.Consumer>
                Hello!
            </div>
        )
    }
}