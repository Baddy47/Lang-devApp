import React, {useState} from 'react';
import './App.css';
import * as styles from './App.module.css';
import Dashboard from './components/dashboard/dashboard';
import Header from './components/header/header';
import Library from './components/library/library';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Games from './components/games/games';
import Learn from './components/learn/learn';

function App() {

    const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')) || []);
    const [wordIndex, setWordIndex] = useState(0);
    const progressBarWidth = {
        width: `${(100 / library.slice(-10).length) * (wordIndex+1)}vw`
    };

    const speak = (word) => {
        const speakInstance = new SpeechSynthesisUtterance(word);
        speakInstance.voice = speechSynthesis.getVoices()[4]
        speechSynthesis.speak(speakInstance)
    };

    return (
        <BrowserRouter>

            <Header/>

            <Switch>
                <Route path='/dashboard'>
                    <Dashboard/>
                </Route>

                <Route path='/games'>
                    <Games/>
                </Route>

                <Route path='/library'>
                    <Library library={library} setLibrary={setLibrary}/>
                </Route>

                <Route path='/learn'>
                    <div className={styles.progressBarContainer}>
                        <div className={styles.progressBar} style={progressBarWidth}/>
                    </div>
                    <Learn speak={speak} library={library} wordIndex={wordIndex} setWordIndex={setWordIndex}/>
                    <div onClick={() => {
                        if(wordIndex === library.length - 1) {
                            setWordIndex(0)
                        } else {
                            setWordIndex(wordIndex + 1)
                        }
                    }} className={styles.btnNext}/>
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

export default App;