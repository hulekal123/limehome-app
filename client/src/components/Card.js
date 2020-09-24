import React from 'react';
import '../css/Card.css';
import hotel from '../icon/hotel.jpg' ;


export class Card extends React.Component{

    vicinity = null;
    state = {
        // The map instance to use during cleanup
        title : null,
        address : null
      };


    componentDidUpdate() {

        const result = this.props.places[1];
        if(result.vicinity !== undefined) {
             this.vicinity = result.vicinity.replace(/<br\s*\/?>/ig, "\r\n")
        }
      
        if (this.state.title !== result.title && 
            this.state.vicinity !== this.vicinity ) {
            this.setState({ title: result.title });
            this.setState({ address: this.vicinity });
          }
     }

    render() {
        return (
            <div class="card">
                <div class = "image">
                    <img src={hotel}/>
                </div>
            
                <div class="content">
                    <div> <h4>{this.state.title} </h4></div>
                    <div>
                        {this.state.address}
                    </div>
                    <button class ="button">Book</button>
                </div>
            </div>
        );
    };
}