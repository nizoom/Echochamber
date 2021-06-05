import React, { Component } from "react";
import TagCloud from "react-tag-cloud"
import randomColor from "randomcolor"
import "./wordcloud.css"

const styles = {
    large: {
        fontSize: 60,
        fontWeight: 'bold'
    },
    small: {
        opacity: 0.7,
        fontSize: 16
    }
};



class MyCloud extends Component {
    // componentDidMount() {
    //     setInterval(() => {
    //         this.forceUpdate();
    //     }, 5000);
    // }

    render() {

        return (
            <div className='app-outer'>
                <div className='app-inner'>

                    <h1>react-tag-cloud demo</h1>
                    <TagCloud
                        className='tag-cloud'
                        style={{
                            fontFamily: 'sans-serif',
                            //fontSize: () => Math.round(Math.random() * 50) + 16,
                            fontSize: 30,
                            color: () => randomColor({
                                hue: 'blue'
                            }),
                            padding: 5,
                        }}>
                        <div style={{
                            fontFamily: 'serif',

                            fontStyle: 'italic',
                            fontWeight: 'bold',
                            color: randomColor()

                        }} key={Math.floor(Math.random() * 10)}>
                            {this.props.text.map((droplet) => (
                                <div key={Math.floor(Math.random() * 10)}
                                    style={{ fontSize: `${droplet.frequency * .5}em` }}
                                > { droplet.word} </div>
                            ))}
                        </div>

                    </TagCloud>

                </div>

            </div >
        );
    }
}


export default MyCloud;


{/* 
                        <div style={styles.large}>Transformers</div>
                        <div style={styles.large}>Simpsons</div>
                        <div style={styles.large}>Dragon Ball</div>
                        <div style={styles.large}>Rick & Morty</div>
                        <div style={{ fontFamily: 'courier' }}>He man</div>
                        <div style={{ fontSize: 30 }}>World trigger</div>
                        <div style={{ fontStyle: 'italic' }}>Avengers</div>
                        <div style={{ fontWeight: 200 }}>Family Guy</div>
                        <div style={{ color: 'green' }}>American Dad</div>


                        <div style={styles.small}>Dino Riders</div>
                        <div style={styles.small}>Silverhawks</div>
                        <div style={styles.small}>Bravestar</div>
                        <div style={styles.small}>Starcom</div>
                        <div style={styles.small}>Cops</div>
                        <div style={styles.small}>Alfred J. Kwak</div>
                        <div style={styles.small}>Dr Snuggles</div> */}